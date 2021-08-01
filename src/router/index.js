import VueRouter from "vue-router";
import Vue from "vue";
import {
  Home,
  Desktop,
  DataScience,
  Web,
  Mobile,
  Projects,
  About,
  Admin,
} from "../views";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { path: "/home" } },
  { path: "/admin-disabled", redirect: { path: "/home" } },
  { name: "Desktop", path: "/desktop", component: Desktop },
  { name: "Home", path: "/home", component: Home },
  { name: "DataScience", path: "/datascience", component: DataScience },
  { name: "Web", path: "/web", component: Web },
  { name: "Mobile", path: "/mobile", component: Mobile },
  { name: "Projects", path: "/projects", component: Projects },
  { name: "About", path: "/about", component: About },
  { name: "Admin", path: "/admin", component: Admin },
];

const router = new VueRouter({
  routes: routes,
});
export default router;
