<template>
    <AdminLayout>
      {{this.userroles}}
      <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ successMessage }}</div>
      <div class="flex justify-center m-4 mt-12 max-h-screen container  item-center px-6 mx-auto">
       <div class="w-3/4 md:w-full lg:w-7/12 mx-auto md:mx-0">
         <div class="bg-purple-200
          p-10 flex flex-col w-full shadow-xl rounded-xl">
           <h2 class="text-2xl font-bold text-purple-800 text-left mb-5">
             Charging Points
           </h2>
           <form @submit.prevent="edit" class="w-full">
             <div id="input" class="flex flex-col w-full my-5">
               <label for="password" class="text-purple-500 mb-2"
                 >Code</label
               >
               <input
                 type="text"
                 id="code"
                 name="code"
                 v-model="code"
                 placeholder="Please insert code"
                 class="appearance-none border-2 border-purple-100 rounded-lg px-4 py-3 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
               />
             </div>
             <div id="input" class="flex flex-col w-full my-5">
               <label for="password" class="text-purple-500 mb-2"
                 >Points</label
               >
               <input
                 type="number"
                 id="points"
                 name="points"
                 v-model="points"
                 placeholder="Please insert points"
                 class="appearance-none border-2 border-purple-100 rounded-lg px-4 py-3 
                 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-600 
                 focus:shadow-lg"
               />
             </div>
             <div id="button" class="flex flex-col w-full my-5">
               <button
                 type="submit"
                 class="w-full py-4 bg-violet-600 rounded-lg text-green-100"
               >
                 <div class="flex flex-row items-center justify-center">
                   <div class="font-bold">Charge Points</div>
                 </div>
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
    </AdminLayout>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import { auth } from "@/store/modules/auth"
import AdminLayout from '@/Layouts/AdminLayout.vue';

export default {
   name: "distributor",
   components:{
      AdminLayout
   },
   
   data() {
        return {
            code:"",
            points:"",
            successMessage:""
        }
    },
   methods:{
     ...mapActions('account',['Update','adminUpdate']),
     edit(){
            const account = {
                'code': this.code,
                'points': this.points,
            }
            const index = this.userroles.find(t => t.name === 'Admin');
            if(index !== -1) {
              this.adminUpdate(account)
              .then(response => {
                this.code=""
                this.points=""
                this.successMessage = 'Points Added Successfully!'
                //console.log(response)
              })
              .catch(error => {
                  console.log(error.response)
              })
            }
              else{
                this.Update(account)
                .then(response => {
                  this.code=""
                  this.points=""
                  this.successMessage = 'Points Added Successfully!'
                  //console.log(response)
                })
                .catch(error => {
                    console.log(error.response)
                })
              }
            }      
       },
    
//    created() {
//          this.info()
//    },
   computed:{
      //  ...mapGetters('profile', {userinfo: "userinfo"}),     
       ...mapGetters('auth', {
        userinf: "userinf",
        userroles: "userroles",
      }),     
   }
  }
  
</script>
