import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from "./views/Home.vue";
import Discover from './views/Discover.vue';

const history = createWebHistory();
const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/discover",
        component: Discover
    }
];
const router = createRouter({
    history,
    routes
});
export default router;