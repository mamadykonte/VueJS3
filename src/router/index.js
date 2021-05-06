import { createWebHistory, createRouter } from "vue-router";
import Movies from "@/views/Movies.vue";
import Movie from "@/views/Movie.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Movies,
  },
  {
    name: "movie",
    path: "/movie/:id",
    component: Movie,
    props: true,
  },
  {
    name: "NotFound",
    path: '/:pathMatch(.*)',
    component: NotFound,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
