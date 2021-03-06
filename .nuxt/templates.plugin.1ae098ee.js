import { loadStripe } from '@stripe/stripe-js/pure'

export default async function (context, inject) {
  const parsedOptions = {"stripeAccount":"","publishableKey":"pk_live_51InUqNBn4cPkjuwojNadJZCW5DsOcLkbbnbjs2uvH8iIRnfVA4Q0OrsVMfcelvyF8hzYM1Np3OZum6iF8tCIgNbe00GVTZgl7C","locale":"en","apiVersion":null}

  let stripePlugin = null
  try {
    let {
      publishableKey,
      stripeAccount,
      locale,
      version: apiVersion
    } = parsedOptions

    /**
     * Override the parsed options with the runtime config
     * as the runtime config always override.
     */
    const runtimeConfig = context.$config.stripe
    if (runtimeConfig) {
      if (runtimeConfig.publishableKey) publishableKey = runtimeConfig.publishableKey
      if (runtimeConfig.stripeAccount) stripeAccount = runtimeConfig.stripeAccount
      if (runtimeConfig.locale) locale = runtimeConfig.locale
      if (runtimeConfig.version) apiVersion = runtimeConfig.version
    }

    if (!publishableKey) {
      throw new Error('A Stripe publishable key is required.')
    }

    const options = {
      locale,
      apiVersion
    }

    if (stripeAccount) options.stripeAccount = stripeAccount

    stripePlugin = await loadStripe(publishableKey, options)
  } catch (e) {
    console.error(`[nuxt-stripe-module] ${e.message}`)
  }

  inject('stripe', stripePlugin)
  context.app.stripe = stripePlugin
}
