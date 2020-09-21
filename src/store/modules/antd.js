/*
 * @Author: Jesse-HePeng
 * @Date: 2019-09-05 17:02:36
 * @Last Modified by: HePeng
 * @Last Modified time: 2020-09-21 15:15:17
 */
import cookies from "../../package/cookie.js";
export default {
  state: {
    spinIsShow: false
  },
  mutations: {
    GET_SPIN(state, _Boolean) {
      state.spinIsShow = _Boolean
    }
  },
  actions: {
    Set_Spin({ commit }, _Boolean) {
      commit('GET_SPIN', _Boolean)
    }
  }
};
