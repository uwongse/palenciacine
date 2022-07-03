<template>
<section>
<app-allteatro :films="films"></app-allteatro>
  <app-promociones></app-promociones>
</section>
</template>

<script>
import AppAllteatro from '@/components/AppAllteatro.vue'
import AppPromociones from '@/components/AppPromociones.vue'
import axios from 'axios'
export default {
  name: 'app-teatro',
  components: {
    AppAllteatro, AppPromociones
  },
  mounted () {
    axios.get('https://laravelpanel.herokuapp.com/api/teatroortega', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data); this.showComponent = true })
  },
  data () {
    return {
      showComponent: false,
      films: []
    }
  }
}
</script>
