import { useAuthStore } from '../stores/authStore';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Recharges from '../view/Recharges.vue'
import RechargesPayments from '../view/RechargesPayments.vue';
import NotFound from '../view/NotFound.vue';
import Login from '../view/Login.vue';
import ErrorMessage from '../components/ErrorMessage.vue';


const routes: RouteRecordRaw[] =[
  {
    path:'/',
    name : 'login',
    component: Login,
    
  },
  {
    path:'/recharges',
    name : 'recharges',
    component: Recharges,
    beforeEnter: (_to, _from, next) => {
      const authStore = useAuthStore();

      if (!authStore.token) {
        next('/notfound401');
      } else {
        next()
      }
    },
  },
  {
    path:'/rechargesPayments',
    name : 'rechargesPayments',
    component: RechargesPayments,
    beforeEnter: (_to, _from, next) => {
      const authStore = useAuthStore();

      if (!authStore.token ) {
        next('/notfound401');
      } else {
        next();
      }
    },
    
  },
  {
    path:'/:NotFound(.*)*', component: NotFound
  },
  {
    path:'/notfound401', component: ErrorMessage, name : 'error401'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

