import { wrapFunctional } from './utils'

export { default as AbtestCard } from '../../components/AbtestCard.vue'
export { default as AbtestType } from '../../components/AbtestType.vue'
export { default as Button } from '../../components/Button.vue'
export { default as ButtonJS } from '../../components/ButtonJS.vue'
export { default as Label } from '../../components/Label.vue'
export { default as MobileNavigation } from '../../components/MobileNavigation.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as NewABTestPrompt } from '../../components/NewABTestPrompt.vue'
export { default as SkeletonLoader } from '../../components/SkeletonLoader.vue'
export { default as VariationForm } from '../../components/VariationForm.vue'

export const LazyAbtestCard = import('../../components/AbtestCard.vue' /* webpackChunkName: "components/abtest-card" */).then(c => wrapFunctional(c.default || c))
export const LazyAbtestType = import('../../components/AbtestType.vue' /* webpackChunkName: "components/abtest-type" */).then(c => wrapFunctional(c.default || c))
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyButtonJS = import('../../components/ButtonJS.vue' /* webpackChunkName: "components/button-j-s" */).then(c => wrapFunctional(c.default || c))
export const LazyLabel = import('../../components/Label.vue' /* webpackChunkName: "components/label" */).then(c => wrapFunctional(c.default || c))
export const LazyMobileNavigation = import('../../components/MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyNewABTestPrompt = import('../../components/NewABTestPrompt.vue' /* webpackChunkName: "components/new-a-b-test-prompt" */).then(c => wrapFunctional(c.default || c))
export const LazySkeletonLoader = import('../../components/SkeletonLoader.vue' /* webpackChunkName: "components/skeleton-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyVariationForm = import('../../components/VariationForm.vue' /* webpackChunkName: "components/variation-form" */).then(c => wrapFunctional(c.default || c))
