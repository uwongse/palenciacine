<template>
<section>
<app-allortega :films="films"></app-allortega>
</section>
</template>

<script>
import AppAllortega from '@/components/AppAllortega.vue'
import axios from 'axios'
export default {
  name: 'app-ortegas',
  components: {
    AppAllortega
  },
  mounted () {
    axios.get('https://seashell-app-se7bo.ondigitalocean.app/api/cineortega', {}).then(resp => { this.films = resp.data.data; console.log(resp.data.data) })
  },
  data () {
    return {
      films: []
    }
  }
}
</script>
