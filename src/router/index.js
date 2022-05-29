import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '../views/HeroView';
import OurCoffeeView from '../views/OurCoffeeView';
import ContactsView from '../views/ContactsView';
import GoodsView from '../views/GoodsView';
import ItemView from '../views/ItemView';
import ThanksView from '../views/ThanksView';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/contacts', component: ContactsView },
  { path: '/goods', component: GoodsView },
  { path: '/item', component: ItemView },
  { path: '/thanks', component: ThanksView },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
