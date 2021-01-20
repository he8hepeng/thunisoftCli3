/*
 * @Author: hepeng  正则
 * @Date: 2019-10-04 00:10:10
 * @Last Modified by: HePeng
 * @Last Modified time: 2019-10-31 16:49:53
 * @returns Boolean
 */

export default {
  jwt(url) {
    return url.match('/?jwt=(.*?)(&|#).*')
  },
  phone(_phone) {
    // 验证手机号
    return /^1[3|4|5|8][0-9]\d{4,8}$/.test(_phone)
  },
  name(_name) {
    // 姓名
    return /^[\u4E00-\u9FA5]{2,4}$/.test(_name)
  },
  illegalCharacter(_string) {
    // 非法字符
    return /^[a-zA-Z0-9]+$/.test(_string)
  },
  idcard(_id) {
    // 身份证号
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(_id)
  },
  ip(_ip) {
    // ip
    return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(_ip)
  },
  port(_port) {
    // 端口
    return /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(_port)
  },
  chinese(_text) {
    // 效验中文
    return /^[\u4e00-\u9fa5]{0,}$/.test(_text)
  },
  hasChinese(_text) {
    // 包含中文
    return /[\u4E00-\u9FA5]/.test(_text)
  }
}
