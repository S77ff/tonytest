import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
      path: "/toggles",
      name: "All Toggles",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/Toggles.vue")
    },
		{
      path: "/permission",
      name: "Permission",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/PermissionToggles.vue")
    },
		{
      path: "/release",
      name: "Release Toggles",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/ReleaseToggles.vue")
    },
		{
      path: "/permissionAdd",
      name: "Permission Add",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/PermissionAdd.vue")
    },
		{
      path: "/permissionPlusToggles",
      name: "Permission+",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/PermissionPlusToggles.vue")
    },
		{
      path: "/platformAdd",
      name: "Platform Add",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/PlatformAdd.vue")
    },
		{
      path: "/users",
      name: "Users",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/Users.vue")
    },
		{
      path: "/usersAdd2",
      name: "User Add2",
      meta: {
        icon: "assignment_turned_in",
        label: "Toggles",
        parent: null,
        slug: "toggles"
      },
      component: () => import("../views/UsersAdd2.vue")
    }
	],
})

export default router