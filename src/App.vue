<template>
<div class="app">
    <header>
        <h1>Cines Palencia</h1>
    </header>
    <app-nav></app-nav>
    <router-view />
    <app-footer></app-footer>
</div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'App',
  components: {
    AppNav,
    AppFooter
  }
}
</script>

<style>
header {
    display: none
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');

.app {
    background-color: #000000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
}
</style>
