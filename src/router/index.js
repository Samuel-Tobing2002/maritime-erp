import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Konten from "../views/Konten.vue";
import Konten2 from "../views/Konten2.vue";
import MainLayout from "../layouts/MainLayout.vue";

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "konten",
                name: "Konten",
                component: Konten,
            },
            {
                path: "konten2",
                name: "Konten2",
                component: Konten2,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;