<template>
  <header class="bg-purple-200 dark:bg-purple-800 p-2 border-b-2 dark:border-purple-700">
    <div class="wrap-header flex items-center justify-between flex-wrap x">
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
      <div class="mr-8 flex">
        <router-link to="/">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                My Tickets
            </button>
        </router-link>
        <router-link to="/">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                My Orders
            </button>
        </router-link>
        <router-link to="/">
            <button class="text-purple-900 dark:text-purple-100 rounded-lg p-1 pl-4 pr-4 
            hover:bg-violet-400 dark:hover:bg-violet-400" >
                Back
            </button>
        </router-link>
      </div>
    </div>
  </header>
  <div class=" bg-purple-200 dark:bg-purple-900 flex flex-wrap items-center justify-center">
    <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ successMessage }}</div>
        <div class="container max-h-screen min-w-xl bg-purple-100 rounded dark:bg-purple-800 shadow-lg transform duration-200 easy-in-out mt-10 m-12">
            <div class="h-2/4 sm:h-64 overflow-hidden bg-violet-700 dark:bg-violet-300">
                <!-- <img class="w-full h-full rounded-t"
                    src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Photo by aldi sigun on Unsplash" /> -->
            </div>
            <div class=" grid grid-cols-3 px-5 -mt-12 mb-5 rounded-lg">
              <div class="mb-12">
              <span clspanss="block h-32 w-32 ">
                  <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  class="ml-20 mx-auto object-cover rounded-full bg-purple-200 p-1" 
                  style="width:24rem;height:24rem;"/>
              </span>
              </div>
              <div class=" mb-12 h-80 mt-20" >
                <h2 class="uppercase text-3xl font-bold text-violet-800 dark:text-purple-200">
                    {{userinfo.name}}
                </h2>
                <p class="text-sm text-purple-400 mt-2 dark:text-purple-400">
                    Phone-number : {{userinfo.phone}}
                </p><br/>
                <p class="mt-2 text-purple-600 dark:text-purple-300" 
                :key="role.id" v-for="role in userinfo.roles">
                   Roles : {{role.name}}
                </p>
                <div class="justify-center mr-40  py-2 cursor-pointer bg-purple-100 text-purple-900 mt-8 rounded-lg 
                dark:text-purple-300 dark:bg-purple-800 dark:text-purple-300">
                  {{userinfo.email}}
                </div>
                <div>
                  <router-link to="/Profile/editinformaition">
                    <button class="p-1 rounded-md hover:bg-purple-600 bg-purple-500 dark:bg-" 
                            style="width:250px; margin-top:30px; padding:10px; color:whitesmoke; margin-right:80px;">
                        Edit Information
                    </button>
                  </router-link>
                </div>
              </div>
              <div class="mb-12 h-80 mt-20  pr-20">
                <h2 class="text-3xl font-bold text-violet-800 dark:text-purple-200">
                  Account Info 
                </h2>
                <p class="font-semibold mt-8 text-violet-800 dark:text-purple-200">Code : * {{userinfo.account.code}} *</p>
                <p class="font-semibold mt-8 text-violet-800 dark:text-purple-200">Points : * {{userinfo.account.points}} *</p>
                <div class="mt-12">
                  <router-link to="/Profile/changepassword">
                    <button class="p-1  rounded-md hover:bg-rose-500 bg-rose-700 " 
                            style="width:280px; margin-top:30px; padding:10px; color:whitesmoke; margin-right:80px;">
                        Change Password
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
            </div>
  </div>
</template>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
    }
  </style>


<script>
import { Icon } from "@iconify/vue";
import Button from '@/views/components/button.vue';
import { mapGetters,mapActions } from 'vuex'
import MenuAccordion from '@/components/MenuAccordion.vue';
export default {
    name: "myprofile",
    components:{
    Icon,
    Button,
    MenuAccordion,
    },
    data() {
        return{

        }
        
    },
    methods:{
      ...mapActions('profile',['info']),
      ...mapActions('role',['indexrole']),
     },
    created() {
          this.info()
          this.indexrole()
    },
    computed:{
        ...mapGetters('profile', {userinfo: "userinfo",}),     
        ...mapGetters('role',{allroles: "allroles"}),
    },
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
