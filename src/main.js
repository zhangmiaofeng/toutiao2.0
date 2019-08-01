import Vue from 'vue'
import App from './App.vue'

// 引入element组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.less'
import router from '@/router'
Vue.use(ElementUI)
// 控制台提示信息 开发环境来提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
