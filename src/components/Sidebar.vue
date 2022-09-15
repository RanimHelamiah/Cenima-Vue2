<script>
  import { Icon } from "@iconify/vue";
  import { mapGetters } from "vuex";
  import MenuAccordion from "./MenuAccordion.vue";
  export default {
    name:'sidebar',
    components: {
      Icon,
      MenuAccordion,
    },
    methods: {
      sidebarToggle: function () {
        document.querySelector(".flex-sidebar").classList.add("hidden");
      },
    },
    computed:mapGetters('auth', ["isVendor","isReception", "isAdmin","isDistributer"]),

  }
</script>

<template>
  <!-- sidebar -->
  <nav class="sidebar bg-gray-100 dark:bg-purple-800 min-h-screen">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link to="/" exact>
        <h2
          class="text-2xl font-normal text-purple-800 dark:text-gray-300"
          translate="no"
        >
          Cinema City<span class="text-primary">.</span>
          <span
            class="bg-purple-700 absolute mt-3 dark:block hidden rounded-md py-1 px-1 text-xs text-gray-200"
            >Dark mode</span
          >
        </h2>
      </router-link>
      <button class="lg:hidden block float-right -mt-7" @click="sidebarToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="25px"
          height="25px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
          />
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4 dark:bg-purple-800">
      <p class="font-medium text-purple-400 dark:text-gray-400">Menu</p>
      <div class="wrap-item mt-5 dark:text-gray-300">
        <div class="item" >
          <router-link
            to="/Dashboard"
            exact
            class="w-full flex text-left rounded-md box-border p-3 hover:bg-purple-100 dark:hover:bg-violet-500"
          >
            <span class="mr-3 text-xl"><Icon class="mt-2" icon="bxs:dashboard" /></span>
            <span class="w-full text-purple-200"> Dashboard </span>
          </router-link>
        </div>
        <div class="item mt-3">
          <router-link to="/Profile/myprofile">
            <button
              class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-2xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:person-circle" /></span>
              <span class="w-full"> My Profile </span>
              <span class="box-border mt-1 text-gray-500"> </span>
            </button>
          </router-link>
        </div>
        <div class="item mt-3" v-if="this.isAdmin">
          <router-link to="/Role/index">
            <button
              class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-2xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:person" /></span>
              <span class="w-full"> Role</span>
              <span class="box-border mt-1 text-gray-500"> </span>
            </button>
          </router-link>
       </div>
        <div class="item mt-3" v-if="this.isAdmin || this.isReception">
          <menu-accordion>
            <template v-slot:icon>
              <Icon class="dark:text-gray-100 mt-2" icon="bi:film" />
            </template>
            <template v-slot:title><p class="text-purple-800 dark:text-gray-100 "> Movies </p> </template>
            <template v-slot:content>
              <router-link
                to="/Movie/index"
                class="w-full text-left block rounded-md p-3 hover:bg-purple-200 dark:hover:bg-violet-500
              text-purple-700 dark:text-gray-200">
                All Movies
              </router-link>
              <router-link
                to="/Movie/indexusermovie"
                class="w-full text-left block rounded-md p-3 hover:bg-purple-200 dark:hover:bg-violet-500 text-purple-700 dark:text-gray-200"
              >
                Now Showing 
              </router-link>
              <router-link
                to="/component/"
                class="w-full text-left block rounded-md p-3 hover:bg-purple-200 dark:hover:bg-violet-500 text-purple-700 dark:text-gray-200"
              >
                Up Coming 
              </router-link>
              
            </template>
          </menu-accordion>
        </div>
        <div class="item mt-3" v-if="this.isAdmin">
        <router-link to="/Time/index">
          <button
            class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:clock" /></span>
            <span class="w-full"> Time </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      <div class="item mt-3" v-if="this.isAdmin || this.isDistributer">
        <router-link to="/Account/edit">
          <button
            class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl text-gray-900 dark:text-gray-100"><Icon  icon="bi:currency-dollar" class="mt-2"/></span>
            <span class="w-full"> Distributor </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      <div class="item mt-3" v-if="this.isAdmin">
        <router-link to="/Hall/index"  >
          <button
            class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:bank" /></span>
            <span class="w-full"> Hall </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      
      </div>
      <div v-if="this.isAdmin">
      <p class="font-medium text-purple-400 mt-4 dark:text-gray-400">
        Users
      </p>
      <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:people" /></span>
            <span class="w-full"> Employee </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      <div class="item mt-3">
        <router-link :to="{name : 'indexuser'}">
          <button
            class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:people" /></span>
            <span class="w-full"> End User </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>

      </div>
      <div v-if="this.isVendor">
        <router-link :to="{name: 'snackindexuser'}" >
          <button class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3">
            <span class="mr-3 text-2xl text-gray-900 dark:text-gray-100" ><Icon class="mt-2" icon="bi:cup-straw" /></span>
            <span class="w-full"> Snack User </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
        <div class="item mt-3" >
          <router-link :to="{name : 'indexsnack'}">
            <button
              class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-2xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:cup-straw" /></span>
              <span class="w-full"> Snacks </span>
              <span class="box-border mt-1 text-gray-500"> </span>
            </button>
          </router-link>
        </div>
        <div class="item mt-3">
          <router-link :to="{name : 'indexorder'}">
            <button
              class="text-purple-800 dark:text-gray-100 bg-transparent hover:bg-purple-100 dark:hover:bg-violet-500 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-2xl text-gray-900 dark:text-gray-100"><Icon class="mt-2" icon="bi:cart-plus-fill" /></span>
              <span class="w-full"> Orders </span>
              <span class="box-border mt-1 text-gray-500"> </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<!-- <style>
  .active {
  }
</style> -->

