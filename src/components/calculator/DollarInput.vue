<script setup lang="ts">
  import { ref } from 'vue';
  const emit = defineEmits(['set-dollar-amount']);
  const dollarInput = ref(100);

  const emitValue = () => {
    emit('set-dollar-amount', dollarInput.value);
  };
</script>

<template>
  <div class="input-wrapper bg-white">
    <label for="dollar-input">Enter the amount in USD to convert:</label>
    <input
      type="number"
      v-model="dollarInput"
      id="dollar-input"
      name="dollar-input"
      class="medium text-primary-green"
      step="100"
      min="1"
      max="1000000000"
      required
      @input="emitValue"
    />
  </div>
</template>

<style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    width: 325px;
    border-radius: 10px;
    box-shadow: 0px 4px 22px 0px rgba(83, 90, 153, 0.25);
    padding: 22px 15px;
    margin: 0 auto;
    margin-top: -120px;
  }
  label {
    font-size: 16px;
    margin-bottom: 16px;
    text-align: center;
  }
  #dollar-input {
    font-size: 55px;
    border: none;
    text-align: center;
    padding: 5px 0 10px;
    width: 205px;
    margin: 0 auto;
    border-bottom: 1px solid var(--default-black);
   }
</style>
