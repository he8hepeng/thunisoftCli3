/*
 * @Author: Jesse-HePeng
 * @Date: 2019-09-05 17:02:36
 * @Last Modified by: hepeng
 * @Last Modified time: 2020-10-08 15:32:51
 */
import cookies from '../../package/cookie.js'
export default {
  state: {
  },
  getters: {
    getCookie: () => () => {
      return cookies.getCookie('token') // 从cookie 返回token
    }
  },
  mutations: {
  },
  actions: {
    clearCookie () {
      cookies.deleteCookie('token')
    },
    setUser ({ commit }, _DATA) {
      commit('GET_USER', _DATA)
    }
  }
}
