import { createRouter, createWebHistory } from "vue-router";
// Default Pages
import LandingPage from "../components/Marketing/LandingPage.vue";
// import about from "../components/Marketing/about.vue";
import login from "../components/Auth/login.vue";
import logout from "../components/Auth/logout.vue";
import Register from "../components/Auth/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import timeindex from "../views/Admin/Time/index.vue";
import timeedit from "../views/Admin/Time/edit.vue";
import hallindex from "../views/Admin/Hall/index-hall.vue"
import movieindex from "../views/Admin/Movie/index.vue";
import createmovie from "../views/Admin/Movie/create-movie.vue";
import editmovie from "../views/Admin/Movie/edit-movie.vue";
import showmovie from "../views/Admin/Movie/show-movie.vue";
import rolemanager from "../views/Admin/RolePer/rolemanager.vue";
import price from "../views/Admin/Price/index-price.vue";
import snackindex from "../views/Admin/Snack/index-snack.vue";
import snackcreate from "../views/Admin/Snack/create-snack.vue";
import snackedit from "../views/Admin/Snack/edit-snack.vue";
import snackshow from "../views/Admin/Snack/show-snack.vue";
import indexuser from "../views/Admin/User-Managment/index-user.vue";
import createuser from "../views/Admin/User-Managment/create-user.vue";
import gr_role from "../views/Admin/User-Managment/gr_role.vue";
import myprofile from "../views/Admin/Profile/myprofile.vue";

// Component Pages
import Valert from "../views/components/alert.vue";
import Vaccrodion from "../views/components/accordion.vue";
import Vbadges from "../views/components/badges.vue";
import Vbreadcumb from "../views/components/breadcumbs.vue";
import Vbutton from "../views/components/button.vue";
import Vcard from "../views/components/card.vue";
var appname = "-Cinema City";
  

const routes = [
  // Routes
  {
    path: '/',
    name: 'home',
    component: LandingPage,
    meta:{
      title:"home" + appname,
      requiresVisitor: true,

    },
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { 
      title: "Dashboard " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Time/index",
    name: "timeindex",
    component: timeindex,
    meta: { 
      title: "timeindex " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Time/edit/:timeid",
    name: "timeedit",
    component: timeedit,
    props: true,
    meta: { 
      title: "timeedit " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Hall/index",
    name: "hallindex",
    component: hallindex,
    meta: { 
      title: "hallindex " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Movie/index",
    name: "movieindex",
    component: movieindex,
    meta: { 
      title: "movieindex " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Movie/create",
    name: "createmovie",
    component: createmovie,
    meta: { 
      title: "createmovie " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Movie/edit/:movieid",
    name: "editmovie",
    component: editmovie,
    props: true,
    meta: { 
      title: "editmovie " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Movie/show/:movieid",
    name: "showmovie",
    component: showmovie,
    props: true,
    meta: { 
      title: "showmovie " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Role/index",
    name: "rolemanager",
    component: rolemanager,
    meta: { 
      title: "rolemanager " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Price/index",
    name: "price",
    component: price,
    meta: { 
      title: "price " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Snack/index",
    name: "indexsnack",
    component: snackindex,
    meta: { 
      title: "snackindex " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Snack/create",
    name: "createsnack",
    component: snackcreate,
    meta: { 
      title: "snackcreate " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Snack/edit/:snackid",
    name: "snackedit",
    component: snackedit,
    props: true,
    meta: { 
      title: "snackedit " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Snack/show/:snackid",
    name: "snackshow",
    component: snackshow,
    props: true,
    meta: { 
      title: "snackshow " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/User/index",
    name: "indexuser",
    component: indexuser,
    meta: { 
      title: "indexuser " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/User/create",
    name: "createuser",
    component: createuser,
    meta: { 
      title: "createuser " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/User/edit/:userid",
    name: "gr_role",
    component: gr_role,
    props: true,
    meta: { 
      title: "gr_role " + appname,
      requiresAuth: true,
    },
  },
  
  {
    path: '/Profile/myprofile',
    name: 'myprofile',
    component: myprofile,
    meta : { 
      title:  appname,
      requiresAuth: true,
     }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresVisitor: true,
      title:"login" + appname
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true,
      title:"Register "+ appname
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout,
    meta : { 
      title:  appname,
      requiresAuth: true,
     }
  },
  // Components based Routes
  {
    path: "/component/alert",
    name: "Valert",
    component: Valert,
    meta: { title: "Alert" + appname },
  },
  {
    path: "/component/accordion",
    name: "Vaccordion",
    component: Vaccrodion,
    meta: { title: "Accordion" + appname },
  },
  {
    path: "/component/badge",
    name: "Vbadge",
    component: Vbadges,
    meta: { title: "Badge" + appname },
  },
  {
    path: "/component/breadcumb",
    name: "Vbreadcumb",
    component: Vbreadcumb,
    meta: { title: "Breadcumb" + appname },
  },
  {
    path: "/component/button",
    name: "Vbutton",
    component: Vbutton,
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/card",
    name: "Vcard",
    component: Vcard,
    meta: { title: "Card" + appname },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});
export default router;
