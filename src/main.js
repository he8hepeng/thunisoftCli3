/*
 * @Author: HePeng
 * @Date: 2020-04-27 09:39:53
 * @Last Modified by: HePeng
 * @Last Modified time: 2020-09-21 11:20:51
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
import 'ant-design-vue/dist/antd.css'
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
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.util = util
Vue.prototype.$fileSaver = fileSaver

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
