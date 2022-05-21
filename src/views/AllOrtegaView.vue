<template>
<section>
<app-allortega :films="films"></app-allortega>
  <app-promociones></app-promociones>
</section>
</template>

<script>
import AppAllortega from '@/components/AppAllortega.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllortega, AppPromociones
  },
  mounted () {
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/cineortega', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data); this.showComponent = true })
  },
  data () {
    return {
      showComponent: false,
      films: []
    }
  }
}
</script>
