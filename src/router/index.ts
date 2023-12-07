import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Recharges from '../view/Recharges.vue'
import RechargesPayments from '../view/RechargesPayments.vue';
import NotFound from '../view/NotFound.vue';
import Login from '../view/Login.vue';

const routes: RouteRecordRaw[] =[
  {
    path:'/',
    name : 'login',
    component: Login
  },
  {
    path:'/recharges',
    name : 'recharges',
    component: Recharges
  },
  {
    path:'/rechargesPayments',
    name : 'rechargesPayments',
    component: RechargesPayments
  },
  {
    path:'/:NotFound(.*)*', component: NotFound
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})