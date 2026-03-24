declare module '#app' {
  interface NuxtApp {
    $slugify: (text: string, separator?: string) => string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $slugify: (text: string, separator?: string) => string
  }
}

export {}
