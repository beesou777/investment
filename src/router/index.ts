import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import type {ImportMeta} from "../types/type";
const routes = [
  {
    path: "/",
    name: "home",
    meta:{
      title: "Home",
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    meta:{
      title: "About Us",
    },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    meta:{
      title: "Blogs",
    },
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/blogs/:id",
    name: "blog-detail",
    component: () => import("../views/BlogDetailView.vue"),
    props: true,
  },
  {
    path: "/service",
    name: "service",
    meta:{
      title: "Services",
    },
    component: () => import("../views/ServiceView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    meta:{
      title: "Contact Us",
    },
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    meta:{
      title: "FAQ",
    },
    component: () => import("../views/FaqView.vue"),
  },
  {
    path: "/terms-and-conditions",
    name: "terms-and-conditions",
    meta:{
      title: "Terms and Conditions",
    },
    component: () => import("../views/TermAndCondition.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    meta:{
      title: "Privacy Policy",
    },
    component: () => import("../views/PrivacyPolicy.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta:{
      title: "Page Not Found",
    },
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/strategy",
    name: "strategy",
    meta:{
      title: "Strategy",
    },
    component: () => import("../views/Strategy.vue"),
  },
]

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes: routes,
  scrollBehavior(from, to, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
    
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta && to.meta.title ? to.meta.title + ' | Finance Investment' : "Finance Investment";
  next();
});

export default router;
