<script setup lang="ts">
  import { computed, ref, onMounted, provide, reactive } from 'vue';
  import { fetchExchangeRates } from '../../services/coinbase';
  import {
    getAllCurrencyKeys,
    getPercentOfTotal,
    convertDollarsToCrypto,
    formatPercentStringToNumber,
  } from '../../utils/coinbase';
  import type { FetchPayload } from '../../utils/coinbase';

  import DollarInput from './DollarInput.vue';
  import CurrencyCard from './CurrencyCard.vue';
  import AddCard from './AddCard.vue';

  const data = ref<FetchPayload>({ currency: '', rates: {} });
  const dollarAmount = ref(100);
  const loading = ref<boolean>(false);
  const error = ref<string>('');
  const selectedCurrencies = reactive<
    {
      currency: string;
      shares: number;
      allocation: string;
    }[]
  >([
    { currency: 'BTC', shares: 0, allocation: '0%' },
    { currency: 'ETH', shares: 0, allocation: '0%' },
  ]);

  // Computed Properties
  const allSelectedCurrencyKeys = computed(() => {
    return selectedCurrencies.map(item => item.currency);
  });

  const availableCurrencyKeys = computed(() => {
    return getAllCurrencyKeys(data.value).filter(
      key => !allSelectedCurrencyKeys.value.includes(key)
    );
  });

  const getTotalAllocation = computed(() => {
    return selectedCurrencies.reduce((acc, item) => {
      return acc + formatPercentStringToNumber(item.allocation);
    }, 0);
  });

  // Functions to update state/refs
  const updateDollarAmount = (value: number) => {
    dollarAmount.value = value;
  };

  const updateSelectedCurrency = (
    newCurrency: { currency: string; shares: number; allocation: string },
    index: number
  ) => {
    selectedCurrencies[index] = newCurrency;
  };

  const removeSelectedCurrency = (index: number) => {
    selectedCurrencies.splice(index, 1);
  };

  const addCurrency = () => {
    selectedCurrencies.push({ currency: '--', shares: 0, allocation: '0%' });
  };

  // Providing functions to child components
  provide('calculator', {
    updateSelectedCurrency,
    removeSelectedCurrency,
    addCurrency,
  });

  // Function to fetch exchange rates
  const fetchData = async () => {
    try {
      loading.value = true;
      const response = await fetchExchangeRates('USD');
      const json = await response.json();
      data.value = json.data;
    } catch (fetchError) {
      const errorMsg = `Unable to fetch data: ${fetchError}`;
      error.value = errorMsg;
      console.error(errorMsg);
    } finally {
      loading.value = false;
    }
  };

  // Function to handle form submission
  const onFormSubmit = async () => {
    error.value = '';
    if (getTotalAllocation.value !== 100) {
      error.value = 'Allocation must total 100%';
      return;
    }
    await fetchData();
    if (error.value.length > 0) {
      return;
    }
    const incompleteCurrency = selectedCurrencies.find(
      item => item.currency === '--' && item.allocation !== '0%'
    );

    if (incompleteCurrency) {
      error.value = 'Please select a currency for all non-zero allocations';
      return;
    }

    selectedCurrencies.forEach(item => {
      if (item.allocation !== '0%') {
        const allocatedDollars = getPercentOfTotal(
          dollarAmount.value,
          formatPercentStringToNumber(item.allocation)
        );
        const cryptoValue = convertDollarsToCrypto(
          allocatedDollars,
          parseFloat(data.value.rates[item.currency])
        );
        item.shares = parseFloat(cryptoValue.toFixed(5));
      }
    });
  };

  onMounted(async () => {
    await fetchData();
  });
</script>

<template>
  <form @submit.prevent="onFormSubmit">
    <DollarInput @update-dollar-amount="updateDollarAmount" />
    <ul>
      <li
        v-for="(selectedCurrency, index) in selectedCurrencies"
        :key="`key-${index}-${Math.random()}`"
      >
        <CurrencyCard
          v-bind="selectedCurrency"
          :available-currency-keys="availableCurrencyKeys"
          :index="index"
        />
      </li>
      <li class="add-card-li" v-if="selectedCurrencies.length < 5">
        <AddCard :onClick="addCurrency">
          <p><span>+</span>Add Asset (Max 5)</p>
        </AddCard>
      </li>
    </ul>
    <button class="submit medium">Calculate</button>
    <p class="error" v-if="error.length > 0">{{ error }}</p>
  </form>
</template>

<style scoped>
  form {
    padding-bottom: 80px;
  }
  ul {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin: 35px auto 0 auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  li {
    height: 168px;
    width: 325px;
    border-radius: 10px;
    background: var(--default-white);
    padding: 10px 15px;
  }
  .add-card-li {
    height: auto;
    background-color: transparent;
  }
  .add-card-li p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add-card-li span {
    font-size: 40px;
    margin-right: 15px;
  }

  .submit {
    position: relative;
    height: 50px;
    width: 275px;
    margin-top: 30px;
    font-size: 16px;
    background-color: var(--primary-green);
    color: var(--default-white);
    border: none;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
  }

  .error {
    color: var(--red);
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
  }
  @media (min-width: 768px) {
      ul {
          margin-top: 50px;
          flex-direction: row;
          max-width: 665px;
        }
        .add-card-li {
            height: 168px;
            border: 2px dashed rgba(147, 147, 147, 1);
        }
        .submit {
            height: 40px;
            width: 250px;
        }
    }
    @media (min-width: 1024px) {
      ul {
        max-width: 1005px;
      }
    }
</style>
