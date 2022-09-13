<template>
  <headeruser />
  <div class=" bg-purple-200 dark:bg-purple-900 flex flex-wrap max-h-screen items-center justify-center">
    <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ dataSuccessMessage }}</div>
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
                <p class="font-semibold mt-8 text-violet-800 dark:text-purple-200">Code : * {{accountshow.code}} *</p>
                <p class="font-semibold mt-8 text-violet-800 dark:text-purple-200">Points : * {{accountshow.points}} *</p>
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
import headeruser from "@/components/headeruser.vue";
export default {
    name: "myprofile",
    props:['dataSuccessMessage'],
    components:{
    Icon,
    Button,
    MenuAccordion,
    headeruser,
    },
    data() {
        return{

        }
        
    },
    methods:{
      ...mapActions('profile',['info']),
      ...mapActions('account',['show']),
     },
    created() {
          this.info()
          // this.indexaccount()
    },
    computed:{
        ...mapGetters('profile', {userinfo: "userinfo",}),     
        ...mapGetters('account',{accountshow: "accountshow"}),
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
