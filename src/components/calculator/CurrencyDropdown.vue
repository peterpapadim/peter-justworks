<script setup lang="ts">
  import { ref } from 'vue';
  import type { CurrencyDropdownProps } from './calculator.types';
  const { selectedOption, options, onChange, id } =
    defineProps<CurrencyDropdownProps>();
  const selected = ref<string>(selectedOption);
</script>

<template>
  <label class="visually-hidden" :for="id">Select a currency</label>
  <div class="select-wrapper">
    <select :id="id" v-model="selected" @change="onChange">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
  .select-wrapper {
    width: 150px;
  }
  select {
    font-size: 36px;
    background-color: transparent;
    color: var(--default-black);
  }
</style>
