<template>
<section class="home">
    <app-carrusel v-if="slide.length" :slide="slide"></app-carrusel>
    <app-cartelera  :movies="movies"></app-cartelera>
    <app-teatro  :teatro="teatro"></app-teatro>
    <app-proximamente  :films="films"></app-proximamente>
    <app-promociones></app-promociones>
</section>
</template>

<script>
// @ is an alias to /src
import AppCartelera from '@/components/AppCartelera.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppCarrusel from '@/components/AppCarrusel.vue'
import AppTeatro from '@/components/AppTeatro.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import AppModal from '@/components/AppModal.vue'
import AppProximamente from '@/components/AppProximamente.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    AppFooter, AppCarrusel, AppTeatro, AppPromociones, AppModal, AppProximamente, AppCartelera
  },
  created () {
    axios.get('https://laravelpanel.herokuapp.com/api/moviestoday', {}).then(resp => { this.movies = resp.data.data; console.log(resp.data.data) })
    axios.get('https://laravelpanel.herokuapp.com/api/moviesnottoday', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data) })
    axios.get('https://laravelpanel.herokuapp.com/api/teatro', {}).then(resp => { this.teatro = resp.data.data; console.log(resp.data.data) })
    axios.get('https://laravelpanel.herokuapp.com/api/slide', {}).then(resp => { this.slide = resp.data.data; console.log(resp.data.data) })
  },
  data () {
    return {
      movies: [],
      films: [],
      teatro: [],
      slide: []
    }
  }
}
</script>
