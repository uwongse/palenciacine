<template>
<article class="container-fluid">
    <section class="row mx-3 my-4">
        <section class="my-4">
            <p>Promociones</p>
        </section>
        <section class="movie-container">
            <section class="movies-list">
                <section class="movie">
                    <section class="product-image">
                        <img src="@/assets/app.jpg" alt="">
                    </section>
                </section>
                <section class="movie">
                    <section class="product-image">
                        <img src="@/assets/san_antolines_2017.jpg" alt="">
                    </section>
                </section>
                <section class="movie">
                    <section class="product-image">
                        <img src="@/assets/cines_bar.jpg" alt="">
                    </section>
                </section>
                <section class="movie">
                    <section class="product-image">
                        <img src="@/assets/cines_cumpleanos.jpg" alt="">
                    </section>
                </section>
            </section>
        </section>
    </section>
</article>
</template>

<script>
export default {
  name: 'app-promociones',
  props: {
    movies: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
p {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 5vw;
}

.movies-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    grid-gap: 20px;
}

.product-image {
    display: flex;
}

img {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 1%;
}

@media screen and (min-width: 320px) {
    p {
        font-size: 9vw;
    }
}

@media screen and (min-width: 425px) {
    p {
        font-size: 6vw;
    }
}

@media screen and (min-width: 768px) {
    p {
        font-size: 5vw;
    }
}

@media screen and (min-width: 1024px) {
    p {
        font-size: 4vw;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        grid-gap: 25px;
    }
}

@media screen and (min-width: 1440px) {
    p {
        font-size: 3vw;
    }

    .movies-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 25px;
    }

    img {
        display: flex;
        max-width: 60%;
        min-width: 60%;
        border-radius: 1%;
    }
}

@media screen and (min-width: 2560px) {
    p {
        font-size: 3vw;
    }
}
</style>
