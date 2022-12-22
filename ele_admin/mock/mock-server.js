const bodyParser = require('body-parser')
const Mock = require('mockjs')
const chokidar = require('chokidar')
const path = require('path')
const chalk = require('chalk')

const mockDir = path.join(process.cwd(), 'mock')

function registerRoutes(app) {
  let mockLastIndex
  const { mocks } = require('./index')
  const mocksForServer = mocks.map((route) => {
    return responseFake(route.url, route.type, route.response)
  })

  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }

  const mockRouteLength = Object.keys(mocksForServer).length

  return {
    mockRouteLength: mockRouteLength,
    mockStartIndex: mockLastIndex - mockRouteLength
  }
}

const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_URL}${url}`),
    type: type || 'get',
    response(req, res) {
      console.log('request invoke:' + req.path)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

function unRegisterRoutes() {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

  const mockRoutes = registerRoutes(app)
  var mockRouteLength = mockRoutes.mockRouteLength
  var mockStartIndex = mockRoutes.mockStartIndex

  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true
    })
    .on('all', (event, path) => {
      if (event === 'change' || event === 'add') {
        try {
          app._router.stack.splice(mockStartIndex, mockRouteLength)

          unRegisterRoutes()

          const mockRoutes = registerRoutes(app)
          mockRouteLength = mockRoutes.mockRouteLength
          mockStartIndex = mockRoutes.mockStartIndex
          console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
        } catch (error) {
          console.log(chalk.redBright(error))
        }
      }
    })
}
