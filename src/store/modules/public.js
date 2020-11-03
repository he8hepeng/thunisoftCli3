/*
 * @Author: Jesse-HePeng
 * @Date: 2019-09-05 17:02:36
 * @Last Modified by: hepeng
 * @Last Modified time: 2020-11-02 16:39:04
 */
import cookies from '../../package/cookie.js'
export default {
  state: {
    userId: undefined
  },
  getters: {
    getCookie: () => () => {
      return cookies.getCookie('token') // 从cookie 返回token
    },
    getUserId: (state) => () => {
      return state.userId
    }
  },
  mutations: {
  },
  actions: {
    clearCookie() {
      cookies.deleteCookie('token')
    },
    setUser({ commit }, _DATA) {
      commit('GET_USER', _DATA)
    }
  }
}
