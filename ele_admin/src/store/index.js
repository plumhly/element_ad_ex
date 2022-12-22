/*
 * @Author: Plum
 * @Date: 2022-10-17 12:49:53
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 17:43:44
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

const fileLoader = require.context('./moudle', true, /.js$/)

// [].reduce(callbackfn)

const modules = fileLoader.keys().reduce((preContainer, current) => {
  const value = fileLoader(current).default
  const key = /(.*).js$/.exec(current)[1]
  preContainer[key] = value

  return preContainer
}, {})

Vue.use(Vuex)

const store = new Vuex.Store(modules, getters)

export default store
