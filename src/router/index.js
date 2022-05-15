import Vue from 'vue'
import Router from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const ContactoView = () => import('@/views/ContactoView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const AppModal = () => import('@/components/AppModal.vue')
const TeatroView = () => import('@/views/TeatroView.vue')
const CineOrtegaView = () => import('@/views/CineOrtegaView.vue')
const CineOmyView = () => import('@/views/CineOmyView.vue')
const MulticinesAvenidaView = () => import('@/views/MulticinesAvenidaView.vue')
const TeatroOrtegaView = () => import('@/views/TeatroOrtegaView.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      component: HomeView,
      children: [
        {path: 'cartelera/:id/:names', name: 'cartelera', component: AppModal},
        {path: 'proximamente/:id/:names', name: 'proximamente', component: AppModal},
        {path: 'teatro/:id/:names', name: 'teatros', component: AppModal}
      ]
    },
    {
      path: '/promociones',
      name: 'promociones',
      component: AboutView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/contacto/cineortega',
      name: 'cineortega',
      component: CineOrtegaView
    },
    {
      path: '/contacto/multicinesavenida',
      component: MulticinesAvenidaView
    },
    {
      path: '/contacto/teatroortega',
      component: TeatroOrtegaView
    },
    {
      path: '/contacto/cineomy',
      component: CineOmyView
    },
    {
      path: '/teatro',
      name: 'teatro',
      component: TeatroView
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
