<template>
<section>
<app-allavenida :films="films"></app-allavenida>
  <app-promociones></app-promociones>
</section>
</template>

<script>
import AppAllavenida from '@/components/AppAllavenida.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllavenida, AppPromociones
  },
  mounted () {
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/avenida', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data); this.showComponent = true })
  },
  data () {
    return {
      showComponent: false,
      films: []
    }
  }
}
</script>
