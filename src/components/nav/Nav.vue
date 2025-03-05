<script setup lang="ts">
  import type { NavProps } from './nav.types';
  defineProps<NavProps>();
</script>

<template>
  <nav class="bg-primary-green">
    <a href="/"
      ><p class="logo semi-bold white-text">{{ logo.label }}</p></a
    >
    <ul class="nav-list">
      <li v-for="{ label, href } in links" :key="label">
        <a :href="href" target="_blank"
          ><p class="white-text semi-bold">{{ label }}</p></a
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    padding: 22px 15px;
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .logo {
    text-transform: uppercase;
    font-size: 25px;
  }

  @media (min-width: 768px) {
    nav {
      padding: 22px 30px;
    }
    .ul {
      gap: 30px;
    }
  }
</style>
