import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('pages/DashboardPage.vue'),
      },
      {
        path: '/profile',
        component: () => import('pages/ProfilePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
