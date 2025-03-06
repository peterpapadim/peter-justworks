<script setup lang="ts">
  import { ref } from 'vue';
  import type { AllocationDropdownProps } from './calculator.types';
  const { selectedOption, options, onChange, id } =
    defineProps<AllocationDropdownProps>();
  const selected = ref<string>(selectedOption);
</script>

<template>
  <div class="wrapper bg-secondary-green">
    <label :for="id">Allocate: </label>
    <div class="select-wrapper">
      <select :id="id" v-model="selected" @change="onChange">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: relative;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  .select-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }
  select {
    height: 100%;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    text-align: right;
    text-align-last: end;
    padding: 0 30px;
  }

  label {
    font-size: 16px;
  }
</style>
