import { defineNuxtModule, addImports, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'ru-slugify',
    configKey: 'slugify',
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Добавляем composable в автоимпорт
    addImports({
      name: 'useSlugify',
      from: resolver.resolve('./runtime/composables/useSlugify'),
    })
    addPlugin(resolver.resolve('./runtime/plugins/slugify'))
  },
})
