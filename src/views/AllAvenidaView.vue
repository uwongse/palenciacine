<template>
<section>
<app-allavenida :films="films"></app-allavenida>
</section>
</template>

<script>
import AppAllavenida from '@/components/AppAllavenida.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllavenida
  },
  mounted () {
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/avenida', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data) })
  },
  data () {
    return {
      films: []
    }
  }
}
</script>
