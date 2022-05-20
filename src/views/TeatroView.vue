<template>
<section>
<app-allteatro :films="films"></app-allteatro>
</section>
</template>

<script>
import AppAllteatro from '@/components/AppAllteatro.vue'
import axios from 'axios'
export default {
  name: 'app-teatro',
  components: {
    AppAllteatro
  },
  mounted () {
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/teatroortega', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data) })
  },
  data () {
    return {
      films: []
    }
  }
}
</script>
