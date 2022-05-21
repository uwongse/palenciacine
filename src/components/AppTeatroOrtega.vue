<template>
<article>
    <section id="section">
        <section id="opcacidad">
            <section id="contenido" class="mx-5">
                <section id="interior">
                    <router-view />
                    <section id="titulo">
                        <h2>Teatro Ortega</h2>
                    </section>
                    <section class="abajo">
                        <section id="izq">
                            <section id="direccion"><img id="logoimg" src="../assets/ubicacion.png" alt="">
                                <p>C. Colón, 2, BAJO, 34002 Palencia</p>
                            </section>
                            <section id="telefono"><img id="logoimg" src="../assets/movil.png" alt="">
                                <p>979 70 70 88</p>
                            </section>
                            <section id="correo"><img id="logoimg" src="../assets/correo.png" alt="">
                                <p>info@cinespalencia.com</p>
                            </section>
                        </section>
                        <section id="der" class="z-depth-1-half map-container">
                            <p>
                            Construido en el año 1937 por el arquitecto Luis Cazcón y reformado posteriormente en 1997 por los arquitectos Luis Gutiérrez y Juan Luis Gutiérrez.
                            Dedicado a espectáculos de ópera, teatro, danza, conciertos, cine y congresos. Dispone de un puesto de control de cine e iluminación en fondo de la platea.
                            Aforo: 689
                            Camerinos
                            Individuales: 2
                            Colectivos: 3
                            Capacidad: 10
                            </p>
                            <section class="mapa">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.051618920282!2d-4.532073953519285!3d42.0075164185665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47b04807c1ffd7%3A0x274b8c5df000b430!2sCines%20Teatro%20Ortega!5e0!3m2!1ses!2ses!4v1647943009187!5m2!1ses!2ses" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
</article>
</template>

<script>
export default {
  name: 'app-teatro-ortega'
}
</script>

<style scoped>
#logoimg {
    max-width: 25px;
    max-height: 25px;
}

#direccion {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

#correo {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

#telefono {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.mapa {
    height: 30vw;
}

p {
    color: #c6d1de;
}

h2 {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 3vw;
}

#izq {
    color: white;
}

#interior {
    margin: 12vw;
    display: flex;
    flex-direction: column;
    gap: 3vw;
}

iframe {
    max-width: 100%;
    height: 100%;
}

#opcacidad {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
}

#contenido {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.abajo {
    display: flex;
    flex-direction: row;
    gap: 3vw;
}

#section {
    z-index: 1000000;
    background: url("../assets/cineortega.jpg") no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 900px;
}

@media screen and (min-width: 3000px) {
    #section {
        height: 60vw;
    }

    p {
        font-size: 1vw;
    }

    h2 {
        color: white;
        font-size: 2vw;
    }

    #logoimg {
        min-width: 60px;
        min-height: 60px;
    }
}

@media screen and (max-width: 3000px) {
    #section {
        height: 1600px;
    }

}

@media screen and (max-width: 2560px) {
    #section {
        height: 1400px;
    }

}

@media screen and (min-width: 1440px) and (max-width: 2000px) {
    #section {
        height: 1100px;
    }
}
@media screen and (max-width:1440px) {
        #section {
        height: 1000px;
    }
    .abajo {
        display: flex;
        flex-direction: column;
        gap: 2vw;
    }

    iframe {
        height: 300px;
    }
}

@media screen and (max-width:1024px) {
       #interior {
        margin-top: 150px;
    }
        #section {
        height: 900px;
    }
    .abajo {
        display: flex;
        flex-direction: column;
        gap: 2vw;
    }

    iframe {
        height: 300px;
    }
}

@media screen and (max-width:700px) {
        h2{
        font-size: 8vw;
    }
    #interior {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        gap: 3vw;
        margin-left: 20px;
        margin-right: 10px;
    }

    iframe {
        height: 300px;
    }
}

@media screen and (max-width:425px) {
           #interior {
        margin-top: 80px;
    }
        h2{
        font-size: 8vw;
    }
    #interior {
        margin-left: 20px;
        margin-right: 10px;
    }

    iframe {
        height: 300px;
    }
}

@media screen and (max-width:375px) {
           #interior {
        margin-top: 60px;
    }
    h2{
        font-size: 8vw;
    }
    iframe {
        max-height: 240px;
    }
}

@media screen and (max-width:305px) {
    iframe {
        max-height: 50px;
    }
}
</style>
