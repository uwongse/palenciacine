<template>
<nav id="nav">
    <b-navbar id="topnav" class="navbar" toggleable="lg" type="dark" variant="dark">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" variant="dark" is-nav>
            <b-navbar-nav id="items">
                <b-nav-item class="letra">
                    <router-link  to="/">Cartelera</router-link >
                </b-nav-item>
                <b-nav-item class="letra">
                    <router-link  to="/obrasteatroortega">Teatro Ortega</router-link>
                </b-nav-item>
                <b-nav-item class="letra" >
                    <router-link  to="/obrascineortega">Cines Ortega</router-link>
                </b-nav-item>
                 <b-nav-item class="letra" >
                    <router-link  to="/obrasavenida">Multicines Avenida</router-link>
                </b-nav-item>
                <b-nav-item class="letra" >
                    <router-link  to="/contacto">Contacto</router-link>
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em class="letra">Venta de Entradas</em>
                    </template>
                    <b-dropdown-item class="dropdown" target="_blank" href="https://www.reservaentradas.com/cine/palencia/teatrocinesortega">
                        <h2>Cines Ortega</h2>
                    </b-dropdown-item>
                    <b-dropdown-item class="dropdown" target="_blank" href="https://www.reservaentradas.com/cine/palencia/multicinesavenida">
                        <h2>Multicines Avenida</h2>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</nav>
</template>

<script>
export default {
  name: 'app-nav'
}
</script>

<style>
a:visited {
    color: #c6d1de;
    text-decoration: none!important;
}

a:active {
    color: #c6d1de;
    text-decoration: none!important;
}

a {
    color: #c6d1de;
    text-decoration: none!important;
}

a:hover {
    color: white!important;
    text-decoration: none!important;
}

.navbar-toggler.collapsed {
    z-index: 10000;
}

.nav-link.dropdown-toggle:hover {
    color: white;
}

button.b-dropdown-item {
    background-color: black;
    margin-left: 10px;
}

.navbar-collapse.collapse {
    display: flex;
    justify-content: center;
    background-color: transparent !important;
    gap: 1vw;
}

.change_color {
    background-color: #000;
}

.dropdown-item {
    background-color: transparent !important;
}

.dropdown-item:hover {
    color: white;
}

ul.dropdown-menu.dropdown-menu-right.show {
    background-color: #000 !important;
}

@media screen and (max-width:990px) {
    .dropdown {
        font-size: 2vw;
    }

    .nav-link {
        background-color: transparent !important;
    }

    .contenido {
        height: 95px;
        display: flex;
        justify-content: flex-end;
        background: rgb(0, 0, 0);
        background: linear-gradient(180deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
    }

    .navbar-collapse.collapse {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: rgb(0, 0, 0);
        background: linear-gradient(180deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
    }

    .ulnavbar-collapse.collapse.show {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: #000 !important;
    }
}

@media screen and (max-width:768px) {
    .dropdown {
        font-size: 2vw;
    }
}

@media screen and (max-width:425px) {
    .dropdown {
        font-size: 3vw;
    }
}
</style><style scoped>
.letra {
    color: #c6d1de;
    text-decoration: none;
    font-size: 1.1vw;
}

.navbar {
    background-color: transparent !important;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
}

.dropdown {
    background-color: transparent !important;
    text-decoration: none;
}

.dropdown-menu {
    color: #0000;
    background-color: transparent !important;
}

.letra {
    font-style: normal;
}

.letra:hover {
    color: white;
}

#nav {
    margin: 0;
    padding: 0;
}

#nav-collapse {
    background-color: transparent !important;
}

#items {
    display: flex;
    justify-content: center;
    background-color: transparent !important;
    gap: 1vw;
}

#topnav {
    position: fixed;
    display: flex;
    gap: 3vw;
    justify-content: center;
    width: 100%;
    height: 6vw;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 100%);
    z-index: 1000;
}

@media screen and (min-width:2560px) {
    h2 {
        font-size: 1.2vw;
    }
}

@media screen and (max-width:2560px) {
    h2 {
        font-size: 1.4vw;
    }

    .letra {
        font-size: 1.4vw;
    }
}

@media screen and (max-width:1440px) {
    h2 {
        font-size: 1.7vw;
    }

    .letra {
        font-size: 1.7vw;
    }
}

@media screen and (max-width:1024px) {
    h2 {
        font-size: 1.8vw;
    }

    .letra {
        font-size: 1.8vw;
    }

}

@media screen and (max-width:990px) {
    h2 {
        font-size: 2vw;
    }

    .letra {
        font-size: 2vw;
    }

    #nav-collapse {
        display: flex;
        align-content: flex-start;
        justify-content: flex-end;
        background-color: #000 !important;
    }

    #topnav {
        height: 8vw;
        display: flex;
        align-content: flex-start;
        justify-content: flex-end;
        background-color: transparent !important;
    }
}

@media screen and (max-width:768px) {
    h2 {
        font-size: 2.2vw;
    }

    .letra {
        font-size: 2.2vw;
    }

    #nav-collapse {
        display: flex;
        align-content: flex-start;
        justify-content: flex-end;
        background-color: #000 !important;
    }

    #topnav {
        height: 10vw;
        display: flex;
        align-content: flex-start;
        justify-content: flex-end;
        background-color: transparent !important;
    }
}

@media screen and (max-width:425px) {
    h2 {
        font-size: 3.5vw;
    }

    .letra {
        font-size: 3.5vw;
    }

    #nav-collapse {
        display: flex;
        align-content: flex-start;
        justify-content: flex-end;
        background-color: #000 !important;
    }

    #topnav {
        height: 16vw;
        display: flex;
        align-content: flex-start;
        justify-content: flex-end;
        background-color: transparent !important;
    }
}
</style>

<style scoped>
a {
    color: #c6d1de!important;
    text-decoration: none!important;
}
</style>
