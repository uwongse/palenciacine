import Vue from 'vue'
import Router from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const ContactoView = () => import('@/views/ContactoView.vue')
const AllOrtegaView = () => import('@/views/AllOrtegaView.vue')
const AllAvenidaView = () => import('@/views/AllAvenidaView.vue')
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
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/contacto/cinesortega',
      name: 'cinesortega',
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
      path: '/obrasteatroortega',
      name: 'obrasteatroortega',
      component: TeatroView,
      children: [
        {path: ':id/:names', name: 'obrasortega', component: AppModal}
      ]
    },
    {
      path: '/obrascineortega',
      name: 'obrascineortega',
      component: AllOrtegaView,
      children: [
        {path: ':id/:names', name: 'obrascineortegas', component: AppModal},
        {path: 'proximamente/:id/:names', name: 'proximamenteortega', component: AppModal}
      ]
    },
    {
      path: '/obrasavenida',
      name: 'obrasavenida',
      component: AllAvenidaView,
      children: [
        {path: ':id/:names', name: 'obrascineavenida', component: AppModal},
        {path: 'proximamente/:id/:names', name: 'proximamenteavenida', component: AppModal}
      ]
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
