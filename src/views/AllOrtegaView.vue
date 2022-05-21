<template>
<section>
<app-allortega :movies="movies"></app-allortega>
<app-proximamenteortega v-if="films.length" :films="films"></app-proximamenteortega>
  <app-promociones></app-promociones>
</section>
</template>

<script>
import AppAllortega from '@/components/AppAllortega.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import AppProximamenteortega from '@/components/AppProximamenteortega.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllortega, AppPromociones, AppProximamenteortega
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
