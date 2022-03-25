import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Character from "./pages/character.vue";
import NotFound from "./pages/404.vue";
import Sheet from "./pages/sheet.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/character",
    name: "Character",
    component: Character,
  },
    {
      path: "/sheet",
      name: "Character Sheet",
      component: Sheet,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;