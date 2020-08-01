const commonComponentsContext = require.context('./', true, /\.vue$/)
let routerList = []
let navList = []
commonComponentsContext.keys().forEach(key => {
  const ctrl =
    commonComponentsContext(key).default || commonComponentsContext(key)
    console.log(key)
    const _templateName = key.replace(/(\.\/|\.vue)/g, '')
  routerList.push({
      path: `/index/instruct/${_templateName}`,
      name: _templateName,
      component: ctrl
  })
  navList.push({
    pathName: ctrl.name,
    pathIdx: _templateName
  })
})

export { navList, routerList }
