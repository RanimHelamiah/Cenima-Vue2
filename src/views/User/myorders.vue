<template>
    <headeruser />
    <div class="flex justify-between" style="margin-left:20px;margin-right:30px; margin-bottom:20px;">
        <div class="mt-4"  v-for="order in myorder.data" :key="order.id"> 
            <div class="max-w-lg md:max-w-md sm:max-w-sm mx-20 bg-purple-300 shadow-2xl mt-10 rounded-lg overflow-hidden" 
            style="height:500px;width:350px;">
                <img class="w-full" style="height:255px;" alt="image" src="@/assets/order.jpg" />
                <div class="px-6 py-1">
                <div class="font-bold text-2xl text-purple-900 mt-8 mb-2">
                    ID: {{order.id}}
                </div>
                    <p class=" font-semibold text-purple-700 text-m">
                        Status: {{order.status}}
                    </p>
                </div>

                <div class="px-6 pt-1 pb-2">
                <span class="py-2 inline-block bg-purple-300 rounded-full px-2 py-1 text-sm font-semibold text-purple-800 mr-2 mb-2">
                    Date: {{order.date}}
                </span><br />
                
                <span class="mt-2 inline-block bg-purple-300 rounded-full px-2 py-1 text-m font-semibold 
                  text-purple-800 mr-2 mb-2" >
                  Total Price: {{order.total_price}}
                </span>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-20 mb-12 ">
        <pagination :data="myorder"  @pagination-change-page="getorders" 
                    class="text-purple-600 dark:text-purple-200 flex justify-center mt-4 pb-4 pl-8 pr-8 text-2Xl">
                        <template #prev-nav>
                            <span class="pr-8">&lt; Previous</span>
                        </template>
                        <template #next-nav>
                            <span class="pl-8">Next &gt;</span>
                        </template>
        </pagination>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { mapGetters,mapActions } from 'vuex'
    import LaravelVuePagination from "laravel-vue-pagination";
    import axios from 'axios';
    import headeruser from '@/components/headeruser.vue';
    export default {
      name: "myorders",
      components: {
      'Pagination': LaravelVuePagination,
      headeruser,
     },
     data(){
      return{
        myorder:{},
        successMessage : "",
        }
     },
     mounted() {
          // Fetch initial results
          this.getorders();
      },
     methods:{
      ...mapActions('profile',['myOrders']),
      getorders(page = 1) {
          this.myOrders()
              axios.get('/Profile/myorders?page=' + page)
                  .then(response => {
                      this.myorder = response.data.data;
                  });
          },
      
     },
      created() {
          this.myOrders()
      },
      computed:mapGetters('profile',{myorder : "myorder"}),
  }
  </script>