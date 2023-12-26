const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'indexpage', component: () => import('pages/Index.vue') },
      { path: 'table', name: 'tablepage', component: () => import('pages/Table.vue') },
      { path: 'card', name: 'cardpage', component: () => import('pages/Card.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
