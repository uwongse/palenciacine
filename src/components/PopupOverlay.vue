<template>
  <article class="PopupOverlay"></article>
</template>

<script>
export default {
  name: 'PopupOverlay'
}
</script>

<style>
.PopupOverlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  overflow: auto;
}
</style>
