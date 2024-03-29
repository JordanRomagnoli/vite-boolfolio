import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import Project from './pages/Project.vue';
import Contact from "./pages/Contact.vue";
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: Project,
        },
        {
            path: '/contact',
            name: 'contact-us',
            component: Contact,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage,
        },
    ]
});

export { router };