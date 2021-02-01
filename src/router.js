import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from "./components/HelloWorld.vue";

const history = createWebHistory();
const routes = [{
        path: "/",
        comp: Home
    },
];
const router = createRouter({
    history,
    routes
});
export default router;