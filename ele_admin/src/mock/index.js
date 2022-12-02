/*
 * @Author: Plum
 * @Date: 2022-10-30 22:51:31
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 17:21:25
 * @Description:
 */
const Mock = require('mockjs')
const { param2Obj } = require('./utils')

const user = require('./user')

const mocks = [...user]

function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = () => {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.reponseType) {
        this.custom.xhr.reponseType = this.reponseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return (options) => {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }

      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

module.exports = {
  mocks,
  mockXHR
}
