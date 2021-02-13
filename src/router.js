import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import SearchPage from './views/SearchPage.vue';
import NotFoundPage from './views/NotFoundPage.vue';
<<<<<<< HEAD
import CreateHousePage from './views/CreateHousePage.vue';
=======
>>>>>>> e5b1a1c3cccfa285d2989cba2b7665713421243e

// User Pages
import ProfilePage from './views/user/ProfilePage.vue';
import HousesPages from './views/user/HousesPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage,
    },
    {
      path: '/user',
      redirect: { name: 'ProfilePage' },
    },
    {
      path: '/user/profile',
      name: 'ProfilePage',
      component: ProfilePage,
    },
    {
      path: '/user/houses',
      name: 'HousesPages',
      component: HousesPages,
    },
    {
<<<<<<< HEAD
      path: '/house',
      redirect: { name: 'ProfilePage' },
    },
    {
      path: '/house/new',
      name: 'CreateHousePage',
      component: CreateHousePage,
    },
    {
=======
>>>>>>> e5b1a1c3cccfa285d2989cba2b7665713421243e
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage,
    },
<<<<<<< HEAD

=======
>>>>>>> e5b1a1c3cccfa285d2989cba2b7665713421243e
  ],
});
