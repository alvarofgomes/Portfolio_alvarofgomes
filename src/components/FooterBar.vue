<script setup lang="ts">
const ano = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <span>© {{ ano }} Alvaro Gomes</span>
  </footer>
</template>

<style scoped>
.footer {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 28px 20px 40px;
    color: var(--faint);
    font-family: var(--font-mono);
    font-size: 0.78rem;
    border-top: 1px solid var(--border);
}
.footer a { color: var(--muted); text-decoration: none; }
.footer a:hover { color: var(--blue-bright); }
</style>
