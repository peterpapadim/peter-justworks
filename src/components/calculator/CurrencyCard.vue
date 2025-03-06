<script setup lang="ts">
  import CurrencyDropdown from './CurrencyDropdown.vue';
  import AllocationDropdown from './AllocationDropdown.vue';
  import { computed, inject } from 'vue';
  import type { CurrencyCardProps } from './calculator.types';
  const { currency, availableCurrencyKeys, shares, allocation, index } =
    defineProps<CurrencyCardProps>();

  interface UpdateSelectedCurrencyTypes {
    updateSelectedCurrency: (
      newCurrency: { currency: string; shares: number; allocation: string },
      index: number
    ) => void;
    removeSelectedCurrency: (index: number) => void;
    addCurrency: () => void;
  }

  const calculator = inject<UpdateSelectedCurrencyTypes>('calculator');

  const onCurrencyDropdownChange = (event: Event) => {
    const target = event.target as HTMLSelectElement | null;
    const newValue = {
      currency: target?.value || currency,
      shares: 0,
      allocation,
    };
    if (calculator) {
      calculator.updateSelectedCurrency(newValue, index);
    }
  };

  const onAllocationDropdownChange = (event: Event) => {
    const target = event.target as HTMLSelectElement | null;
    const newValue = {
      currency: currency,
      shares: 0,
      allocation: target ? target.value : '0%',
    };
    if (calculator) {
      calculator.updateSelectedCurrency(newValue, index);
    }
  };

  const onRemoveClick = (index: number) => {
    if (calculator) {
      calculator.removeSelectedCurrency(index);
    }
  };

  const getCurrencyDropdownOptions = computed(() => {
    return [currency, ...availableCurrencyKeys];
  });

  const getShares = computed(() => {
    return shares ? shares : '--';
  });
</script>

<template>
  <div>
    <CurrencyDropdown
      :id="`currency-dropdown-${index}`"
      :selectedOption="currency"
      :options="getCurrencyDropdownOptions"
      :onChange="onCurrencyDropdownChange"
    />
    <button type="button" v-if="index > 1" @click="onRemoveClick(index)">
      Remove
    </button>
  </div>
  <p class="shares-text">{{ getShares }} shares</p>
  <AllocationDropdown
    :id="`allocation-dropdown-${index}`"
    :selectedOption="allocation"
    :options="Array.from({ length: 101 }, (_, i) => `${i}%`)"
    :onChange="onAllocationDropdownChange"
  />
</template>

<style scoped>
  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: transparent;
    border: none;
    color: var(--red);
    cursor: pointer;
    font-size: 12px;
    text-decoration: underline;
  }
  select {
    border: none;
    font-size: 36px;
    width: 150px;
    cursor: pointer;
  }
  .shares-text {
    font-size: 25px;
    margin: 10px 0;
  }
</style>
