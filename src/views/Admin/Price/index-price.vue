<template>
  <AdminLayout>
    <div class="overflow-x-auto" >
        <div class="min-w-screen min-h-screen bg-gray-100 flex m-4 justify-center bg-gray-100 
          dark:bg-purple-900 overflow-hidden">
            <div class="w-full item-center lg:w-5/6 sm:w-5/6 bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6">
                  <form @submit.prevent="priceupdate(allprices)" class="m-16 ml-48 ">
                      <input type="number" name="price" v-model="allprices.ticket_price"
		                  class="lg:w-2/6 sm:w-5/6 mr-8 mb-8 bg-purple-200 font-bold dark:bg-violet-900 text-3xl text-purple-900 dark:text-purple-200  
                      font-semibold p-4 border-2 border-purple-900 dark:border-purple-200 rounded-lg"/>
                      <button @click="priceupdate(allprices)" name="update"  
	   		 	             class="lg:w-1/6 sm:w-3/6 bg-purple-200 dark:bg-violet-900 text-3xl text-purple-900 dark:text-purple-200  
                        font-semibold pl-8 pr-8  border-2 border-purple-900 dark:border-purple-200 rounded-lg 
                       hover:text-purple-400 outline-none exact p-4">Update</button>
                  </form>
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
    name: "price",
    components: {
    AdminLayout,
   },
   methods:{
    ...mapActions('price',['index','update']),
    priceupdate(allprices) {
          this.update(allprices);
        },  
   },
    created() {
        this.index()

    },
    computed:mapGetters('price', {allprices: "allprices"}),
}
  </script>