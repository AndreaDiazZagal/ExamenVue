import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/main'
    },{
        path: '/',
        component:{
            render(c){
                return c("router-view");
            }
        },
        children: [
            {
                path: '/main',
                name: 'main',
                component: () => import('../components/Main.vue')
            },
            {
                path: '/paginacion',
                name: 'paginacion',
                component: () => import('../components/Paginacion.vue')
            },
            {
                path: '/formulario',
                name: 'formulario',
                component: () => import('../components/Formulario.vue')
            },
        ]
    }
]

const router = new VueRouter({ routes, })
export default router;