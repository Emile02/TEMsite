import { createRouter, createWebHistory } from 'vue-router';
import LoadingSite from '../views/LoadingSite.vue';
// import AccueilSite from '../views/AccueilSite.vue';
import MenuSite from '../views/MenuOnClick.vue';
import FormulaireReservation from '../views/PageReservationTable.vue';
import GaleriePhotos from '../views/GaleriePhotos.vue';
import cartesMenu from '../views/CartesMenu.vue';
import ReserverUneTable from '../views/ReserverUneTable.vue';
import OffrirUnBonCadeau from '../views/OffrirUnBonCadeau.vue';
import RestaurantAcces from '../views/RestaurantAcces.vue';
import EvenementPage from '../views/EvenementPage.vue';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: LoadingSite
  },
  {
    path: '/letem54/accueil',
    component: LoadingSite
  },
  {
    path: '/letem54/menu',
    component: MenuSite
  },
  {
    path: '/letem54/reservation',
    component: FormulaireReservation
  },
  {
    path: '/letem54/galerie-photos',
    component: GaleriePhotos
  },
  {
    path: '/letem54/cartes-menu-restaurant-le-TEM',
    component: cartesMenu
  },
  {
    path: '/letem54/reserver-une-table',
    component: ReserverUneTable
  },
  {
    path: '/letem54/offrir-un-bon-cadeau',
    component: OffrirUnBonCadeau
  },
  {
    path: '/letem54/acces-restaurant-le-tem-nancy',
    component: RestaurantAcces
  },
  {
    path: '/letem54/evenements-restaurant-le-tem',
    component: EvenementPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  transition: {
    name: 'view-transition',
    mode: 'fade'
  }
});

export default router;
