import Vue from 'vue'
import App from './App.vue'

// 引入element组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.less'
import router from '@/router'
import axios from 'axios'
Vue.use(ElementUI)
Vue.prototype.$https = axios
// 控制台提示信息 开发环境来提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
