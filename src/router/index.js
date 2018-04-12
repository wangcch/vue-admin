import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Tables from '@/pages/Tables'
import Forms from '@/pages/Forms'
import Login from '@/pages/Login'

import Layout from '@/layouts/Layout'

Vue.use(Router)

export const constantRouter = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: '',
        component: Dashboard,
        name: 'dashboard'
      },
      {
        path: '/tables',
        name: 'Tables',
        component: Tables,
        children: [
          // { path: 'index', component: Tables, name: 'tables', meta: { title: 'tables' } }
        ]
      },
      {
        path: '/forms',
        name: 'Forms',
        component: Forms,
        children: [
          // {}
        ]
      }
    ]
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
