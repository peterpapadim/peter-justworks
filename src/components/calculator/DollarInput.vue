<script setup lang="ts">
  import { ref } from 'vue';
  const emit = defineEmits(['update-dollar-amount']);
  const dollarInput = ref(100);

  const emitValue = () => {
    emit('update-dollar-amount', dollarInput.value);
  };
</script>

<template>
  <div class="input-wrapper bg-white">
    <label for="dollar-input">Enter the amount in USD to convert:</label>
    <div class="formatted-input">
      <span>$</span>
      <input
        type="number"
        v-model="dollarInput"
        id="dollar-input"
        name="dollar-input"
        class="medium text-primary-green"
        step="1"
        min="1"
        max="1000000000"
        required
        @input="emitValue"
      />
    </div>
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
    text-align: center;
  }
  label {
    font-size: 16px;
    margin-bottom: 16px;
    text-align: center;
  }
  .formatted-input {
    position: relative;
  }
  span {
    font-size: 55px;
    position: absolute;
    left: 0;
    bottom: 0px;
  }
  #dollar-input {
    font-size: 55px;
    border: none;
    text-align: center;
    padding: 5px 0 10px;
    width: 205px;
    margin: 0 auto;
    background-color: transparent;
    border-bottom: 1px solid var(--default-black);
   }
   @media (max-width: 768px) {
     .input-wrapper {
       margin-top: -80px;
     }
   }
</style>
