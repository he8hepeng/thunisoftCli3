import Vue from 'vue'
import Vuex from 'vuex'
import publics from './modules/public' // 全局数据
import antD from './modules/antd'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    publics,
    antD
  }
})
