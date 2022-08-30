<template>
    <AdminLayout>
      <div class="overflow-x-auto" >
        <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">
            {{ successMessage }}
         </div>
         <div class="flex justify-end bg-gray-100 dark:bg-purple-900 m-4 lg:flex  md:flex ">
            <router-link to="/User/create">
                <button name="new"  class="bg-purple-200 dark:bg-violet-900 m-4 mr-8 text-3xl text-purple-900 dark:text-purple-200  
                  font-semibold p-3 border-2 border-purple-900 dark:border-purple-200 rounded-lg 
                  hover:text-purple-400 outline-none exact ">Add New Emploey</button>
            </router-link>
          </div>
          <div class="flex m-4 justify-center lg:flex md:flex">
          </div>
          <div class="min-w-screen min-h-screen bg-gray-100 flex m-4 justify-center bg-gray-100 
          dark:bg-purple-900 overflow-hidden">
              <div class="w-full lg:w-5/6">
                  <div class="bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6">
                      <table class="min-w-max w-full table-auto rounded-lg" >
                          <thead>
                              <tr class="bg-violet-900 dark:bg-violet-300  uppercase text-md leading-normal text-purple-200 dark:text-purple-900">
                                  <th class="py-3 px-6 text-left">Name</th>
                                  <th class="py-3 px-6 text-left">phone</th>
                                  <th class="py-3 px-6 text-center">role</th>
                                  <th class="py-3 px-6 text-center">Actions</th>
                              </tr>
                          </thead>
                          <tbody class="text-purple-900 dark:text-gray-200 text-md font-light" 
                            :key="user.id" v-for="user in allusers" >
                              <tr class="border-b border-gray-200 hover:bg-purple-500">
                                  <td class="py-3 px-6 text-left whitespace-nowrap">
                                      <div class="flex items-center">
                                            {{user.name}}
                                      </div>
                                  </td>
                                  <td class="py-3 px-6 text-left">
                                      <div class="flex items-center">
                                             {{user.phone}}
                                      </div>
                                  </td>
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex items-center justify-center">
                                          <!-- {{user.roles}} -->
                                      </div>
                                  </td>
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex item-center justify-center">
                                          <button :key="user.id"
                                              v-if="user.active==1"
                                              @click="deactivated(user)"  class="text-xs text-white bg-sky-600 rounded-full w-6 mr-2 transform
                                               hover:text-purple-300 hover:scale-110">
                                               A
                                               
                                          </button>
                                           <button 
                                              v-else-if="user.active==0"
                                              @click="activated(user)"  class="text-xs text-white bg-orange-600 rounded-full w-6 mr-2 transform
                                               hover:text-purple-300 hover:scale-110">
                                               DA
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
   </AdminLayout>
  </template>
  
  <script>
    // @ is an alias to /src
    import AdminLayout from '@/Layouts/AdminLayout'
    import { mapGetters,mapActions } from 'vuex'
    export default {
      name: "indexuser",
      data(){
        return{
        successMessage : "",
        }
      },
      components: {
      AdminLayout,
      },
     methods:{
      ...mapActions('user',['index','deactivate','activate']),
      deactivated(user){
          //console.log(id)
        this.deactivate(user)
          .then(response => {
            this.$router.push({ name: 'indexuser' })
            this.successMessage="user Dectivated Successfully!"
          })
          .catch(error => {
              console.log(error)
  
          })
      },
      activated(user){
          //console.log(user)
        this.activate(user)
          .then(response => {
            this.$router.push({ name: 'indexuser' })
            this.successMessage="user Activated Successfully!"
          })
          .catch(error => {
              console.log(error)
  
          })
      },
      
     },
      created() {
          this.index()
      },
      computed:mapGetters('user', {allusers: "allusers"}),
  }
    </script>