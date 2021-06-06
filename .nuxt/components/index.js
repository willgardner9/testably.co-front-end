import { wrapFunctional } from './utils'

export { default as AbtestType } from '../../components/AbtestType.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Label } from '../../components/Label.vue'
export { default as Navbar } from '../../components/Navbar.vue'

export const LazyAbtestType = import('../../components/AbtestType.vue' /* webpackChunkName: "components/abtest-type" */).then(c => wrapFunctional(c.default || c))
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyLabel = import('../../components/Label.vue' /* webpackChunkName: "components/label" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
