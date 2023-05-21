import VueRouter from "vue-router";
import Vue from "vue";
import { Home, Projects, About, Email, PageNotFound } from "../views";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { path: "/home" } },
  { name: "Home", path: "/home", component: Home },
  { name: "Projects", path: "/projects", component: Projects },
  { name: "About", path: "/about", component: About },
  { name: "Email", path: "/email/:category", component: Email, props: true },
  { name: "PageNotFound", path: "*", component: PageNotFound },
];

const router = new VueRouter({
  routes: routes,
});
export default router;
