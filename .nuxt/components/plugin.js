import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AbtestCard: () => import('../../components/AbtestCard.vue' /* webpackChunkName: "components/abtest-card" */).then(c => wrapFunctional(c.default || c)),
  AbtestType: () => import('../../components/AbtestType.vue' /* webpackChunkName: "components/abtest-type" */).then(c => wrapFunctional(c.default || c)),
  Button: () => import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  ButtonJS: () => import('../../components/ButtonJS.vue' /* webpackChunkName: "components/button-j-s" */).then(c => wrapFunctional(c.default || c)),
  Label: () => import('../../components/Label.vue' /* webpackChunkName: "components/label" */).then(c => wrapFunctional(c.default || c)),
  MobileNavigation: () => import('../../components/MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  NewABTestPrompt: () => import('../../components/NewABTestPrompt.vue' /* webpackChunkName: "components/new-a-b-test-prompt" */).then(c => wrapFunctional(c.default || c)),
  SkeletonLoader: () => import('../../components/SkeletonLoader.vue' /* webpackChunkName: "components/skeleton-loader" */).then(c => wrapFunctional(c.default || c)),
  VariationForm: () => import('../../components/VariationForm.vue' /* webpackChunkName: "components/variation-form" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
