import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Character from "./pages/character.vue";
import NotFound from "./pages/404.vue";
import Stats from "./pages/stats.vue";
import Misc from "./pages/misc.vue";
import Class from "./pages/class.vue";
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
      path: "/stats",
      name: "Stats",
      component: Stats,
    },
    {
      path: "/class",
      name: "Class",
      component: Class,
    },
    {
      path: "/misc",
      name: "Miscellaneous",
      component: Misc,
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