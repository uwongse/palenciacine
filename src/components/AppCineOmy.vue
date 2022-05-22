<template>
<article>
    <section id="section">
        <section id="opcacidad">
            <section id="contenido" class="mx-lg-5 mx-2">
                <section id="interior">
                    <router-view />
                    <section id="titulo">
                        <h2>Cine Omy</h2>
                    </section>
                    <section class="abajo">
                        <section id="izq">
                            <section id="direccion"><img id="logoimg" src="../assets/ubicacion.png" alt="">
                                <p>Av. de la Comunidad Europea, 23, 34004 Palencia</p>
                            </section>
                            <section id="correo"><img id="logoimg" src="../assets/correo.png" alt="">
                                <p>info@cinespalencia.com</p>
                            </section>
                        </section>
                        <section id="der" class="z-depth-1-half map-container">
                            <p>El cine al aire libre está ubicado en el polígono industrial de San Antolín, en la avenida Comunidad Europea, número 23, donde se ha adaptado una parcela de 1.000 metros cuadrados con capacidad para 500 personas y dotado de proyección y sonido digital para ofrecer a los espectadores una experiencia única.</p>
                            <section class="mapa">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5760.750947653272!2d-4.510620385846345!3d42.00506472212922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47b18e4ba67231%3A0x5a2e9a01f75c1714!2sCine%20y%20Eventos%20Outdoor%20OMY!5e0!3m2!1ses!2ses!4v1647955888607!5m2!1ses!2ses" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  name: 'app-cine-omy'
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
    background: url("../assets/omy.jpg") no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 900px;
}

@media screen and (min-width: 2000px) {
    #section {
        height: 80vw;
    }

    p {
        font-size: 1vw;
    }

    h2 {
        color: white;
        font-size: 2vw;
    }

    #logoimg {
        min-width: 40px;
        min-height: 40px;
    }
}
@media screen and (min-width: 5000px) {
      #logoimg {
        min-width: 80px;
        min-height: 80px;
    }
}
@media screen and (min-width: 8000px) {
      #logoimg {
        min-width: 145px;
        min-height: 140px;
    }
}

@media screen and (max-width: 3000px) {
    #section {
        height: 1600px;
    }

}

@media screen and (min-width: 1440px) and (max-width: 2000px) {
        p {
        font-size: 1.2vw;
    }
    #section {
        height: 1400px;
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
