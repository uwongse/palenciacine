<template>
<section id="carrusel">
    <b-carousel id="carousel-1" :interval="4000" controls indicators background="#141414">
        <b-carousel-slide id="slideArriba"  v-for="s in slide" :key="s.id">
            <template #img>
               <a :href="`${s.url}`"><img id="image" class="d-block img-fluid w-100" :src="`${s.image}`" :alt="`${s.title}`"></a>
            </template>
        </b-carousel-slide>
    </b-carousel>
</section>
</template>

<script>
export default {
  name: 'app-carrusel',
  props: {
    slide: {
      type: Array
    }
  }
}
</script>

<style>
.carousel-control-next-icon{
    z-index: 99999999999999999999;
}
.carousel-control-prev-icon{
    z-index: 99999999999999999999;
}
.carousel-control-prev .sr-only {
    display: none;
    z-index: 99999999999999999999;
}

.carousel-control-next .sr-only {
    display: none;
    z-index: 99999999999999999999;
}
</style>

<style scoped>
#carrusel{
    z-index: 99999999999999999999;
}
#slideArriba {
    margin-top: 2vw;

}

@media screen and (max-width: 990px) {
    #slideArriba {
        margin-top: 5vw;
    }
}

@media screen and (max-width: 768px) {
    #slideArriba {
        margin-top: 10vw;
    }
}

@media screen and (max-width: 425px) {

    .carousel-control-next-icon{
        margin-top: 14vw;
    z-index: 99999999999999999999;
}
.carousel-control-prev-icon{
    margin-top: 14vw;
    z-index: 99999999999999999999;
}
    #slideArriba {
        margin-top: 14vw;
    }
}
</style>
