import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Tables from '@/components/Tables'
import Forms from '@/components/Forms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms
    }
  ]
})
