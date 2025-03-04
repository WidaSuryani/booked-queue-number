import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../page/login-page.vue";
import HomePage from "../page/home-page.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/home-page",
    name: "HomePage",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
