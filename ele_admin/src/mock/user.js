/*
 * @Author: Plum
 * @Date: 2022-10-30 22:43:24
 * @LastEditors: Plum
 * @LastEditTime: 2022-10-30 22:59:09
 * @Description:
 */

const tokens = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}

const users = {
  'addmin-token': {
    roles: ['addmin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: (config) => {
      const { username } = config.body
      const token = tokens[username]

      //mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.',
        }
      }

      return {
        code: 20000,
        data: token,
      }
    },
  },
]
