<template>
<section>
<app-allortega :movies="movies"></app-allortega>
    <app-proximamente v-if="films.length" :films="films"></app-proximamente>
  <app-promociones></app-promociones>
</section>
</template>

<script>
import AppAllortega from '@/components/AppAllortega.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import AppProximamente from '@/components/AppProximamente.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllortega, AppPromociones, AppProximamente
  },
  mounted () {
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/cineortega', {}).then(resp => { this.movies = resp.data.data; console.log(resp.data.data) })
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/proximamentecineortega', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data) })
  },
  data () {
    return {
      showComponent: false,
      movies: [],
      films: []
    }
  }
}
</script>
