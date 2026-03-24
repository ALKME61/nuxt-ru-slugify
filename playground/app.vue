<template>
  <div>
    {{ slug }}
  </div>
</template>

<script setup lang="ts">

const { slugify } = useSlugify()
const slug = slugify('hello, mir')
</script>
