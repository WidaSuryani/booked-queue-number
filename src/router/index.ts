import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/page/login-page.vue";
import FormBooking from "@/page/form-booking-page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LoginPage,
  },
  {
    path: "/form-booking",
    name: "FormBooking",
    component: FormBooking,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
