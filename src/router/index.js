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
import hallindex from "../views/Admin/Hall/index-hall.vue";
import movieindex from "../views/Admin/Movie/index.vue";
import indexusermovie from "../views/Admin/Movie/indexuser.vue";
import createmovie from "../views/Admin/Movie/create-movie.vue";
import editmovie from "../views/Admin/Movie/edit-movie.vue";
import showmovie from "../views/Admin/Movie/show-movie.vue";
import rolemanager from "../views/Admin/RolePer/rolemanager.vue";
import price from "../views/Admin/Price/index-price.vue";
import snackindex from "../views/Admin/Snack/index-snack.vue";
import snackindexuser from "../views/Admin/Snack/snack-user.vue";
import snackcreate from "../views/Admin/Snack/create-snack.vue";
import snackedit from "../views/Admin/Snack/edit-snack.vue";
import snackshow from "../views/Admin/Snack/show-snack.vue";
import indexuser from "../views/Admin/User-Managment/index-user.vue";
import createuser from "../views/Admin/User-Managment/create-user.vue";
import gr_role from "../views/Admin/User-Managment/gr_role.vue";
import myprofile from "../views/Admin/Profile/myprofile.vue";
import editinformaition from "../views/Admin/Profile/editinformaition.vue";
import changepassword from "../views/Admin/Profile/changepassword.vue";
import distributor from "../views/Admin/distributor.vue";
import indexorder from "../views/Order/orderd-order.vue";
import approvedorder from "../views/Order/approved-order.vue";
import stepone from "../views/Ticket/stepone.vue";
import steptwo from "../views/Ticket/steptwo.vue";
import movie from "../views/User/movie.vue";
import mytickets from "../views/User/mytickets.vue";
import myorders from "../views/User/myorders.vue";

// Component Pages
import Vaccrodion from "../views/components/accordion.vue";
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
    path: "/Movie/indexusermovie",
    name: "indexusermovie",
    component: indexusermovie,
    meta: { 
      title: "indexusermovie" + appname,
      requiresVisitor: true,
      requiresAuth: true,

    },
  },
  {
    path: "/Movie",
    name: "movie",
    component: movie,
    meta: { 
      title: "movie" + appname,
      requiresVisitor: true,
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
    path: "/Account/edit",
    name: "distributor",
    component: distributor,
    meta: { 
      title: "distributor " + appname,
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
    path: "/Snack/index/user",
    name: "snackindexuser",
    component: snackindexuser,
    meta: { 
      title: "snackindexuser " + appname,
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
    path: "/User/mytickets",
    name: "mytickets",
    component: mytickets,
    meta: { 
      title: "mytickets " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/User/myorders",
    name: "myorders",
    component: myorders,
    meta: { 
      title: "myorders " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Order/orderd",
    name: "indexorder",
    component: indexorder,
    meta: { 
      title: "indexorder " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Order/approved",
    name: "approvedorder",
    component: approvedorder,
    meta: { 
      title: "approvedorder " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/User/index",
    name: "indexuser",
    component: indexuser,
    meta: { 
      title: "indexuser " + appname,
      requiresAuth: false,
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
    props: true,
    meta : { 
      title:  appname,
      requiresAuth: true,
     }
  },
  {
    path: '/Profile/editinformaition',
    name: 'editinformaition',
    component: editinformaition,
    meta : { 
      title:  appname,
      requiresAuth: true,
     }
  }, 
  {
    path: '/Profile/changepassword',
    name: 'changepassword',
    component: changepassword,
    meta : { 
      title:  appname,
      requiresAuth: true,
     }
  },
  {
    path: "/Ticket/stepone/:movieid",
    name: "stepone",
    component: stepone,
    props: true,
    meta: { 
      title: "stepone " + appname,
      requiresAuth: true,
    },
  },
  {
    path: "/Ticket/steptwo/:movieid",
    name: "steptwo",
    component: steptwo,
    props: true,
    meta: { 
      title: "steptwo " + appname,
      requiresAuth: true,
    },
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
    path: "/component/accordion",
    name: "Vaccordion",
    component: Vaccrodion,
    meta: { title: "Accordion" + appname },
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
