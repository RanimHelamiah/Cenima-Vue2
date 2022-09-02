<template>
    <AdminLayout>
      <div class="overflow-x-auto" >
        <!-- <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">
            {{ successMessage }}
         </div> -->
         <!-- <div class="flex justify-between bg-gray-100 dark:bg-purple-900 m-4 lg:flex  md:flex ">
            <div class="ml-4">
                <button >grant role</button><br />
                <div v-if="!isHidden">
                    <p class="text-purple-900 dark:text-purple-200">Grant Role</p>
                    <form @submit.prevent="grant" class="mb-2 mt-4">
                        <input type="number" name="user_id" v-model="user_id"/>
                        <select name="roles" id="roles"  style="width:250px;border-radius:6px;
                        border-width:2px;border-color:#340b56;" v-model="role">
                            <option disabled>Select Role</option>
                            <option   v-for="role in allroles" :key="role.id" :value="role.id">
                            {{ role.name}}
                            </option>
                    </select>
                    <button type="submit" class="ml-4 text-white bg-violet-700 hover:bg-violet-800 
                      focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-md  sm:w-auto  
                      text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                      style="width:90px; height:37px;">Grant</button>
                    </form>
                </div>
                </div>
                <div>
                    <router-link to="/User/create">
                <button name="new"  class="bg-purple-200 dark:bg-violet-900 m-4 mr-8 text-3xl text-purple-900 dark:text-purple-200  
                  font-semibold p-3 border-2 border-purple-900 dark:border-purple-200 rounded-lg 
                  hover:text-purple-400 outline-none exact ">Add New Emploey</button>
            </router-link>
            
                </div>
                
          </div> -->
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
                                      <div class="flex items-center justify-center" v-for="role in user.roles" :key="role.id">
                                                {{role.name}}
                                     </div>
                                  </td>
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex item-center justify-center">
                                         <router-link :to="{ name: 'gr_role', params:{userid: user.id}}">
                                            <button 
                                             
                                               class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>
                                         </router-link>
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
        user_id: "",
        role: "",
        successMessage : "",
        isHidden: true,
        }
      },
      components: {
      AdminLayout,
      },
     methods:{
      ...mapActions('user',['index','deactivate','activate']),
      ...mapActions('role',['indexrole','grant','revoke']),
      //  grant(){
      //     //console.log(id)
      //     const data = {
      //           'user_id': this.user_id,
      //           'role': this.role,
      //       }
      //   this.grant(data)
      //     .then(response => {
      //       this.$router.push({ name: 'indexuser' })
      //       this.successMessage="user Granted Successfully!"
      //     })
      //     .catch(error => {
      //         console.log(error)
  
      //     })
      // },
      revoke(user){
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
          this.indexrole()
      },
      computed:{
        ...mapGetters('user', {allusers: "allusers"}),     
        ...mapGetters('role',{allroles: "allroles"}),
      }
  }
    </script>