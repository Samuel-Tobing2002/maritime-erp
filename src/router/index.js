import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import FleetOverview from "../views/FleetOverview.vue";
import CrewOverview from "../views/CrewOverview.vue";
import AddNewVessel from "@/views/addvessel/AddNewVessel.vue";
import MainLayout from "../layouts/MainLayout.vue";
import VesselDetail from "@/views/vessels.vue";


const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
        {
            path: "",
            name: "Dashboard",
            component: Dashboard,
            meta: { title: "Dashboard" },
        },
        {
            path: "fleetoverview",
            name: "FleetOverview",
            component: FleetOverview,
            meta: { title: "Fleet Overview" },
        },
        {
            path: "crewoverview",
            name: "CrewOverview",
            component: CrewOverview,
            meta: { title: "Crew Overview" },
        },
        {
            path: "add-vessel",
            name: "AddVessel",
            component: AddNewVessel,
            meta: { title: "Add New Vessel" },
        },
        {
        path: "vessel/:id",
        name: "VesselDetail",
        component: VesselDetail,
        },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;