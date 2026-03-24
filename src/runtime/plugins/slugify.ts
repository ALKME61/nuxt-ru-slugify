import { defineNuxtPlugin } from '#app'
import { useSlugify } from '../composables/useSlugify'

export default defineNuxtPlugin((nuxtApp) => {
  const { slugify } = useSlugify()
  nuxtApp.provide('slugify', slugify)
})
