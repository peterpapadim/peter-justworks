<script setup lang="ts">
  import type { HeroProps } from './hero.types';
  defineProps<HeroProps>();
</script>

<template>
  <h1 class="bold">{{ title }}</h1>
  <h2 class="regular">{{ description }}</h2>
</template>

<style scoped>
  h1 {
    font-size: 16px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 16px;
  }
</style>
