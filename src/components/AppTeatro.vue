<template>
<article class="container-fluid">
    <section class="row my-5">
        <section class="col">
            <router-view />
            <section class="movie-container">
                <section class="allizq">
                    <section class="izquierda">
                        <section class="interiorizq mt-5">
                            <img class="fototeaotro" src="../assets/teatroblanco.png" alt="teatro-ortega">
                            <p class="letra">Ven a disfrutar de una sesion de teatro en Palencia</p>
                            <button type="button" class="btn-sm">
                                <router-link to="/obrasteatroortega"><b>¡Quiero ir al Teatro!</b>
                                </router-link>
                            </button>
                        </section>
                    </section>
                </section>
                <section class="slide">
                    <section class="row my-5 mx-5">
                        <Carousel :perPageCustom="[[0, 1],[320, 1.4],[425, 2.4],[768, 3.4],[1440, 4.4]]" :navigationEnabled="true" navigationNextLabel navigationPrevLabel :centerMode="true" :scrollPerPage="false" :autoplayHoverPause="true" :paginationEnabled="false">
                            <Slide v-for="movie in teatro" :key="movie.id">
                                <section class="product-image">
                                    <router-link class="item" :to="`teatro/${movie.id}/${sanitizeTitle(movie.title)}`"><img id="img" :src="`${movie.poster}`" alt=""></router-link>
                                </section>
                            </Slide>
                        </Carousel>
                    </section>
                </section>
            </section>
        </section>
    </section>
</article>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'app-teatro',
  components: {
    Carousel, Slide
  },
  props: {
    teatro: {
      type: Array
    }
  },
  methods: {
    sanitizeTitle: function (title) {
      var slug = ''
      // Change to lower case
      var titleLower = title.toLowerCase()
      // Letter "e
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd')
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '')
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-')
      return slug
    }
  }
}
</script>

<style>
.VueCarousel-navigation-next {
    background: url('../assets/15.png') no-repeat;
    margin-right: -1vw !important;
    height: 60px;
    width: 35px;
}

.VueCarousel-navigation-button {
    color: white !important;
    background-color: darkgray;
}

.VueCarousel-navigation--disabled {
    opacity: 0 !important;
}

.VueCarousel-navigation-prev {
    height: 60px;
    width: 35px;
    background: url('../assets/16.png') no-repeat;
    margin-left: -1vw !important;
}

@media screen and (min-width:120px) {
    .VueCarousel-navigation-next {
        background: url('../assets/15.png') no-repeat;
        margin-right: -1vw !important;
        height: 60px;
        width: 35px;
    }

    .VueCarousel-navigation-button {

        color: white !important;
    }

    .VueCarousel-navigation-prev {
        height: 60px;
        width: 35px;
        background: url('../assets/16.png') no-repeat;
        margin-left: -1vw !important;
    }
}

@media screen and (min-width:320px) {
    .VueCarousel-navigation-next {
        background: url('../assets/15.png') no-repeat;
        margin-right: -1vw !important;
        height: 60px;
        width: 35px;
    }

    .VueCarousel-navigation-button {

        color: white !important;
    }

    .VueCarousel-navigation-prev {
        height: 60px;
        width: 35px;
        background: url('../assets/16.png') no-repeat;
        margin-left: -1vw !important;
    }
}

@media screen and (min-width:768px) {
    .VueCarousel-navigation-next {
        background: url('../assets/15.png') no-repeat;
        margin-right: -1vw !important;
        height: 60px;
        width: 35px;
    }

    .VueCarousel-navigation-button {
        color: white !important;
    }

    .VueCarousel-navigation-prev {
        height: 60px;
        width: 35px;
        background: url('../assets/16.png') no-repeat;
        margin-left: -1vw !important;
    }
}

@media screen and (min-width:1024px) {
    .VueCarousel-navigation-next {
        background: url('../assets/15.png') no-repeat;
        margin-right: -1vw !important;
        height: 60px;
        width: 35px;
    }

    .VueCarousel-navigation-button {
        color: white !important;
    }

    .VueCarousel-navigation-prev {
        height: 60px;
        width: 35px;
        background: url('../assets/16.png') no-repeat;
        margin-left: -1vw !important;
    }
}

@media screen and (min-width:1440px) {
    .VueCarousel-navigation-next {
        background: url('../assets/15.png') no-repeat;
        margin-right: -1vw !important;
        height: 60px;
        width: 35px;
    }

    .VueCarousel-navigation-button {
        color: white !important;
    }

    .VueCarousel-navigation-prev {
        height: 60px;
        width: 35px;
        background: url('../assets/16.png') no-repeat;
        margin-left: -1vw !important;
    }
}

@media screen and (min-width:2000px) {
    .VueCarousel-navigation-next {
        background: url('../assets/15.png') no-repeat;
        margin-right: -1vw !important;
        height: 60px;
        width: 35px;
    }

    .VueCarousel-navigation-button {
        color: white !important;
    }

    .VueCarousel-navigation-prev {
        height: 60px;
        width: 35px;
        background: url('../assets/16.png') no-repeat;
        margin-left: -1vw !important;
    }
}

@media screen and (min-width:3000px) {
    .VueCarousel-navigation-next {
        background: url('../assets/15.png') no-repeat;
        margin-right: -1vw !important;
        height: 60px;
        width: 55px;
    }

    .VueCarousel-navigation-button {
        color: white !important;
        min-height: 2vw;
        min-width: 2vw;
    }

    .VueCarousel-navigation-prev {
        height: 60px;
        width: 35px;
        background: url('../assets/16.png') no-repeat;
        margin-left: -1vw !important;
    }
}
</style><style scoped>
.item {
    flex: 1 1 0px;
}

@keyframes heartbeat {
    from {
        transform: scale(1);
        transform-origin: center center;
        animation-timing-function: ease-out;
    }

    10% {
        transform: scale(0.91);
        animation-timing-function: ease-in;
    }

    17% {
        transform: scale(0.98);
        animation-timing-function: ease-out;
    }

    33% {
        transform: scale(0.87);
        animation-timing-function: ease-in;
    }

    45% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
}

#img {
    max-height: 90%;
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #F1C40F;
    border-radius: 0px;
    -webkit-transition: 1s linear;
    transition: 1s linear;
    -webkit-box-shadow: 20px 20px 24px 2px rgba(0, 0, 0, 0.47);
    box-shadow: 20px 20px 24px 2px rgba(0, 0, 0, 0.47);
}

#img:hover {
    border-style: solid;
    border-color: white;
    animation: heartbeat 5s ease-in-out infinite both;
}

.allizq {
    display: flex;
    justify-content: center;
}

.container-fluid {
    padding: 0;
}

.row {
    --bs-gutter-x: 0;
}

.letra {
    color: white;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1vw;
}
a:hover {
    color: black!important;
    text-decoration: none!important;
}

a:visited {
    color: black;
    text-decoration-color: black;
    text-decoration: none;
}

a:active {
    color: black;
    text-decoration-color: black;
    text-decoration: none;
}

a {
    color: black;
    text-decoration-color: black;
    text-decoration: none;
}

.btn-sm {
    color: black;
    text-decoration-color: black;
}

.fototeaotro {
    width: 22vw;
}

button {
    display: flex;
    justify-content: center;
    background-color: #ede60e;
    border-radius: 15px;
    border-color: #ede60e;
    color: black;
    text-decoration-color: black;
    font-size: 1.8vh;
}

.btn-primary-outline {
    background-color: transparent;
    border-color: #ccc;
    color: white;
    width: 50%;
}

.interiorizq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: left;
    gap: 15px;
}

.izquierda {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    align-content: center;
    margin-left: 50px;
    margin-right: 10px;
}

.movie-container {
    background: url("../assets/teatrobutacas.png") no-repeat left center #a30c32;
    background-size: contain;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "izquierda carrusel";
}

#img {
    z-index: 1;
    transition: transform 500ms;
    max-height: 80%;
    max-width: 80%;
    min-width: 80%;
    border-radius: 1%;
}

@media screen and (min-width:2561px) {
            .letra {
        font-size: 1.2vw;
    }
    .movie-container {
        padding: 4vw;
        background: url("../assets/teatrobutacas.png") no-repeat left center #a30c32;
        background-size: contain;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "izquierda carrusel";
    }

    #img {
        transition: transform 500ms;
        max-height: 80%;
        max-width: 80%;
        min-width: 80%;
        border-radius: 1%;
    }

    button {
        width: 20vw;
        display: flex;
        justify-content: center;
        background-color: #ede60e;
        border-radius: 15px;
        border-color: #ede60e;
    }

    .fototeaotro {
        width: 20vw;
    }
}

@media screen and (max-width: 2560px) {
        .letra {
        font-size: 1.2vw;
    }
    .movie-container {
        padding: 2vw;
        background: url("../assets/teatrobutacas.png") no-repeat left center #a30c32;
        background-size: contain;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "izquierda carrusel carrusel";
    }

    #img {
        transition: transform 500ms;
        max-height: 80%;
        max-width: 80%;
        min-width: 80%;
        border-radius: 1%;
    }

    button {
        width: 20vw;
        display: flex;
        justify-content: center;
        background-color: #ede60e;
        border-radius: 15px;
        border-color: #ede60e;
    }

    .fototeaotro {
        width: 20vw;
    }
}

@media screen and (max-width:1024px) {
    .letra {
        font-size: 2.1vw;
    }

    .fototeaotro {
        min-width: 40vw;
    }

    .movie-container {
        background: #a30c32;
        background-size: contain;
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "izquierda"
            "carrusel";
        grid-gap: 20px;
    }

    #img {
        max-height: 80%;
        transition: transform 500ms;
        min-width: 80%;
        border-radius: 1%;
    }

    button {
        display: flex;
        justify-content: center;
        background-color: #ede60e;
        border-radius: 15px;
        border-color: #ede60e;
        min-width: 40vw;
    }
}

@media screen and (max-width: 690px) {
    .letra {
        font-size: 2.8vw;
    }

    .fototeaotro {
        min-width: 60vw;
    }

    .slide {
        padding: 0;
    }

    .izquierda {
        margin: 0;
        padding: 0;
    }

    .allizq {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .movie-container {
        background: #a30c32;
        background-size: contain;
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "izquierda"
            "carrusel";
        grid-gap: 20px;
    }

    #img {
        transition: transform 500ms;
        max-height: 80%;
        min-width: 90%;
        border-radius: 1%;
    }

    button {
        min-width: 40vw;
        display: flex;
        justify-content: center;
        background-color: #ede60e;
        border-radius: 15px;
        border-color: #ede60e;
    }
}

@media screen and (max-width: 575px) {
    .letra {
        font-size: 3.5vw;
    }

    .fototeaotro {
        min-width: 60vw;
    }

    .slide {
        padding: 0;
    }

    .izquierda {
        margin: 0;
        padding: 0;
    }

    .allizq {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .movie-container {
        background: #a30c32;
        background-size: contain;
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "izquierda"
            "carrusel";
        grid-gap: 20px;
    }

    #img {
        transition: transform 500ms;
        max-height: 80%;
        min-width: 90%;
        border-radius: 1%;
    }

    button {
        min-width: 50vw;
        display: flex;
        justify-content: center;
        background-color: #ede60e;
        border-radius: 15px;
        border-color: #ede60e;
    }
}

@media screen and (max-width: 425px) {
    .letra {
        font-size: 5vw;
    }

    .fototeaotro {
        min-width: 60vw;
    }

    .slide {
        padding: 0;
    }

    .izquierda {
        padding-left: 30px;
        padding-right: 30px;
    }

    .allizq {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .movie-container {
        background: #a30c32;
        background-size: contain;
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: auto;
        grid-template-areas:
            "izquierda"
            "carrusel";
        grid-gap: 20px;
    }

    button {
        min-width: 60vw;
        display: flex;
        justify-content: center;
        background-color: #ede60e;
        border-radius: 15px;
        border-color: #ede60e;
    }

    #img {
        z-index: 1;
        transition: transform 500ms;
        max-height: 80%;
        max-width: 80%;
        min-width: 80%;
        border-radius: 1%;
    }
}

@media screen and (max-width: 315px) {
    .letra {
        font-size: 5vw;
    }

    .fototeaotro {
        min-width: 60vw;
    }

    .slide {
        padding: 0;
    }

    .izquierda {
        padding-left: 30px;
        padding-right: 0;
    }

    .allizq {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
    }

    .movie-container {
        background: black;
        background-size: contain;
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: auto;
        grid-template-areas:
            "izquierda"
            "carrusel";
        grid-gap: 20px;
    }

    button {
        min-width: 60vw;
        display: flex;
        justify-content: center;
        background-color: #ede60e;
        border-radius: 15px;
        border-color: #ede60e;
    }

    #img {
        z-index: 1;
        transition: transform 500ms;
        max-height: 90%;
        max-width: 80%;
        min-width: 80%;
        border-radius: 1%;
    }
}
</style>
