import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../pages/signin/index.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../pages/signup/index.vue"),
  },
  {
    path: "/watchvideo/:id",
    name: "WatchVideo",
    component: () => import("../pages/watchvideo/index.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (token && (to.name == "Signin" || to.name == "Signup")) {
    router.push("/");
  } else if (!token && !(to.name == "Signin" || to.name == "Signup")) {
    router.push("/signin");
  } else next();
});
export default router;
