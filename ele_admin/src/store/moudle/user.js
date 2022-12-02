import userLogin from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth.js'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      const { username, password } = userInfo
      userLogin({
        username: username.trim(),
        password: password
      })
        .then((response) => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default {
  actions: {}
}
