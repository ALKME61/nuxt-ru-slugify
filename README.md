# nuxt-ru-slugify

> 🔤 Nuxt 3 & 4 module for generating URL-friendly slugs with **correct Russian (Cyrillic → Latin) transliteration**

## ✨ Features

* 🇷🇺 Accurate Cyrillic transliteration (no external deps)
* ⚡ Works out of the box with Nuxt 3 **and Nuxt 4**
* 🔌 Injected `$slugify` helper
* 🧩 Auto-imported `useSlugify` composable
* 🎯 Optional separator control
* 🪶 Lightweight & dependency-free

---

## 📦 Installation

```bash
npm i nuxt-ru-slugify
# or
yarn add nuxt-ru-slugify
```

---

## ⚙️ Setup

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-ru-slugify']
})
```

---

## 🚀 Usage

### 1. In templates(bug with type)

```vue
<template>
  <div>
    {{ $slugify('Привет мир!') }}
  </div>
</template>
```

👉 Output:

```
privet-mir
```

---

### 2. In script (Composable)(Recommended)

```ts
<script setup lang="ts">
const { slugify } = useSlugify()

console.log(slugify('Тестовая строка'))
</script>
```

---

### 3. Custom separator

```ts
slugify('Привет мир!', '_')
// privet_mir

slugify('Привет мир!', '')
// privetmir

slugify('Привет мир!')
// privet mir!
```

---

## 🧠 Behavior

* Automatically lowercases input
* Transliterates Cyrillic characters using built-in dictionary
* Removes unsupported characters
* Replaces non-alphanumeric sequences with a separator (if provided)
* Trims leading and trailing separators

---

## ⚠️ Notes

* If `text` is not a string, returns empty string
* In development mode, shows a warning in console

---

## 🧩 How it works

The module:

* Registers `useSlugify()` as auto-import
* Injects `$slugify` into Nuxt app via plugin

---

## 📌 Why this module?

Most slugify solutions:

* ❌ handle Cyrillic poorly
* ❌ produce inconsistent transliteration
* ❌ require extra configuration

`nuxt-ru-slugify` provides:

* ✅ predictable results
* ✅ clean SEO-friendly URLs
* ✅ zero-config setup

---

## 🛠 Development

```bash
npm install
npm run dev
```

---

## 📄 License

MIT

---

## ⭐ Support

If this project is useful — give it a ⭐ on GitHub 🙌
