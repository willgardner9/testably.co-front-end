import { wrapFunctional } from './utils'

export { default as AbtestCard } from '../../components/AbtestCard.vue'
export { default as AbtestType } from '../../components/AbtestType.vue'
export { default as AccountPlans } from '../../components/AccountPlans.vue'
export { default as Button } from '../../components/Button.vue'
export { default as ButtonJS } from '../../components/ButtonJS.vue'
export { default as ChooseAPlanPrompt } from '../../components/ChooseAPlanPrompt.vue'
export { default as CodeSnippet } from '../../components/CodeSnippet.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Label } from '../../components/Label.vue'
export { default as LandingPageStep } from '../../components/LandingPageStep.vue'
export { default as MobileNavigation } from '../../components/MobileNavigation.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as NewABTestPrompt } from '../../components/NewABTestPrompt.vue'
export { default as PricingCard } from '../../components/PricingCard.vue'
export { default as PricingTable } from '../../components/PricingTable.vue'
export { default as ROICalc } from '../../components/ROICalc.vue'
export { default as SkeletonLoader } from '../../components/SkeletonLoader.vue'
export { default as TableData } from '../../components/TableData.vue'
export { default as TableHead } from '../../components/TableHead.vue'
export { default as VariationForm } from '../../components/VariationForm.vue'
export { default as VariationTips } from '../../components/VariationTips.vue'

export const LazyAbtestCard = import('../../components/AbtestCard.vue' /* webpackChunkName: "components/abtest-card" */).then(c => wrapFunctional(c.default || c))
export const LazyAbtestType = import('../../components/AbtestType.vue' /* webpackChunkName: "components/abtest-type" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountPlans = import('../../components/AccountPlans.vue' /* webpackChunkName: "components/account-plans" */).then(c => wrapFunctional(c.default || c))
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyButtonJS = import('../../components/ButtonJS.vue' /* webpackChunkName: "components/button-j-s" */).then(c => wrapFunctional(c.default || c))
export const LazyChooseAPlanPrompt = import('../../components/ChooseAPlanPrompt.vue' /* webpackChunkName: "components/choose-a-plan-prompt" */).then(c => wrapFunctional(c.default || c))
export const LazyCodeSnippet = import('../../components/CodeSnippet.vue' /* webpackChunkName: "components/code-snippet" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLabel = import('../../components/Label.vue' /* webpackChunkName: "components/label" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingPageStep = import('../../components/LandingPageStep.vue' /* webpackChunkName: "components/landing-page-step" */).then(c => wrapFunctional(c.default || c))
export const LazyMobileNavigation = import('../../components/MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyNewABTestPrompt = import('../../components/NewABTestPrompt.vue' /* webpackChunkName: "components/new-a-b-test-prompt" */).then(c => wrapFunctional(c.default || c))
export const LazyPricingCard = import('../../components/PricingCard.vue' /* webpackChunkName: "components/pricing-card" */).then(c => wrapFunctional(c.default || c))
export const LazyPricingTable = import('../../components/PricingTable.vue' /* webpackChunkName: "components/pricing-table" */).then(c => wrapFunctional(c.default || c))
export const LazyROICalc = import('../../components/ROICalc.vue' /* webpackChunkName: "components/r-o-i-calc" */).then(c => wrapFunctional(c.default || c))
export const LazySkeletonLoader = import('../../components/SkeletonLoader.vue' /* webpackChunkName: "components/skeleton-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyTableData = import('../../components/TableData.vue' /* webpackChunkName: "components/table-data" */).then(c => wrapFunctional(c.default || c))
export const LazyTableHead = import('../../components/TableHead.vue' /* webpackChunkName: "components/table-head" */).then(c => wrapFunctional(c.default || c))
export const LazyVariationForm = import('../../components/VariationForm.vue' /* webpackChunkName: "components/variation-form" */).then(c => wrapFunctional(c.default || c))
export const LazyVariationTips = import('../../components/VariationTips.vue' /* webpackChunkName: "components/variation-tips" */).then(c => wrapFunctional(c.default || c))
