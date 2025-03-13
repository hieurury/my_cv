import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import MainLayout from "./layouts/MainLayout.vue";

const routes = [
    {path: "/", component: MainLayout, 
        children: [
            {path: "", component: Home},
        ]
    },
    {path: "/about", component: MainLayout, 
        children: [
            {path: "", component: About},
        ]
    },
    {path: "/contact", component: MainLayout, 
        children: [
            {path: "", component: Contact},
        ]
    },
]

export default createRouter({
    routes,
    history: createWebHistory(),
})