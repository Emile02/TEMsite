//main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import Vuex from 'vuex';
import store from '../store';

createApp(App).use( router, Vuex, store).mount('#app');
