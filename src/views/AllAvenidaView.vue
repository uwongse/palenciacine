<template>
<section>
<app-allavenida :movies="movies"></app-allavenida>
<app-proximamenteavenida  v-if="films.length" :films="films"></app-proximamenteavenida>
  <app-promociones></app-promociones>
</section>
</template>

<script>
import AppAllavenida from '@/components/AppAllavenida.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import AppProximamenteavenida from '@/components/AppProximamenteavenida.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllavenida, AppPromociones, AppProximamenteavenida
  },
  mounted () {
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/avenida', {}).then(resp => { this.movies = resp.data.data; console.log(resp.data.data) })
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/proximamenteavenida', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data) })
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
