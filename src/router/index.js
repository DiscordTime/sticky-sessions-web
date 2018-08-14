import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Sessions from '@/components/Sessions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sessions/:sessionId',
      name: 'Sessions',
      component: Sessions
    }
  ]
})
