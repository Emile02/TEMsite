//router.js

import { createRouter, createWebHistory } from 'vue-router';
import LoadingSite from '../views/LoadingSite.vue';
import AccueilSite from '../views/AccueilSite.vue';
import MenuSite from '../views/MenuOnClick.vue';
import FormulaireReservation from '../views/PageReservationTable.vue';
import GaleriePhotos from '../views/GaleriePhotos.vue';
import cartesMenu from '../views/CartesMenu.vue';
import ReserverUneTable from '../views/ReserverUneTable.vue';
import OffrirUnBonCadeau from '../views/OffrirUnBonCadeau.vue';
import RestaurantAcces from '../views/RestaurantAcces.vue';
import EvenementPage from '../views/EvenementPage.vue';

const routes = [
  {
    path: '/',
    component: LoadingSite
  },
  {
    path: '/accueil',
    component: AccueilSite
  },
  {
    path: '/menu',
    component: MenuSite
  },
  {
    path: '/reservation',
    component: FormulaireReservation
  },
  {
    path: '/galerie-photos',
    component: GaleriePhotos
  },
  {
    path: '/galerie-photos2',
    component: GaleriePhotos
  },
  {
    path: '/cartes-menu-restaurant-le-TEM',
    component: cartesMenu
  },
  {
    path: '/reserver-une-table',
    component: ReserverUneTable
  },
  {
    path: '/offrir-un-bon-cadeau',
    component: OffrirUnBonCadeau
  },
  {
    path: '/acces-restaurant-le-tem-nancy',
    component: RestaurantAcces
  },
  {
    path: '/evenements-restaurant-le-tem',
    component: EvenementPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
