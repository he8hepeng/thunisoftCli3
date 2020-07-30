/*
 * @Author: HePeng
 * @Date: 2020-07-30 15:55:41
 * @Last Modified by: HePeng
 * @Last Modified time: 2020-07-30 15:57:35
 */

import Vue from 'vue'
let routerEachList = []
const commonComponentsContext = require.context('./', true, /\.vue$/)
commonComponentsContext.keys().forEach(key => {
  const ctrl =
    commonComponentsContext(key).default || commonComponentsContext(key)
  routerEachList.push({
    path: `/index/${key.replace(/(\.\/|\.vue)/g, '')}`,
    name: key.replace(/(\.\/|\.vue)/g, ''),
    component: ctrl
  })
})

export default routerEachList
