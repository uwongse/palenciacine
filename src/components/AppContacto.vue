<template>
<article>
    <section id="section">
        <section id="abajo">
            <section id="cont" class="mt-5">
                <section id="cabecera">
                    <p class="title" id="titulosgrandes">Contacto</p>
                </section>
                <section id="textform">
                    <section id="texto">
                        <p>Si tienes alguna duda o sugerencia sobre el funcionamiento de nuestras salas o de la programación cultural, rellena este formulario</p>
                    </section>

                    <section id="formulario">
                        <b-form id="for" @submit.prevent="submitForm" v-if="show" >
                            <b-form-group id="input-group-1" label-for="input-1">
                                <b-form-input id="input-1" v-model="form.name" placeholder="Nombre y apellidos" required></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label-for="input-2">
                                <b-form-input id="input-2" type="email" v-model="form.email" placeholder="Correo electronico" required></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-3" label-for="input-3">
                                <b-form-textarea id="input-3" v-model="form.mensaje" placeholder="Mensaje" required></b-form-textarea>
                            </b-form-group>
                            <section id="botones">
                                <b-button  id="enviar" type="submit" variant="btn btn-primary-outline" @click="showAlert">Enviar</b-button>
                                <b-button id="borrar" type="reset" variant="btn btn-primary-outline">Borrar</b-button>
                            </section>
                            <section v-if="savingSuccessful">
                                                          <b-alert
                                    :show="dismissCountDown"
                                    @dismissed="dismissCountDown=0"
                                    @dismiss-count-down="countDownChanged"
                                    variant="success">
                                    Enviado
                                </b-alert>
                            </section>
                        </b-form>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <section id="difuminado">
        <section id="cineabajo">
            <section id="movie-container" class="mt-5">
                <section id="tituloo">
                    <p class="title" id="titulosgrandes">Conoce nuestras salas</p>
                </section>
                <section class="movies-list">
                    <router-link to="/contacto/cinesortega">
                        <section class="product-image">
                            <img id="item" class="img-fluid card-img" src="@/assets/cineortega.jpg" alt="">
                            <section class="card-title">
                                <h2>Cines Ortega</h2>
                                <p>4 salas</p>
                            </section>
                        </section>
                    </router-link>
                    <router-link to="/contacto/multicinesavenida">
                        <section class="product-image">
                            <img id="item" class="img-fluid card-img" src="@/assets/cineavenida.jpg" alt="">
                            <section class="card-title">
                                <h2>Multicines Avenida</h2>
                                <p>6 salas</p>
                            </section>
                        </section>
                    </router-link>
                    <router-link to="/contacto/teatroortega">
                        <section class="product-image">
                            <img id="item" class="img-fluid card-img" src="@/assets/teatro.jpg" alt="">
                            <section class="card-title">
                                <h2>Teatro Ortega</h2>
                                <p>1 sala</p>
                            </section>
                        </section>
                    </router-link>
                    <router-link to="/contacto/cineomy">
                        <section class="product-image">
                            <img id="item" class="img-fluid card-img" src="@/assets/omy.jpg" alt="">
                            <section class="card-title">
                                <h2>Omy</h2>
                                <p>Sala al aire libre</p>
                            </section>
                        </section>
                    </router-link>
                </section>
            </section>
        </section>
    </section>
</article>
</template>

<script>
import axios from 'axios'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'app-contacto',
  data () {
    return {
      form: {
        name: '',
        email: '',
        mensaje: ''
      },
      savingSuccessful: false,
      show: true,
      dismissSecs: 2,
      dismissCountDown: 0
    }
  },
  methods: {
    submitForm (e) {
      axios
        .post(
          'https://seashell-app-se7bo.ondigitalocean.app/api/send',
          {
            name: this.form.name,
            email: this.form.email,
            mensaje: this.form.mensaje
          }
        )
        .then(res => {
          console.log(res)
        }).then(
          this.form.name = '',
          this.form.email = '',
          this.form.mensaje = '',
          this.savingSuccessful = true,
          e.preventDefault()
        )
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
      this.savingSuccessful = false
    }
  }
}
</script>

<style scoped>
h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: white !important;
}

#titulosgrandes {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

#item {
    position: relative;
    display: block;
    flex: 1 1 0px;
    transition: transform 500ms;
}

.card-title {
    position: absolute;
    bottom: 0;
    left: 1rem;
    color: white;
    -webkit-transition: font-size 1s ease;
    transition: font-size 1s ease;
}

.card-title:hover {
    font-size: 28px;
}

img:hover {
    font-size: 28px;
}

.product-image {
    position: relative;
    display: inline-block;
}

.product-image:hover {
    animation: kenburns-bottom 5s ease-out both;
    z-index: 999999;
}

@keyframes kenburns-bottom {
    0% {
        transform: scale(1) translateY(0);
        transform-origin: 50% 84%;
    }

    100% {
        transform: scale(1.25) translateY(15px);
        transform-origin: bottom;
    }
}

.product-image:hover .item {
    transform: translateX(-25%);
}

#item:focus~.item,
#item:hover~.item {
    transform: translateX(25%);
}

.product-image .item:hover {
    transform: scale(1.25);
    z-index: 1;
}

body {
    overflow: hidden;
}

#item img {
    display: block;
    max-width: 100%;
}

.form-control {
    display: flex;
    justify-content: flex-start;
}

#movie-container {
    display: flex;
    flex-direction: column;
    gap: 4vw;
}

.movies-list {
    display: flex;
    flex-direction: row;
    gap: 2vw;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product-image {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

img {
    display: flex;
    width: 250px;
    height: 280px;
    border-radius: 5%;
}

#difuminado {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 80%, rgba(255, 255, 255, 0) 100%);
    height: 100%;
    width: 100%;
}

#cineabajo {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    margin: 10vw;
    margin-top: -100px;
}

#cont {
    display: flex;
    flex-direction: column;
    gap: 5vw;
}

#for {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.8vw;
}

#enviar {
    color: white;
    border-color: white;
    border-radius: 30px;
}

#borrar {
    color: white;
    border-color: white;
    border-radius: 30px;
}

#botones {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: flex-start;
    gap: 2vw;
}

.b-form-input {
    display: flex;
    justify-content: flex-start;
}

#input-3.form-control {
    min-height: 25vw;
    display: flex;
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.9);
}

#input-2.form-control {
    background: rgba(255, 255, 255, 0.9);
}

#input-1.form-control {
    background: rgba(255, 255, 255, 0.9);
}

.form-control {
    display: flex;
    justify-content: flex-start;
}

#textform {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-template-areas:
        "texto formulario formulario formulario";
    gap: 2vw;
    font-size: 1vw;
}

p {
    color: white;
}

#formulario {
    grid-area: formulario;
    gap: 2vw;
}

#texto {
    min-width: 200px;
    grid-area: texto;
}

.title {
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2vw;
}

#abajo {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    margin: 10vw;
}

#cabecera {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    align-items: flex-start;

}

#section {
    background: url("../assets/shutterstock_1171248694.jpg") no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
}

section {
    display: flex;
    flex-direction: column;
}

@media screen and (max-width:425px) {
         p {
        font-size: 4vw;
    }
     .title {
        font-size: 8vw;
    }
    #texto {
        font-size: 5vw;
    }

    .movies-list {
        display: flex;
        flex-direction: row;
        gap: 2vw;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    #titulosgrandes {
        font-size: 10vw;
    }

    #textform {
        font-size: 10vw;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas:
            "texto"
            "formulario";
        gap: 2vw;
    }

    #cineabajo {
        display: flex;
        flex-direction: column;
        margin-top: -50px;
        gap: 2vw;
    }

    img {
        display: flex;
        width: 200px;
        height: 240px;
        border-radius: 5%;
    }
}

@media screen and (max-width:768px) {
     p {
        font-size: 3vw;
    }
                #cineabajo {
        display: flex;
        flex-direction: column;
        margin-top: -40px;
        gap: 2vw;
    }
    .movies-list {
        display: flex;
        flex-direction: row;
        gap: 1vw;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .title {
        font-size: 6vw;
    }

    #textform {
        font-size: 2vw;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas:
            "texto"
            "formulario";
        gap: 2vw;
    }

    #cineabajo {
        display: flex;
        flex-direction: column;
        gap: 2vw;
    }

    img {
        display: flex;
        width: 230px;
        height: 250px;
        border-radius: 5%;
    }
}

@media screen and (min-width:768px) and (max-width:1024px) {

        #cineabajo {
        display: flex;
        flex-direction: column;
        margin-top: -40px;
        gap: 2vw;
    }
    #textform {
        font-size: 2vw;
    }

    .title {
        font-size: 4vw;
    }

    .movies-list {
        display: flex;
        flex-direction: row;
        gap: 1vw;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    img {
        display: flex;
        width: 250px;
        height: 280px;
        border-radius: 5%;
    }
}

@media screen and (min-width:1024px) {
            #cineabajo {
        display: flex;
        flex-direction: column;
        margin-top: -100px;
        gap: 2vw;
    }
    .title {
        font-size: 3vw;
    }
    h2 {
        font-size: 2vw;
    }

    p {
        font-size: 1.5vw;
    }

    img {
        display: flex;
        width: 275px;
        height: 350px;
        border-radius: 5%;
    }
}

@media screen and (min-width:1440px) {
    h2 {
        font-size: 2vw;
    }

    p {
        font-size: 1.5vw;
    }

    img {
        display: flex;
        width: 375px;
        height: 450px;
        border-radius: 5%;
    }
}

@media screen and (min-width:2560px) {
        #cineabajo {
        display: flex;
        flex-direction: column;
        margin-top: -120px;
        gap: 2vw;
    }
    #input-1 {
        font-size: 1vw;
    }

    #input-2 {
        font-size: 1vw;
    }

    #input-3 {
        font-size: 1vw;
    }

    h2 {
        font-size: 1.5vw;
    }

    p {
        font-size: 1.5vw;
    }

    img {
        display: flex;
        width: 375px;
        height: 450px;
        border-radius: 5%;
    }

    #enviar {
        font-size: 0.8vw;
        height: 2vw;
        width: 4vw;
    }

    #borrar {
        font-size: 0.8vw;
        height: 2vw;
        width: 4vw;
    }
}

@media screen and (min-width:4000px) {
    h2 {
        font-size: 2vw;
    }

    p {
        font-size: 2vw;
    }

    img {
        display: flex;
        width: 750px;
        height: 950px;
        border-radius: 5%;
    }

    #enviar {
        font-size: 0.8vw;
        height: 2vw;
        width: 4vw;
    }

    #borrar {
        font-size: 0.8vw;
        height: 2vw;
        width: 4vw;
    }
}

@media screen and (min-width:5000px) {
    img {
        display: flex;
        width: 950px;
        height: 1024px;
        border-radius: 5%;
    }

    #enviar {
        font-size: 0.8vw;
        height: 2vw;
        width: 4vw;
    }

    #borrar {
        font-size: 0.8vw;
        height: 2vw;
        width: 4vw;
    }
}

@media screen and (min-width:7000px) {
    img {
        display: flex;
        width: 1024px;
        height: 1440px;
        border-radius: 5%;
    }
}

@media screen and (min-width:8000px) {
    img {
        display: flex;
        width: 1400px;
        height: 1850px;
        border-radius: 5%;
    }
}
</style>
