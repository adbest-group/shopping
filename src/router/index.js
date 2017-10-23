import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/Index.vue'
import detail from '../pages/Detail.vue'
import notFound from '../pages/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: '/dist',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
})
