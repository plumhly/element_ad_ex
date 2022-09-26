import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "@/style/index.scss";
import "@/assets/iconfont/iconfont.scss"
import "@/assets/custom-theme/index.css"
import VueRouter from 'vue-router'
import routes from '@/router/index.js'
import "@/icons"

Vue.use(VueRouter)

const router = new VueRouter({
  routes
});

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')