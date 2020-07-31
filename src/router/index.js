import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('../layouts/home.vue'),
      children: [
        {
          path: '/index/example',
          name: 'example',
          component: () =>
            import(/* webpackChunkName: 'about' */ '../example.vue') // 仅作为 功能演示及方法查询 后期将会删除
        },
        {
          path: '/index/smzq',
          name: 'smzq',
          component: () => import('../view/smzq.vue')
        },
        {
          path: '/index/instruct',
          name: 'instruct',
          component: () => import('../view/instruct.vue'),
          children: [
            {
              path: '/index/instruct/template',
              name: 'template',
              component: () => import('../components/template/template.vue')
            },
            {
              path: '/index/instruct/if',
              name: 'if',
              component: () => import('../components/template/if.vue')
            },
            {
              path: '/index/instruct/for',
              name: 'for',
              component: () => import('../components/template/for.vue')
            },
            {
              path: '/index/instruct/class',
              name: 'class',
              component: () => import('../components/template/class.vue')
            },
            {
              path: '/index/instruct/filter',
              name: 'filter',
              component: () => import('../components/template/filter.vue')
            },
            {
              path: '/index/instruct/computed',
              name: 'computed',
              component: () => import('../components/template/computed.vue')
            },
            {
              path: '/index/instruct/watch',
              name: 'watch',
              component: () => import('../components/template/watch.vue')
            },
            {
              path: '/index/instruct/mixin',
              name: 'mixin',
              component: () => import('../components/template/mixin.vue')
            }
          ]
        },
        {
          path: '/index/router/:id',
          name: 'router',
          component: () => import('../view/router.vue'),
          props: (_route) => ({
            age: _route.query.age,
            name: _route.query.name,
            interest: '女'
          })
        }
      ]
    }
  ]
})
