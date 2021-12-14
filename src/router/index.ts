import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/donate_ether",
    name: "DonateEther",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/DonateEther.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Notfound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/Notfound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
