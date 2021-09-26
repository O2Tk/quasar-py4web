/* Original
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
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
*/

// https://stackoverflow.com/questions/54654441/authentication-middleware-for-routes-not-working
//
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { meta: { requiresAuth: false },
        path: '',
        component: () => import('pages/Index.vue') 
      }
    ]
    // Add a metadata like this to your private routes
    // Tip: If you have a lot of private routes, you can add
    // meta: { public: true } to public routes and make
    // all other routes private by default.
    // In this case you need to change the logic in beforeEach
    // in index.js
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { meta: { requiresAuth: false},
        path: '',
        component: () => import("pages/PageAuth.vue"),
      }
    ]
  },
  {
    path: "/login-test",
    name: "Login-test",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { meta: { requiresAuth: false},
        path: '',
        component: () => import("pages/Login-test.vue"),
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
