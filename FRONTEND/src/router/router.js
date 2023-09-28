import { createRouter, createWebHistory } from 'vue-router';
import LoadingSite from '../views/LoadingSite.vue';
import AccueilSite from '../views/AccueilSite.vue';
import MenuSite from '../views/MenuOnClick.vue';
import FormulaireReservation from '../views/PageReservationTable.vue';

const routes = [
  {
    path: '/letem54/',
    component: LoadingSite
  },
  {
    path: '/letem54/accueil',
    component: AccueilSite
  },
  {
    path: '/letem54/menu',
    component: MenuSite
  },
  {
    path: '/letem54/reservation',
    component: FormulaireReservation
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  transition: {
    name: 'view-transition',
    mode: 'out-in'
  }
});

export default router;
