import {createRouter, createWebHistory} from "vue-router";

import Main from "@/views/Main.vue";
import Imprint from "@/views/Imprint.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/imprint',
            name: 'Imprint',
            component: Imprint
        }
    ]
});

export default router;