/*
 * @Author: Plum
 * @Date: 2022-09-29 12:56:31
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 16:58:58
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.scss'
import '@/assets/iconfont/iconfont.scss'
import '@/assets/custom-theme/index.css'
import VueRouter from 'vue-router'
import routes from '@/router/index.js'
import '@/icons'

import store from '@/store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
