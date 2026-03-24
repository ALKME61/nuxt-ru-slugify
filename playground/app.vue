<template>
  <div>
    {{ $slugify('Оригинальный каталог') }}
  </div>
</template>

<script setup lang="ts">

const { slugify } = useSlugify()
const slug = slugify('Оригинальный каталог')
</script>
