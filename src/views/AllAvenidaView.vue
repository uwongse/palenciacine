<template>
<section>
<app-allavenida :movies="movies"></app-allavenida>
    <app-proximamente v-if="films.length" :films="films"></app-proximamente>
  <app-promociones></app-promociones>
</section>
</template>

<script>
import AppAllavenida from '@/components/AppAllavenida.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import AppProximamente from '@/components/AppProximamente.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllavenida, AppPromociones, AppProximamente
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
