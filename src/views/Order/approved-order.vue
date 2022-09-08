<template>
    <AdminLayout>
        <div class="overflow-x-auto" >
        <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">
            {{ successMessage }}
         </div>
          <div class="min-w-screen min-h-screen bg-gray-100 flex m-4 justify-center bg-gray-100 
          dark:bg-purple-900 overflow-hidden">
              <div class="w-full lg:w-5/6">
                  <div class="bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6">
                      <table class="min-w-max w-full table-auto rounded-lg" >
                          <thead>
                              <tr class="bg-violet-900 dark:bg-violet-300  uppercase text-md leading-normal text-purple-200 dark:text-purple-900">
                                  <th class="py-3 px-6 text-left">date</th>
                                  <th class="py-3 px-6 text-left">user_id</th>
                                  <th class="py-3 px-6 text-center">total price</th>
                                  <th class="py-3 px-6 text-center">status</th>
                                  <th class="py-3 px-6 text-center">Actions</th>
                              </tr>
                          </thead>
                          <tbody class="text-purple-900 dark:text-gray-200 text-md font-light" 
                            :key="order.id" v-for="order in apporders" >
                              <tr class="border-b border-gray-200 hover:bg-purple-500">
                                  <td class="py-3 px-6 text-left whitespace-nowrap">
                                      <div class="flex items-center">
                                            {{order.date}}
                                      </div>
                                  </td>
                                  <td class="py-3 px-6 text-left">
                                      <div class="flex items-center">
                                              {{order.user_id}}
                                      </div>
                                  </td>
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex items-center justify-center">
                                                {{order.total_price}}
                                     </div>
                                  </td>
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex items-center justify-center" >
                                                {{order.status}}
                                     </div>
                                  </td>
                                  <td class="py-3 px-6 text-center">
                                      <div class="flex item-center justify-center">
                                            <button 
                                              
                                               class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>
                                          <button :key="order.id"
                                              @click="received(order)"  class="text-xs text-white bg-sky-600 rounded-full w-6 mr-2 transform
                                               hover:text-purple-300 hover:scale-110">
                                               Received
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
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { mapGetters,mapActions } from 'vuex'

export default {
    name: "approvedorder",
    components: {
    AdminLayout,
    },
    methods:{
        ...mapActions('order',['approved','received']),
        rec(order){
            //console.log(id)
            this.received(order)
            .then(response => {
                this.$router.push({ name: 'approvedorder' })
                this.successMessage="order recive Successfully!"
            })
            .catch(error => {
                console.log(error)
    
            })
        },
    },
    created() {
            this.approved()
    },
    computed:{
    ...mapGetters('order', {apporders: "apporders"}),     
    }

}

</script>
