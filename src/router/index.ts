import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/dynamic-tags-page',
    name: 'DynamicTagsPage',
    component: () => import('../views/DynamicTagsPage.vue')
  },
  {
    path: '/dynamic-input-page',
    name: 'DynamicInputsPage',
    component: () => import('../views/DynamicInputPage.vue')
  },
  {
    path: '/i18n',
    name: 'i18n',
    component: () => import('../views/i18n.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
