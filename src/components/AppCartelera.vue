<template>
<article>
    <section class="difuminado">
        <section class="container-fluid">
            <section class="row mx-3">
                <span>Hoy en Cartelera</span>
            </section>
        </section>
    </section>
    <article class="container-fluid">
        <section class="row mx-3 mb-4">
            <router-view />
            <article class="movie-container" v-if="movies.length">
                <article class="movies-list">
                    <article class="movie" v-for="movie in movies" :key="movie.id">
                        <section class="product-image">
                            <section :class="[{estreno: movie.active ==1 }]"></section>
                            <img id="img" :src="`${movie.poster}`" alt="">
                        </section>
                        <article class="details">
                            <router-link class="item" :to="{path:`cartelera/${movie.id}/${sanitizeTitle(movie.title)}`}" >
                                <h2>{{movie.projections[0].cinema.cinema}}</h2>
                            </router-link>
                            <section class="detalles">
                                <router-link class="item" :to="{path:`cartelera/${movie.id}/${sanitizeTitle(movie.title)}`}" >
                                    <section>
                                        <h3>{{movie.title}}</h3>
                                        <section id="horas" >
                                            <section v-for="hour in movie.projections" :key="hour.id">
                                                <section><p v-bind:style="time() <= getHumanDate(hour.hour) ? 'color: #ede60e':'color: #737571'">{{hour.hour}}&nbsp;</p></section>
                                            </section>
                                        </section>
                                    </section>
                                </router-link>
                                <button>
                                    <b-icon icon="bookmark-plus" font-scale="1"></b-icon>
                                    <router-link  class="item" :to="{path:`cartelera/${movie.id}/${sanitizeTitle(movie.title)}`}"><i>Más Información</i></router-link>
                                </button>
                                <button><img id="logoentrada" src="../assets/entrada.png" alt=""><a :href="`${movie.buy}`"><i> Comprar Entradas</i></a></button>
                            </section>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    </article>
</article>
</template>

<script>
import moment from 'moment'

export default {
  name: 'app-cartelera',
  props: {
    movies: {
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
    },
    time: function () {
      console.log(moment(new Date().toLocaleTimeString(), 'HH:mm').format('HH:mm'))
      return (moment(new Date().toLocaleTimeString(), 'HH:mm').format('HH:mm'))
    },
    getHumanDate: function (date) {
      console.log(moment(date, 'HH:mm').format('HH:mm'))
      return moment(date, 'HH:mm').format('HH:mm')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#color{
    color: #ede60e;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 2vw;
}

.estreno{
    background: url('../assets/estreno.png') no-repeat;
    min-height: 70px;
    min-width: 70px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
a {
    color: white;
}

a:hover {
    color: white;
}

#logoentrada {
    max-height: 25px;
    max-width: 25px;
}

.item {
    flex: 1 1 0px;
}

#horas {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    word-spacing: 1px;
}

.detalles {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.details {
    backdrop-filter: blur(1px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), #070707 75%);
    color: aliceblue;
    position: absolute;
    bottom: 0;
    padding: 10px;
    border-radius: 1%;
    opacity: 0;
    transition: .5s;
}

.details h6 {
    font-size: 1vw;
    padding: 2px 0px;
    font-weight: 200;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
}

.details h2 {
    font-size: 1vw;
    padding: 2px 0px;
    font-weight: 800;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

.details h3 {
    font-size: 1vw;
    word-spacing: 1px;
    margin-bottom: 2px;
    padding: 2px 0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

.details p {
    font-size: 1vw;
    margin-bottom: 2px;
    opacity: .8;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

.details button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    padding: 0;
    font-size: 1vw;
    color: white;
    background-color: transparent;
    outline: none;
    border: none;
    text-align: left;
    border-radius: 5px;
    font-weight: 500;
    opacity: .8;
}

.details button a {
    color: white;
    text-decoration: none;
    font-size: 1vw;
    font-weight: 600;
    margin-left: 10px;
}

.movie {
    border-color: black;
    position: relative;
    display: inline-block;
    transform: scale(.9);
    transition: .3s;
}

.movie:hover {
    transform: scale(1.2);
    z-index: 99;
}

.movie:hover .details {
    opacity: 1;
    cursor: pointer;
}

.details button:hover {
    background-color: rgb(255, 225, 255, 0.1);
}

.difuminado {
    height: 151px;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
    margin-top: -150px;
    position: relative;
    z-index: 1;

}

span {
    color: white;
    object-fit: cover;
    margin-top: 70px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

.movies-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    grid-gap: 20px;
}

.product-image {
    display: flex;
}

.item img {
    max-width: 100%;
}

#img {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 1%;
    border-style:solid;
    border-color: black;
}

@media screen and (max-width: 320px) {
          .estreno{
    background: url('../assets/estreno.png') no-repeat;
    height: 70px;
    width: 70px;
    position: absolute;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 5vw;
        max-width: 5vw;
    }

    .details h3 {
        font-size: 5vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 5vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 5vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 5vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 5vw;
        font-weight: 600;
        margin-left: 2px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        grid-gap: 20px;
    }

    .difuminado {
        height: 50px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -50px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 35px;
        font-size: 9vw;
    }
}

@media screen and (min-width: 320px) {
    #color{
    color: #ede60e;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 5vw;
}
    .estreno{
    background: url('../assets/estreno.png') no-repeat;
    height: 70px;
    width: 70px;
    position: absolute;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 3vw;
        max-width: 3vw;
    }

    .details h6 {
        font-size: 2vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h4 {
        font-size: 2.5vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h5 {
        font-size: 2.5vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 2px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 2.5vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 3vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 2.5vw;
        font-weight: 600;
        margin-left: 2px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        grid-gap: 20px;
    }

    .difuminado {
        height: 50px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -30px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 35px;
        font-size: 8vw;
    }
}

@media screen and (min-width: 320px) {
            .estreno{
    background: url('../assets/estreno.png') no-repeat;
    height: 70px;
    width: 70px;
    position: absolute;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 3vw;
        max-width: 3vw;
    }

    .details h6 {
        font-size: 2vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 2.5vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 2.5vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 2px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 2.5vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 3vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 2.5vw;
        font-weight: 600;
        margin-left: 2px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        grid-gap: 20px;
    }

    .difuminado {
        height: 101px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -50px;
        position: relative;
        z-index: 1;

    }

}

@media screen and (min-width: 375px) {
    .movies-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(110px, 1fr));
        grid-gap: 20px;
    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 35px;
        font-size: 7vw;
    }
}
@media screen and (min-width: 425px) {
         .estreno{
    background: url('../assets/estreno90.png') no-repeat;
    height: 90px;
    width: 90px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}

 }
@media screen and (min-width: 625px) {
        .estreno{
    background: url('../assets/estreno90.png') no-repeat;
    height: 90px;
    width: 90px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 2vw;
        max-width: 2vw;
    }

    .details h6 {
        font-size: 2vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 2vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 2vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 2px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 2vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 2vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 2vw;
        font-weight: 600;
        margin-left: 10px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(110px, 1fr));
        grid-gap: 25px;
    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 35px;
        font-size: 5vw;
    }
}

@media screen and (min-width: 768px) {
        #color{
    color: #ede60e;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 3.5vw;
}
    .estreno{
    background: url('../assets/estreno90.png') no-repeat;
    height: 90px;
    width: 90px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 20px;
        max-width: 20px;
    }

    .details h6 {
        font-size: 1vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 2vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 1.5vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 2px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 1.5vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 2.5vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 1.2vw;
        font-weight: 600;
        margin-left: 10px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(4, minmax(110px, 1fr));
        grid-gap: 25px;
    }

    .difuminado {
        height: 110px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -90px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 40px;
        font-size: 4.5vw;
    }
}

@media screen and (min-width: 925px) {
    #logoentrada {
        max-height: 2vw;
        max-width: 2vw;
    }

    .details h6 {
        font-size: 1.5vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 2vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 1.5vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 2px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 1.5vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 2vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 1vw;
        font-weight: 600;
        margin-left: 10px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(4, minmax(110px, 1fr));
        grid-gap: 25px;
    }

    .difuminado {
        height: 110px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -90px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 40px;
        font-size: 4.5vw;
    }
}

@media screen and (min-width: 1024px) {
            #color{
    color: #ede60e;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 3vw;
}
            .estreno{
    background: url('../assets/estreno90.png') no-repeat;
    height: 90px;
    width: 90px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 2vw;
        max-width: 2vw;
    }

    .details h6 {
        font-size: 1vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 1.5vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 1.2vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 2px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 1.1vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 2vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 1.2vw;
        font-weight: 600;
        margin-left: 10px;
    }

    .difuminado {
        height: 131px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -100px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 40px;
        font-size: 3.5vw;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(5, minmax(110px, 1fr));
        grid-gap: 25px;
    }

    .item img {
        max-width: 100%;
    }
}

@media screen and (min-width: 1440px) {
            #color{
    color: #ede60e;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 2vw;
}
        .estreno{
    background: url('../assets/estreno100.png') no-repeat;
    height: 100px;
    width: 100px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 1vw;
        max-width: 1vw;
    }

    .details h6 {
        font-size: 1vw;
        padding: 2px 0px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 1vw;
        padding: 2px 0px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 1vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 2px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        font-size: 1vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding: 0;
        font-size: 1vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 1vw;
        font-weight: 600;
        margin-left: 10px;
    }

    .difuminado {
        height: 131px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -100px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 40px;
        font-size: 3vw;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(6, minmax(110px, 1fr));
        grid-gap: 25px;
    }

    .item img {
        max-width: 100%;
    }
}
@media screen and (min-width: 1980px) {
            .estreno{
    background: url('../assets/estrenogrande.png') no-repeat;
    height: 140px;
    width: 140px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
}
@media screen and (min-width: 2560px) {
            .estreno{
    background: url('../assets/estreno160.png') no-repeat;
    height: 160px;
    width: 160px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    .difuminado {
        height: 200px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -150px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 50px;
        font-size: 3vw;
    }
}

@media screen and (min-width: 3060px) {
                .estreno{
    background: url('../assets/estreno200.png') no-repeat;
    height: 200px;
    width: 200px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 1vw;
        max-width: 1vw;
    }

    .details h6 {
        font-size: 1vw;
        padding: 20px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 1vw;
        padding: 20px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 1vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        padding-left: 20px;
        font-size: 1vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding-left: 25px;
        padding-right: 25px;
        font-size: 1vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 1vw;
        font-weight: 600;
        margin-left: 20px;
    }

    .difuminado {
        height: 250px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -150px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 40px;
        height: 300px;
    }
}

@media screen and (min-width: 4500px) {
                    .estreno{
    background: url('../assets/estreno250.png') no-repeat;
    height: 250px;
    width: 250px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 1vw;
        max-width: 1vw;
    }

    .details h6 {
        font-size: 1vw;
        padding: 35px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 1vw;
        padding: 35px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 1vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 35px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        padding-left: 30px;
        font-size: 1vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding-left: 35px;
        padding-right: 35px;
        font-size: 1vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 1vw;
        font-weight: 600;
        margin-left: 10px;
    }

    .difuminado {
        height: 550px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -450px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 200px;
        font-size: 3vw;
    }
}

@media screen and (min-width: 5120px) {
                    .estreno{
    background: url('../assets/estreno350.png') no-repeat;
    height: 350px;
    width: 350px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    #logoentrada {
        max-height: 1vw;
        max-width: 1vw;
    }

    .details h6 {
        font-size: 1vw;
        padding: 45px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    .details h2 {
        font-size: 1vw;
        padding: 45px;
        font-weight: 800;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details h3 {
        font-size: 1vw;
        word-spacing: 1px;
        margin-bottom: 2px;
        padding: 45px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .details p {
        padding-left: 30px;
        font-size: 1vw;
        margin-bottom: 2px;
        opacity: .8;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .details button {
        width: 100%;
        margin-top: 5px;
        padding-left: 25px;
        padding-right: 25px;
        font-size: 1vw;
        color: white;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 5px;
        font-weight: 500;
        opacity: .8;
    }

    .details button a {
        color: white;
        text-decoration: none;
        font-size: 1vw;
        font-weight: 600;
        margin-left: 10px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(6, minmax(110px, 1fr));
        grid-gap: 25px;
    }

    .item img {
        max-width: 100%;
    }
}

@media screen and (min-width: 6144px) {
                    .estreno{
    background: url('../assets/estreno500.png') no-repeat;
    height: 500px;
    width: 500px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
    .difuminado {
        height: 750px;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
        margin-top: -450px;
        position: relative;
        z-index: 1;

    }

    span {
        color: white;
        object-fit: cover;
        margin-top: 200px;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(7, minmax(110px, 2fr));
        grid-gap: 25px;
        margin: 1vw;
    }

    .item img {
        max-width: 100%;
    }
}
@media screen and (min-width: 8000px) {
                    .estreno{
    background: url('../assets/estreno650.png') no-repeat;
    height: 650px;
    width: 650px;
    position: absolute;
    object-fit:cover;
    top: 0;
    right: 0;
}
}
</style>
