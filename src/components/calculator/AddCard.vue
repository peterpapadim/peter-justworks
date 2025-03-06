<script setup lang="ts">
  import type { AddCardProps } from './calculator.types';
  defineProps<AddCardProps>();
</script>

<template>
  <button type="button" @click="onClick" class="text-primary-green medium">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 16px;
   }
</style>
