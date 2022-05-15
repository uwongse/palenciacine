<template>
<article class="all">
    <PopupRouterView>
        <PopupOverlay slot="backdrop" />
        <PopupLightbox>
            <b-card id="carta" img-top img-alt="Card Image" text-variant="white" v-for="dato in pelicula" :key="dato.id" :img-src="`${dato.background}`" :style="styleObject">
                <section :class="[{all2: dato.background }, {backgroundNo: !dato.background }]">
                    <section class="cuerpo mx-lg-2 mx-xl-3 px-lg-3 px-xl-3 px-3 mx-1" id="margen">
                        <h3 id="titulo" class="white">{{dato.title}}</h3>
                    </section>
                    <section class="cuerpo mx-lg-2 mx-xl-3 px-lg-3 px-xl-3 px-3 mx-1" id="margen">
                        <section id="izq">
                            <section :class="[{estreno: dato.active ==1}]">
                            </section>
                            <img class="img-fluid" id="img" :src="`${dato.poster}`" alt="">
                        </section>
                        <section id="der">
                            <section id="horarios" v-if="dato.projections">
                                <section id="cineortega">
                                    <section class="titular"><img id="logoentrada" src="../assets/entrada.png" alt=""><span id="titulosgrandes">{{dato.projections[0].cinema.cinema}}</span></section>
                                    <section class="hour" v-if="currentRouteName() == 'cartelera'">
                                        <section class="hourcontent" v-for="dat in dato.projections" :key="dat.id"><section><span id="yellow" v-bind:style="time() <= getHumanDate(dat.hour) ? 'color: #ede60e':'color: #737571'">{{ dat.hour}} </span></section></section>
                                    </section>
                                    <section class="hour" v-else>
                                    <article class="fecha"><span id="yellow">Fecha: {{dato.projections[0].release_date}}</span></article>
                                    <section class="hourcontent" v-for="dat in dato.projections" :key="dat.id"><section><span id="yellow">{{ dat.hour}} </span></section></section>
                                    </section>
                                    <a id="boton" type="button" class="btn-sm" :href="`${dato.buy}`"><b>Comprar entradas</b></a>
                                </section>
                            </section>
                            <section id="edad-tiempo" v-if="dato.qualification"><span class="white">{{dato.qualification.abbreviation}} | {{dato.duration}}'</span></section>
                            <section id="director" v-if="dato.director[0]">
                                <p id="titulosgrandes">Director: </p>
                                <p id="gray">{{dato.director[0].director}}</p>
                            </section>
                            <section id="actores" v-if="dato.actors[0]">
                                <section id="actor">
                                    <p id="titulosgrandes">Reparto:&nbsp;</p>
                                    <p id="gray" v-for="dat in dato.actors" :key="dat.id">{{dat.actor}},&nbsp;</p>
                                </section>
                            </section>
                            <section id="sinopsis" v-if="dato.synopsis">
                                <p id="titulosgrandes">Sinopsis: </p>
                                <p id="gray">{{dato.synopsis}}</p>
                            </section>
                            <section id="container" class="embed-responsive embed-responsive-21by9" v-if="dato.trailer">
                                <iframe class="embed-responsive-item" :src="'//www.youtube.com/embed/'+getId(dato.trailer)" frameborder="0" width="16vw" height="9vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" id="video" allowfullscreen></iframe>
                            </section>
                        </section>
                    </section>
                    <p id="texto" class="my-2 py-3 py-xl-4 my-xl-2 mx-lg-2 mx-xl-3 px-lg-3 px-xl-3 px-3 mx-1">La empresa no se hace responsable de posibles variaciones de horarios, salas y de más acciones por causa mayor.</p>
                </section>
            </b-card>
        </PopupLightbox>
    </PopupRouterView>
</article>
</template>

<script>

import PopupLightbox from './PopupLightbox.vue'
import PopupOverlay from './PopupOverlay.vue'
import PopupRouterView from './PopupRouterView.vue'
import AppFooter from '../components/AppFooter.vue'
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'app-modal',
  components: {
    PopupLightbox,
    PopupOverlay,
    PopupRouterView,
    AppFooter
  },
  mounted () {
    if (this.$route.name === 'cartelera') {
      axios.get(`https://seashell-app-se7bo.ondigitalocean.app/api/movie/${this.$route.params.id}`).then(resp => { this.pelicula = resp.data.data; console.log('carta', resp.data.data[0]); console.log('id', this.$route.params.id) })
    } else if (this.$route.name === 'proximamente') {
      axios.get(`https://seashell-app-se7bo.ondigitalocean.app/api/movie/next/${this.$route.params.id}`).then(resp => { this.pelicula = resp.data.data; console.log('carta', resp.data.data[0]); console.log('id', this.$route.params.id) })
    } else if (this.$route.name === 'teatros') {
      axios.get(`https://seashell-app-se7bo.ondigitalocean.app/api/teatro/${this.$route.params.id}`).then(resp => { this.pelicula = resp.data.data; console.log('carta', resp.data.data[0]); console.log('id', this.$route.params.id) })
    }
  },
  methods: {
    currentRouteName: function () {
      return this.$route.name
    },
    getId: function (url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return (match && match[2].length === 11)
        ? match[2]
        : null
    },
    time: function () {
      console.log(moment(new Date().toLocaleTimeString(), 'HH:mm').format('HH:mm'))
      return (moment(new Date().toLocaleTimeString(), 'HH:mm').format('HH:mm'))
    },
    getHumanDate: function (date) {
      console.log(moment(date, 'HH:mm').format('HH:mm'))
      return moment(date, 'HH:mm').format('HH:mm')
    }
  },
  data () {
    return {
      pelicula: [],
      styleObject: {
        color: 'black',
        border: '4px solid black'
      }
    }
  }
}
</script>

<style scoped>
a:hover {
    color: rgb(24, 24, 24)!important;
    text-decoration: none!important;
}
.colorGray{
    color: #737571;
}
.estreno {
    background: url('../assets/estreno.png') no-repeat;
    height: 70px;
    width: 70px;
    position: absolute;
    transform: rotate(-90deg);
    top: 10;
}

#yellow {
    color: #ede60e;
}

#titulosgrandes {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #eeeeee;
}

h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

.hourcontent {
    color: #f5f7f4;
}

.color {
    border-color: #f5f7f4;
}

p {
    margin: 0;
}

.backgroundNo {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background: url('/assets/negro.jpg');
    background-color: rgb(14, 14, 14);
    margin-top: 0vw;
    position: relative;
    z-index: 1000000;
}

.titular {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
}

.hour {
    display: flex;
    flex-direction: row;
    gap: 0.5vw;
    flex-wrap: wrap;
    align-items: baseline;
}

#texto {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9vw;
    color: #737571;
}

#actor {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#actores {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#white {
    color: #f5f7f4;
}

#yellow {
    color: #ede60e;
}

#gray {
    color: #b9b9b9;
}

#director {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

#logoentrada {
    max-height: 30px;
    max-width: 30px;
}

.card-body {
    padding: 0;
}

.all2 {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-color: transparent;
    background: rgb(14, 14, 14);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    margin-top: -20vw;
    position: relative;
    z-index: 1000000;
}

#boton {
    color: black;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-width: 14vw;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

#titulo {
    font-size: 1.7vw;
}

#cineortega {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 1vw;
}

#boton {
    background-color: #ede60e;
    border-radius: 15px;
    border-color: #ede60e;
}

#der {
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

#horarios {
    display: flex;
    flex-direction: column;
    gap: 2vw;
}

#carta {
    display: flex;
    flex-direction: row;
    background-color: #1c2827;
}

#img {
    max-width: 100%;
    widows: 90vw;
}

.all {
    display: flex;
    flex-direction: column;
    z-index: 10000;
}

.cuerpo {
    display: flex;
    flex-direction: row;
    gap: 1.5vw;
}

#container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
}

#video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media screen and (max-width:475px) {
    .estreno {
        background: url('../assets/estreno.png') no-repeat;
        height: 70px;
        width: 70px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    #texto {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3vw;
        color: #737571;
    }

    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .hour {
        display: flex;
        flex-direction: row;
        gap: 2vw;
        flex-wrap: wrap;
        align-items: baseline;
    }

    .titular {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2vw;
    }

    #titulo {
        font-size: 20px;
    }

    .all2 {
        margin-top: -20vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    }

    .cuerpo {
        display: flex;
        flex-direction: column;
    }

    #img {
        width: 90vw;
    }

    #carta {
        max-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    #cineortega {
        display: flex;
        flex-direction: column;
        gap: 10px;

    }

    #der {
        gap: 10px;
    }
}

@media screen and (max-width:375px) {
    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .all2 {
        margin-top: -25vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    }
}

@media screen and (max-width:200px) {
    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .all2 {
        margin-top: -40vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    }
}

@media screen and (min-width:475px) {
    .estreno {
        background: url('../assets/estrenomediano.png') no-repeat;
        height: 120px;
        width: 120px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    #texto {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2vw;
        color: #737571;
    }

    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .titular {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1.5vw;
    }

    .hour {
        display: flex;
        flex-direction: row;
        gap: 1.5vw;
        flex-wrap: wrap;
        align-items: baseline;
    }

    #titulo {
        font-size: 25px;
    }

    .all2 {
        margin-top: -20vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    }

    .cuerpo {
        display: flex;
        flex-direction: column;
    }

    #img {
        width: 90vw;
    }

    #carta {
        display: flex;
        flex-direction: column;
        max-width: 400px;
    }

    #cineortega {
        display: flex;
        flex-direction: column;
        gap: 10px;

    }

    #der {
        gap: 10px;
    }

}

@media screen and (min-width:560px) {
    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .all2 {
        margin-top: -20vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    }
}

@media screen and (min-width:680px) {
    #texto {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5vw;
        color: #737571;
    }

    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .titular {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1.5vw;
    }

    .hour {
        display: flex;
        flex-direction: row;
        gap: 1.5vw;
        flex-wrap: wrap;
        align-items: baseline;
    }

    #titulo {
        font-size: 35px;
    }

    .all2 {
        margin-top: -15vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    }

    .cuerpo {
        display: flex;
        flex-direction: column;
    }

    #img {
        width: 70vw;
    }

    #carta {
        display: flex;
        flex-direction: column;
        max-width: 500px;
    }

    #cineortega {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    #der {
        gap: 10px;
    }
}

@media screen and (min-width:850px) {
    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .all2 {
        margin-top: -10vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 95%, rgba(255, 255, 255, 0) 100%);
    }
}

@media screen and (min-width:1024px) {
       #boton {
        max-width: 10vw;
        font-size: 1.2vw;
    }
    .estreno {
        background: url('../assets/estreno90.png') no-repeat;
        height: 90px;
        width: 90px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    #texto {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8vw;
        color: #737571;
    }

    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    .titular {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
    }

    .hour {
        display: flex;
        flex-direction: row;
        gap: 0.5vw;
        flex-wrap: wrap;
        align-items: baseline;
    }

    #titulo {
        font-size: 45px;
    }

    .all2 {
        margin-top: -10vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 90%, rgba(255, 255, 255, 0) 100%);
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 250px;
    }

    #carta {
        max-width: 800px;
    }

    #cineortega {
        display: flex;
        flex-direction: row;
        gap: 0.8vw;
    }

}

@media screen and (min-width:1440px) {
    .estreno {
        background: url('../assets/estrenomediano.png') no-repeat;
        height: 120px;
        width: 120px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    #titulo {
        font-size: 3vw;
    }

       #boton {
        max-width: 10vw;
        font-size: 0.9vw;
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 300px;
    }

    #carta {
        max-width: 1000px;
    }
     .all2 {
        margin-top: -10vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 90%, rgba(255, 255, 255, 0) 100%);
    }
}

@media screen and (min-width:1940px) {
    .estreno {
        background: url('../assets/estreno160.png') no-repeat;
        height: 160px;
        width: 160px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    #logoentrada {
        max-height: 30px;
        max-width: 30px;
    }

    * {
        font-size: 1.2vw;
    }
       #boton {
        max-width: 4vw;
        font-size: 1.4vw;
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 400px;
    }

    #carta {
        max-width: 1500px;
    }
         .all2 {
        margin-top: -10vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 90%, rgba(255, 255, 255, 0) 100%);
    }
}

@media screen and (min-width:2560px) {
    .titular {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.8vw;
    }

    .hour {
        display: flex;
        flex-direction: row;
        gap: 1vw;
        flex-wrap: wrap;
        align-items: baseline;
    }

    #logoentrada {
        max-height: 45px;
        max-width: 45px;
    }

    #cineortega {
        display: flex;
        flex-direction: row;
        gap: 1vw;
    }

    * {
        font-size: 1.2vw;
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 600px;
    }

    #carta {
        max-width: 1800px;
    }
         .all2 {
        margin-top: -10vw;
        background: rgb(14, 14, 14);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 90%, rgba(255, 255, 255, 0) 100%);
    }
}

@media screen and (min-width:3560px) {
    .estreno {
        background: url('../assets/estreno200.png') no-repeat;
        height: 200px;
        width: 200px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    #logoentrada {
        max-height: 55px;
        max-width: 55px;
    }

    * {
        font-size: 1.1vw;
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 600px;
    }

    #carta {
        max-width: 2600px;
    }
}

@media screen and (min-width:4560px) {
    .estreno {
        background: url('../assets/estreno250.png') no-repeat;
        height: 250px;
        width: 250px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    * {
        font-size: 1.1vw;
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 600px;
    }

    #carta {
        max-width: 3500px;
    }
}

@media screen and (min-width:5560px) {
    .estreno {
        background: url('../assets/estreno350.png') no-repeat;
        height: 350px;
        width: 350px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    #logoentrada {
        max-height: 80px;
        max-width: 80px;
    }

   * {
        font-size: 1.4vw;
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 1200px;
    }

    #carta {
        max-width: 4500px;
    }
}

@media screen and (min-width:7560px) {
    .estreno {
        background: url('../assets/estreno500.png') no-repeat;
        height: 500px;
        width: 500px;
        position: absolute;
        transform: rotate(-90deg);
        top: 10;
    }

    .backgroundNo {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        background-image: url('/assets/negro.jpg');
        background-color: rgb(14, 14, 14);
        margin-top: 0vw;
        position: relative;
        z-index: 1000000;
    }

    #logoentrada {
        max-height: 100px;
        max-width: 100px;
    }

    * {
        font-size: 1.1vw;
    }

    .cuerpo {
        display: flex;
        flex-direction: row;
    }

    #img {
        max-width: 1400px;
    }

    #carta {
        max-width: 6000px;
    }
}
@media screen and (min-width:8560px) {
        #img {
        max-width: 1800px;
    }
}
</style>
