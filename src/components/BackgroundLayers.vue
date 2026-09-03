<script setup lang="ts">
import { ref } from "vue";
import { useNetworkBackground } from "@/composables/useNetworkBackground";

const canvas = ref<HTMLCanvasElement | null>(null);
useNetworkBackground(canvas);
</script>

<template>
  <div class="bg-glow"></div>
  <div class="bg-grid"></div>
  <canvas id="bg-canvas" ref="canvas"></canvas>
</template>

<style scoped>
#bg-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
}

.bg-glow {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
        radial-gradient(620px 520px at 82% 12%, rgba(139,92,246,0.16), transparent 60%),
        radial-gradient(680px 560px at 8% 88%, rgba(42,111,219,0.16), transparent 60%),
        linear-gradient(180deg, #070A14 0%, #080B17 100%);
}

.bg-grid {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image:
        linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 54px 54px;
    mask-image: radial-gradient(circle at 50% 40%, #000 30%, transparent 78%);
    -webkit-mask-image: radial-gradient(circle at 50% 40%, #000 30%, transparent 78%);
}
</style>
