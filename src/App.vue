<script setup lang="ts">
import BackgroundLayers from "@/components/BackgroundLayers.vue";
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
  <BackgroundLayers />
  <NavBar />
  <main class="main">
    <RouterView />
  </main>
  <FooterBar />
</template>
