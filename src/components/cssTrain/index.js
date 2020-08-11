/*
 * @Author: HePeng
 * @Date: 2020-08-09 15:09
 * @Last Modified by: hepeng
 * @Last Modified time: yyyy-08-Su 03:10:04
 */
const commonComponentsContext = require.context('./', true, /\.vue$/)
var routerList = []; var navList = []
commonComponentsContext.keys().forEach(key => {
  const ctrl =
    commonComponentsContext(key).default || commonComponentsContext(key)
  let ctrlPath = key.replace(/(\.\/|\.vue)/g, '')
  routerList.push({
    name: ctrl.name,
    path: `/index/cssTrain/${ctrlPath}`,
    component: ctrl
  })
  navList.push({
    name: ctrl.name
  })
})

export { routerList, navList }
