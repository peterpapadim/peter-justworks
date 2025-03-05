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
      <div class="width-wrapper">
        <Hero v-bind="hero" />
      </div>
    </section>
    <section>
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
</style>
