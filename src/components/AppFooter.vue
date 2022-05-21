<template>
<footer class="footer">
    <article class="container-fluid mt-5 py-4">
        <section class="logos mx-4">
            <router-link to="/contacto/cinesortega"><img id="app1" src="../assets/cineortegagris.png" alt=""></router-link>
            <router-link to="/contacto/multicinesavenida"><img id="app1" src="../assets/avenidagris.png" alt=""></router-link>
            <router-link to="/contacto/cineomy"><img id="app1" src="../assets/omygris.png" alt=""></router-link>
            <router-link to="/contacto/teatroortega"><img id="app1" src="../assets/teatroortegagris.png" alt=""></router-link>
        </section>
        <section class="resto mx-4">
            <section class="follow">
                <p id="white">Síguenos</p>
                <section class="redes">
                    <a href="https://twitter.com/CinesPalencia" target="_blank">
                        <img id="app2" src="../assets/tw.png">
                    </a>
                    <a href="https://www.facebook.com/cinespalencia" target="_blank">
                        <img id="app2" src="../assets/face.png">
                    </a>
                    <a href="https://www.instagram.com/cinespalencia" target="_blank">
                        <img id="app2" src="../assets/insta.png">
                    </a>
                </section>
            </section>
            <section class="appdown">
                <p id="white">Descarga nuestra app</p>
                <section class="appdiv">
                    <section class="my-auto">
                        <a href="#"><img id="app" src="../assets/appstore.png"></a>
                    </section>
                    <section class="my-auto">
                        <a href="#"><img id="app" src="../assets/google.png"></a>
                    </section>
                </section>
            </section>
        </section>
        <p class="mx-4" id="texto">La empresa no se hace responsable de posibles variaciones de horarios, salas y de más acciones por causa mayor.</p>
    </article>
</footer>
</template>

<script>
export default {
  name: 'app-footer'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.footer{
    height: 100%;
    bottom: 0;
}
#white {
    color: #b9b9b9;
}

#input {
    width: 10vw;
    font-size: 1.8vw;
    min-width: 250px;
    min-height: 20px;
}

#texto {
    font-size: 2vw;
    color: #737571;
}

#app1 {
    width: 12vw;
}

.redes {
    display: flex;
    gap: 1vw;
}

.appdiv {
    display: flex;
    flex-direction: row;
    gap: 2vw;
}

#app2 {
    max-width: 2vw;
    max-height: 2vw;
}

#app {
    max-width: 7vw;
    max-height: 7vw;
}

.container-fluid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vw;
}

.sub {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.resto {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 5vw;
}

.logos {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    flex-wrap: wrap;
    gap: 4vw;
}

@media screen and (min-width: 7560px) {
    #app2 {
        width: 8vw;
        height: 8vw;
    }
}

@media screen and (min-width: 1024px) {
    #white {
        color: #b9b9b9;
        font-size: 1.5vw;
    }

    #input {
        width: 20vw;
        height: 3vw;
        font-size: 1.5vw;
        min-width: 20vw;
        min-height: 20px;
    }

    #texto {
        font-size: 1vw;
    }
}

@media screen and (max-width: 1024px) {
    #texto {
        font-size: 1.5vw;
    }
}

@media screen and (max-width: 768px) {
    .logos {
        gap: 4vw;
    }

    #app1 {
        min-width: 120px;
    }

    #app2 {
        max-width: 25px;
        max-height: 25px;
    }

    #app {
        max-width: 90px;
        max-height: 90px;
    }

    #input {
        font-size: 3.5vw;
    }

    #texto {
        font-size: 2.5vw;
    }

    .redes {
        display: flex;
        gap: 1vw;
    }

    .resto {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

    }
}

.follow {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.appdown {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 425px) {
    #input {
        font-size: 4vw;
    }

    #texto {
        font-size: 3.5vw;
    }
}

@media screen and (max-width: 320px) {
    #input {
        font-size: 6vw;
    }

    #texto {
        font-size: 3.5vw;
    }

    .logos {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
        flex-wrap: wrap;
        gap: 4vw;
    }
}
</style>
