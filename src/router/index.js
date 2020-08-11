import Vue from 'vue'
import Router from 'vue-router'
import { routerList } from '../components/cssTrain/index.js'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // 首页重定向
    {
      path: '/',
      name: '',
      redirect: '/index'
    },
    // 错误重定向
    {
      path: '*',
      name: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'entrance',
      component: () =>
          import('../layouts/home.vue'),
      children: [{
        path: '/index/example',
        name: 'example',
        component: () =>
            import(/* webpackChunkName: 'about' */ '../example.vue') // 仅作为 功能演示及方法查询 后期将会删除
      }, {
        path: '/index/cssTrain',
        name: 'css实例',
        component: () => import('../view/csstrain.vue'),
        children: routerList
      }]
    }
  ]
})
