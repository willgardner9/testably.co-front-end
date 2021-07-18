import { loadStripe } from '@stripe/stripe-js/pure'

export default async function (context, inject) {
  const parsedOptions = {"stripeAccount":"","publishableKey":"pk_test_51InUqNBn4cPkjuwoy3Wsd4Lj5u4xU4jinXXCYt2aeNptAY22iM3W8X4W4Q9U09QkoUClqiBgeaekva5DVxNco9TX00bhGjSnIQ","locale":"en","apiVersion":null}

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
