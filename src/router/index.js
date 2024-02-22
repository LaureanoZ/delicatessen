import Vue from 'vue'
import VueRouter from 'vue-router'
import InformacionProductos from "@/components/InformacionProductos";
import Listado from "@/components/Listado";
import Carrito from "@/components/Carrito";
import probando from "@/components/probando";


import LoginView from "@/Views/LoginView";
import RegisterView from "@/Views/RegisterView";
import HomeView from "@/Views/HomeView";
import CardHome from "@/components/CardHome";
import LocalesView from "@/Views/LocalesView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },

    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },

    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },

    {
        path: '/Locales',
        name: 'LocalesView',
        component: LocalesView
    },
    {
        path: '/productos',
        name: 'Productos',
        component: InformacionProductos
    },

    {
        path: '/listado',
        name: 'Listado',
        component: Listado
    },
    {
        path: '/carrito',
        name: 'Carrito',
        component: Carrito
    },

    {
        path: '/probando',
        name: 'probando',
        component: probando
    },

    {
        path: '/cardhome',
        name: 'cardHome',
        component: CardHome
    },



    // REDIRECCIONO

    {path: '*', redirect: '/'},

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
