/*
 * @Author: HePeng
 * @Description:
 * @Date: 2021-01-04 20:12:25
 * @LastEditors: HePeng
 * @LastEditTime: 2021-01-20 21:26:57
 */
import moment from 'moment'
export default {
  // 格式化时间
  getTimeY(timeDate = new Date()) {
    return moment(timeDate).format('YYYY-MM-DD')
  },
  getTimeH(timeDate = new Date()) {
    return moment(timeDate).format('h:mm:ss')
  },
  getSetTime(timeDate = 'YYYY-MM-DD h:mm:ss') {
    return moment().format(timeDate)
  }
}
