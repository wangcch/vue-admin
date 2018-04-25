import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layouts/Layout'
import LayoutLogin from '@/layouts/LayoutLogin'

import Dashboard from '@/pages/Dashboard'
import Tables from '@/pages/Tables'
import Forms from '@/pages/Forms'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import err404 from '@/pages/error/404'
import err500 from '@/pages/error/500'

import store from '@/store/index.js'

Vue.use(Router)

export const constantRouter = [
  {
    path: '/',
    component: LayoutLogin,
    redirect: 'login',
    children: [
      {
        path: '/login',
        component: Login,
        name: 'login'
      },
      {
        path: '/register',
        component: Register,
        name: 'register'
      }
    ]
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
        name: 'tables',
        component: Tables,
        children: [
          // { path: 'index', component: Tables, name: 'tables', meta: { title: 'tables' } }
        ]
      },
      {
        path: '/forms',
        name: 'forms',
        component: Forms,
        children: [
          // {}
        ]
      }
    ]
  },
  {
    path: '*',
    component: Layout,
    redirect: '404',
    children: [
      {
        path: '404',
        component: err404,
        name: '404'
      },
      {
        path: '500',
        component: err500,
        name: '500'
      }
    ]
  }
]

export const asyncRouter = [
  {
    path: '/tables',
    name: 'tables',
    component: Layout,
    children: [
      { path: 'index', component: Tables, name: 'tables', meta: { title: 'tables' } }
    ]
  },
  {
    path: '/forms',
    name: 'forms',
    component: Layout,
    children: [
      { path: 'index', component: Forms, name: 'forms', meta: { title: 'forms' } }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: constantRouter
})

router.beforeEach((to, from, next) => {
  store.dispatch('setRouterActive', to.name)
  next()
})

export default router
