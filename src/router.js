import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from "./views/Home.vue";
import Discover from './views/Discover.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

const history = createWebHistory();
const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/discover",
        name: "discover",
        component: Discover
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
];
const router = createRouter({
    history,
    routes
});
export default router;