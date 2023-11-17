import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";
import Company from "@/views/Company.vue";

const routes = [
  {
    component: DefaultLayout,
    children: [
      {
        path: "/",
        redirect: "/jobs",
        name: "home",
        component: Home,
        children: [
          {
            path: "/jobs",
            name: "jobs",
            component: Jobs,
          },
          {
            path: "/company",
            name: "company",
            component: Company,
          },
        ],
      },
    ],
  },
  {
    path: "/:catchAll(.*)", // Captura cualquier ruta no coincidente
    redirect: "/jobs",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
