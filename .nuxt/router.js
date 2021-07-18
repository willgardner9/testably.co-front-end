import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _abe80328 = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _3c3831d6 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _31cd7930 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4920321b = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _596ac0f6 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _19878718 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _2e91975f = () => interopDefault(import('../pages/dashboard/abtest.vue' /* webpackChunkName: "pages/dashboard/abtest" */))
const _385c28a8 = () => interopDefault(import('../pages/dashboard/new-abtest.vue' /* webpackChunkName: "pages/dashboard/new-abtest" */))
const _1d71a051 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _abe80328,
    name: "account"
  }, {
    path: "/dashboard",
    component: _3c3831d6,
    name: "dashboard"
  }, {
    path: "/login",
    component: _31cd7930,
    name: "login"
  }, {
    path: "/logout",
    component: _4920321b,
    name: "logout"
  }, {
    path: "/pricing",
    component: _596ac0f6,
    name: "pricing"
  }, {
    path: "/register",
    component: _19878718,
    name: "register"
  }, {
    path: "/dashboard/abtest",
    component: _2e91975f,
    name: "dashboard-abtest"
  }, {
    path: "/dashboard/new-abtest",
    component: _385c28a8,
    name: "dashboard-new-abtest"
  }, {
    path: "/",
    component: _1d71a051,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
