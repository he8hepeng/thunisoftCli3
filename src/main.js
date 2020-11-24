/*
 * @Author: HePeng
 * @Date: 2020-04-27 09:39:53
 * @Last Modified by: hepeng
 * @Last Modified time: 2020-11-03 14:33:24
 */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from './package/axios.js'
// 引入全局mixin 方法
import globalMixin from './assets/js/mixin/globalMinxin.js'
import fileSaver from 'file-saver'
// 引入 ant-design-vue
import Antd from 'ant-design-vue'
// 引入全局 less
import './assets/css/index.js'
// 引入lodash
import _ from 'lodash'
// 引入自定义
import '@/assets/js/directive/index.js'
// 引入公共的util工具
import util from './package/util/util.js'
// 全局组件
import './components/common/index.js'

Vue.use(globalMixin)
Vue.use(Antd)
Vue.prototype._ = _
Vue.prototype.axios = axios
Vue.prototype.util = util
Vue.prototype.$fileSaver = fileSaver

Vue.config.productionTip = false
// 取消日志警告
Vue.config.silent = false

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log(err, vm, info)
  throw new Error('有错误，赶紧改！！')
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
