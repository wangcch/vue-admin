import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Tables from '@/components/Tables'
import Forms from '@/components/Forms'
import Login from '@/common/Login'
import Layout from '@/common/Layout'

Vue.use(Router)

export const constantRouter = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: Dashboard,
      name: 'dashboard'
    }]
  }
]

export const asyncRouter = [
  {
    path: '/tables',
    name: 'Tables',
    component: Layout,
    children: [
      { path: 'index', component: Tables, name: 'tables', meta: { title: 'tables' } }
    ]
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Layout,
    children: [
      { path: 'index', component: Forms, name: 'forms', meta: { title: 'forms' } }
    ]
  }
]

export default new Router({
  routes: constantRouter
})
