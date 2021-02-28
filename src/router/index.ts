import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Design',
    component: () =>
      import(/* webpackChunkName: "Design" */ '@/views/design/index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
