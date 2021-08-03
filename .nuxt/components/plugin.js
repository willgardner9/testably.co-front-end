import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AbtestCard: () => import('../../components/AbtestCard.vue' /* webpackChunkName: "components/abtest-card" */).then(c => wrapFunctional(c.default || c)),
  AbtestType: () => import('../../components/AbtestType.vue' /* webpackChunkName: "components/abtest-type" */).then(c => wrapFunctional(c.default || c)),
  AccountPlans: () => import('../../components/AccountPlans.vue' /* webpackChunkName: "components/account-plans" */).then(c => wrapFunctional(c.default || c)),
  Button: () => import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  ButtonJS: () => import('../../components/ButtonJS.vue' /* webpackChunkName: "components/button-j-s" */).then(c => wrapFunctional(c.default || c)),
  ChooseAPlanPrompt: () => import('../../components/ChooseAPlanPrompt.vue' /* webpackChunkName: "components/choose-a-plan-prompt" */).then(c => wrapFunctional(c.default || c)),
  CodeSnippet: () => import('../../components/CodeSnippet.vue' /* webpackChunkName: "components/code-snippet" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Label: () => import('../../components/Label.vue' /* webpackChunkName: "components/label" */).then(c => wrapFunctional(c.default || c)),
  LandingPageStep: () => import('../../components/LandingPageStep.vue' /* webpackChunkName: "components/landing-page-step" */).then(c => wrapFunctional(c.default || c)),
  MobileNavigation: () => import('../../components/MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  NewABTestPrompt: () => import('../../components/NewABTestPrompt.vue' /* webpackChunkName: "components/new-a-b-test-prompt" */).then(c => wrapFunctional(c.default || c)),
  PricingCard: () => import('../../components/PricingCard.vue' /* webpackChunkName: "components/pricing-card" */).then(c => wrapFunctional(c.default || c)),
  PricingTable: () => import('../../components/PricingTable.vue' /* webpackChunkName: "components/pricing-table" */).then(c => wrapFunctional(c.default || c)),
  ROICalc: () => import('../../components/ROICalc.vue' /* webpackChunkName: "components/r-o-i-calc" */).then(c => wrapFunctional(c.default || c)),
  SkeletonLoader: () => import('../../components/SkeletonLoader.vue' /* webpackChunkName: "components/skeleton-loader" */).then(c => wrapFunctional(c.default || c)),
  TableData: () => import('../../components/TableData.vue' /* webpackChunkName: "components/table-data" */).then(c => wrapFunctional(c.default || c)),
  TableHead: () => import('../../components/TableHead.vue' /* webpackChunkName: "components/table-head" */).then(c => wrapFunctional(c.default || c)),
  VariationForm: () => import('../../components/VariationForm.vue' /* webpackChunkName: "components/variation-form" */).then(c => wrapFunctional(c.default || c)),
  VariationTips: () => import('../../components/VariationTips.vue' /* webpackChunkName: "components/variation-tips" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
