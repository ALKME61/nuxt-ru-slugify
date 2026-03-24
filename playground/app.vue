<template>
  <div>
    {{ $slugify('hello! mir', '-') }}
  </div>
</template>

<script setup lang="ts">

const { slugify } = useSlugify()
const slug = slugify('hello, mir')
</script>
