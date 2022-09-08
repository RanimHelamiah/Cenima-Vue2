<template>
    <AdminLayout>
      <div class="overflow-x-auto" >
         <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">
            {{ successMessage }}
         </div>
         <div class="flex justify-end bg-gray-100 dark:bg-purple-900 m-4 lg:flex  md:flex ">
            <router-link to="/Snack/create">
                <button name="new"  class="bg-purple-200 dark:bg-violet-900 m-4 mr-8 text-3xl text-purple-900 dark:text-purple-200  
                  font-semibold p-3 border-2 border-purple-900 dark:border-purple-200 rounded-lg 
                  hover:text-purple-400 outline-none exact ">Add New Snack</button>
            </router-link>
          </div>
          <div class="min-w-screen min-h-screen bg-gray-100 flex m-4 justify-center bg-gray-100 
          dark:bg-purple-900 overflow-hidden">
              <div class="w-full lg:w-5/6">
                  <div class="bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6">
                      <table class="min-w-max w-full table-auto rounded-lg" >
                          <thead>
                              <tr class="bg-violet-900 dark:bg-violet-300  uppercase text-md leading-normal text-purple-200 dark:text-purple-900">
                                  <th class="py-3 px-6 text-left">Name</th>
                                  <th class="py-3 px-6 text-left">Price</th>
                                  <th class="py-3 px-6 text-center">Description</th>
                                  <th class="py-3 px-6 text-center">Actions</th>
                              </tr>
                          </thead>
                          <tbody class="text-purple-900 dark:text-gray-200 text-md font-light" 
                            :key="snack.id" v-for="snack in allsnacks.data" >
                              <tr class="border-b border-gray-200 hover:bg-purple-500">
                                  <td class="py-3 px-6 text-left whitespace-nowrap">
                                      <div class="flex items-center">
                                          <div class="mr-2" >
                                            {{snack.name}}
                                          </div>
                                      </div>
                                  </td>
                                  <td class="py-3 px-6 text-left">
                                      <div class="flex items-center">
                                          <div class="mr-2">
                                             {{snack.price}}
                                          </div>
                                      </div>
                                  </td>
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex items-center justify-center">
                                          {{snack.description}}
                                      </div>
                                  </td>
                                 
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex item-center justify-center">
                                          <router-link :to="{ name: 'snackshow', params:{snackid: snack.id}}">
                                          <button class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                          </button>
                                          </router-link>
                                          <router-link :to="{ name: 'snackedit', params:{snackid: snack.id}}">
                                           <button  class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110" >
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                              </svg>
                                           </button>
                                          </router-link>
                                          <button :key="snack.id"
                                              v-if="snack.active==1"
                                              @click="deactivated(snack)"  class="text-xs text-white bg-sky-600 rounded-full w-6 mr-2 transform
                                               hover:text-purple-300 hover:scale-110">
                                               A
                                               
                                          </button>
                                           <button 
                                              v-else-if="snack.active==0"
                                              @click="activated(snack)"  class="text-xs text-white bg-orange-600 rounded-full w-6 mr-2 transform
                                               hover:text-purple-300 hover:scale-110">
                                               DA
                                          </button>
                                         
                                                 
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                    <pagination :data="allsnacks"  @pagination-change-page="getsnacks" 
                      class="text-purple-600 dark:text-purple-200 flex justify-center mt-4 pb-4 pl-8 pr-8 ">
                        <template #prev-nav>
                            <span class="pr-8">&lt; Previous</span>
                        </template>
                        <template #next-nav>
                            <span class="pl-8">Next &gt;</span>
                        </template>
                    </pagination>
                  </div>
              </div>
          </div>
      </div>
   </AdminLayout>
  </template>
  
  <script>
    // @ is an alias to /src
    import AdminLayout from '@/Layouts/AdminLayout'
    import LaravelVuePagination from "laravel-vue-pagination"
    import axios from 'axios'
    import { mapGetters,mapActions } from 'vuex'
    export default {
      name: "snackindex",
      data(){
        return{
        allsnacks:{},
        successMessage : "",
        }
      },
      components: {
      AdminLayout,
     'Pagination': LaravelVuePagination,
      },
      mounted() {
            // Fetch initial results
            this.getsnacks();
      }, 
     methods:{
      ...mapActions('snack',['index','deactivate','activate']),
     getsnacks(page = 1) {
        // console.log('kdkk')
        this.index()
            axios.get('/Snack?page=' + page)
                .then(response => {
                    this.allsnacks = response.data.data;
                });
        },
      deactivated(snack){
          //console.log(id)
        this.deactivate(snack)
          .then(response => {
            this.$router.push({ name: 'indexsnack' })
            this.successMessage="Snack Dectivated Successfully!"
          })
          .catch(error => {
              console.log(error)
  
          })
      },
      activated(snack){
          //console.log(snack)
        this.activate(snack)
          .then(response => {
            this.$router.push({ name: 'indexsnack' })
            this.successMessage="Snack Activated Successfully!"
          })
          .catch(error => {
              console.log(error)
  
          })
      },
      
     },
      created() {
          this.index()
  
      },
      
      computed:mapGetters('snack', {allsnacks: "allsnacks"}),
     
      
  }
    </script>