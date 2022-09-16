<template>
  <headeruser />
  <div class="mt-4 rounded-lgbg-purple-200 dark:bg-purple-900 flex flex-wrap max-h-screen items-center justify-center">
    <div class="container min-h-screen/2 min-w-xl bg-purple-100 rounded dark:bg-purple-800 shadow-lg transform duration-200 easy-in-out mt-10 m-12">
      <div class="h-2/4 sm:h-64 overflow-hidden bg-violet-700 dark:bg-violet-300">
          
      </div>  
      <div class=" grid grid-cols-3 px-5 -mt-12 mb-5 rounded-lg">
        <div class="mb-12">
          <span clspanss="block h-32 w-32 ">
              <img 
              :src="`http://127.0.0.1:8000/${userinfo.id_img}`" 
              class="ml-20 mx-auto object-cover rounded-full bg-purple-200 p-1" 
              style="width:24rem;height:24rem;"/>
          </span>
        </div>
        <div class=" mb-8 h-80 mt-20" >
          <h2 class="uppercase text-3xl font-bold text-violet-800 dark:text-purple-200">
              {{userinfo.name}}
          </h2>
          <div class="justify-center text-sm mr-40  py-2 cursor-pointer bg-purple-100 text-purple-900 mt-8 rounded-lg 
          dark:text-purple-300 dark:bg-purple-800 dark:text-purple-300">
            {{userinfo.email}}
          </div>
          <p class=" text-purple-500 mt-4 dark:text-purple-400">
              Phone-number : {{userinfo.phone}}
          </p>
          <div>
            <router-link to="/Profile/editinformaition">
              <button class="p-1 rounded-md hover:bg-purple-600 bg-purple-500 dark:bg-" 
                      style="width:250px; margin-top:90px; padding:10px; color:whitesmoke; margin-right:80px;">
                  Edit Information
              </button>
            </router-link>
          </div>
        </div>
        <div class="mb-12 h-80 mt-20  pr-20">
          <h2 class="text-3xl font-bold text-violet-800 dark:text-purple-200">
            Account Info 
          </h2>
          <p class="font-semibold mt-8 text-violet-800 dark:text-purple-200">Code : * {{myaccount.code}} *</p>
          <p class="font-semibold mt-8 text-violet-800 dark:text-purple-200">Points :* {{myaccount.points}} *</p>
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
  import headeruser from "@/components/headeruser.vue";
  export default {
      name: "myprofile",
      props:['dataSuccessMessage'],
      components:{
        Icon,
        Button,
        headeruser,
      },
      methods:{
        ...mapActions('profile',['info']),
      },
      created() {
            this.info()
      },
      computed:{
          ...mapGetters('profile', {userinfo: "userinfo",myaccount:"myaccount"}),     
      },
  }
</script>
