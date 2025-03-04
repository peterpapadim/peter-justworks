<script setup lang="ts">
const headerLinks = [
  { label: "github", href: "https://www.github.com" },
  { label: "codepeter", href: "https://github.com/peterpapadim/peter-justworks" },
];
</script>

<template>
  <nav class="bg-primary-green">
    <ul class="nav-list">
      <li>
        <a href="/"><p class="logo semi-bold white">CryptoCalc</p></a>
      </li>
      <div class="nav-links">
        <li v-for="{ label, href } in headerLinks" :key="label">
          <a :href="href" target="_blank"
            ><p class="white semi-bold">{{ label }}</p></a
          >
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 22px 15px;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-transform: uppercase;
  font-size: 25px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-links p {
  font-size: 15px;
}

@media (min-width: 768px) {
  nav {
    padding: 22px 30px;
  }
  .nav-links {
    gap: 30px;
  }
}
</style>
