<template>
  <header class="bg-purple-200 dark:bg-purple-800 p-2 border-b-2 dark:border-purple-700">
    <div class="wrap-header flex  items-center justify-between flex-wrap x">
      <div class="flex flex-no-shrink items-center">
        <button
          id="theme-toggle"
          type="button"
          class="text-purple-600 mr-5 dark:text-violet-200 h outline-none rounded-lg text-md p-1 pl-8"
        >
          <svg
            id="theme-toggle-light-icon"
            class="hidden w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-dark-icon"
            class="hidden w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div class="mr-8 flex" v-if="this.isUser">
        <router-link to="/Snack/index/user">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                Snack
            </button>
        </router-link>
        <router-link to="/Movie">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                Movie
            </button>
        </router-link>
        <router-link to="/Profile/myprofile">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                My Profile
            </button>
        </router-link>
        <router-link to="/User/mytickets">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                My Tickets
            </button>
        </router-link>

        <router-link to="/User/myorders">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                My Orders
            </button>
        </router-link>
        <router-link to="/logout">
          <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
            Logout
            </button>
        </router-link>
      </div>
      <div class="mr-8 flex" v-if="this.isAdmin || this.isReception || this.isVendor || this.isDistributer">
        <router-link to="/" >
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                Back
            </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
  import { Icon } from "@iconify/vue";
  import Button from '@/views/components/button.vue';
  import { mapGetters} from 'vuex'
  import MenuAccordion from '@/components/MenuAccordion.vue';
  export default {
      name: "myprofile",
      props:['dataSuccessMessage'],
      components:{
      Icon,
      Button,
      MenuAccordion,
      },
      computed:mapGetters('auth', ["isVendor","isReception", "isAdmin","isDistributer","isUser"]),
      mounted() {
        var themeToggleDarkIcon = document.getElementById(
          "theme-toggle-dark-icon"
        );
        var themeToggleLightIcon = document.getElementById(
          "theme-toggle-light-icon"
        );
        // Change the icons inside the button based on previous settings
        if (
          localStorage.getItem("color-theme") === "dark" ||
          !("color-theme" in localStorage)
        ) {
          document.documentElement.classList.add("dark");
          themeToggleLightIcon.classList.remove("hidden");
        } else {
          document.documentElement.classList.remove("dark");
          themeToggleDarkIcon.classList.remove("hidden");
        }
        var themeToggleBtn = document.getElementById("theme-toggle");
  
        themeToggleBtn.addEventListener("click", function () {
          // toggle icons inside button
          themeToggleDarkIcon.classList.toggle("hidden");
          themeToggleLightIcon.classList.toggle("hidden");
  
          // if set via local storage previously
          if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
              document.documentElement.classList.add("dark");
              localStorage.setItem("color-theme", "dark");
            } else {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("color-theme", "light");
            }
  
            // if NOT set via local storage previously
          } else {
            if (document.documentElement.classList.contains("dark")) {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("color-theme", "light");
            } else {
              document.documentElement.classList.add("dark");
              localStorage.setItem("color-theme", "dark");
            }
          }
        });
      },
  }
</script>
    