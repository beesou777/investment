import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/blogs/:id",
    name: "blog-detail",
    component: () => import("../views/BlogDetailView.vue"),
    props: true,
  },
  {
    path: "/strategy",
    name: "strategy",
    component: () => import("../views/Strategy.vue"),
  },
  {
    path: "/service",
    name: "service",
    component: () => import("../views/ServiceView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/FaqView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(from, to, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
    
  }
});

export default router;
