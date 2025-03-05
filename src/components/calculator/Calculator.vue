<script setup lang="ts">
  import { ref } from 'vue';
  import DollarInput from './DollarInput.vue';

  const dollarAmount = ref(100);
  const setDollarAmount = (value: number) => {
    dollarAmount.value = value;
  };
</script>

<template>
  <form>
    <DollarInput @set-dollar-amount="setDollarAmount" />
  </form>
</template>

<style scoped></style>
