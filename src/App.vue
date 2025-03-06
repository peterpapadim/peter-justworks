<script setup lang="ts">
  import Nav from './components/nav/Nav.vue';
  import Hero from './components/hero/Hero.vue';
  import Calculator from './components/calculator/Calculator.vue';

  import { nav, hero } from './data';
</script>

<template>
  <header>
    <Nav v-bind="nav" />
  </header>
  <main>
    <section class="hero-section bg-primary-green text-white">
      <div class="width-wrapper hero-transition-in">
        <Hero v-bind="hero" />
      </div>
    </section>
    <section class="calculator-transition-in">
      <Calculator />
    </section>
  </main>
</template>

<style scoped>
  .hero-section {
    padding: 30px 24px;
    text-align: center;
    height: 280px;
  }

  @media (min-width: 768px) {
    .width-wrapper {
      max-width: 600px;
      margin: 0 auto;
    }
  }
  .hero-transition-in {
    animation: hero-transition-in 1s;
  }
  @keyframes hero-transition-in {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  .calculator-transition-in {
    animation: calculator-transition-in 1s;
  }
  @keyframes calculator-transition-in {
    0% {
      opacity: 0;
      transform: translateY(25px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
