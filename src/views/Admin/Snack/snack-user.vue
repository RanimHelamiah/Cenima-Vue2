<template>
    <div class="flex justify-between">
        <button  @click="isHidden=!isHidden"  class="flex justufy-start pl-40 text-purple-900
        font-bold pt-1 w-1/2  rounden-lg" >
            Cart
        </button>
        <headeruser />
    </div>
    <div id="cart-sidebar" class="min-h-screen bg-purple-300 w-1/3" v-if="!isHidden">
        <table class="min-w-max w-full table-auto rounded-lg" >
                    <thead>
                        <tr class="bg-violet-900 dark:bg-violet-300  text-md leading-normal text-purple-200 dark:text-purple-900">
                            <th class="py-3 px-6 text-left">Snack</th>
                            <th class="py-3 px-6 text-center">Price</th>
                            <th class="py-3 px-6 text-center">Ammount</th>
                            <th class="py-3 px-6 text-center">Total</th>
                            <th class="py-3 px-6 text-center"></th>
                        </tr>
                    </thead>
                    <tbody class="text-purple-900 dark:text-gray-200 text-md font-light" v-for="(item,i) in cart" :key="i">
                        <tr class="border-b border-gray-200 hover:bg-purple-500">
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                        {{item.name}}
                                        <!-- {{getName(item)}} -->
                                    </div>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                        {{item.price}}
                                        <!-- {{getPrice(data)}} -->
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                   {{item.ammount}}
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    {{item.price*item.ammount}}
                                   <!-- {{getPrice(data)*data.ammount}} -->
                                </div>
                            </td>
                            
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <!-- <router-link :to="{ name: 'snackedit', params:{snackid: snack.id}}"> -->
                                        <button  class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        </button>
                                        <!-- </router-link> -->
                                            
                                </div>
                            </td>
                        </tr>
                    </tbody>
        </table>
        <!-- footer -->
        <div class="flex justify-between">
            <div class="border border-2 border-violet-400 bg-violet-900 hover:bg-violet-400 text-purple-200
                rounded-lg p-2 mt-8 mr-2 font-bold">
                TotalPrice:{{this.tatalprice}}
            
            </div>
            <button @click="checkoutfun(this.tatalprice)" class="border border-2 border-violet-400 bg-violet-900 hover:bg-violet-400 text-purple-200
                rounded-lg p-2 mt-8 mr-2 font-bold">
                checkout
            </button>
        </div>
    </div>
    <div class="flex justify-between " style="margin-left:20px;margin-right:30px; margin-bottom:20px;" v-if="isHidden">
    <div class="mt-4" v-for="snack   in snackuser.data" :key="snack.id"> 
        <div class=" max-w-lg md:max-w-md sm:max-w-sm mx-20 bg-purple-300 shadow-2xl mt-10 w-88 rounded-lg overflow-hidden 
        shadow-lg">
            <img class="w-full" style="height:255px;" alt="image" :src="`http://127.0.0.1:8000/${snack.image}`" />
            <div class="px-6 py-1">
                <input class="font-bold text-2xl text-purple-900 mb-4 bg-purple-300" name="id" v-model="snack.id">
                <input class="font-bold text-2xl text-purple-900 mb-4 bg-purple-300" name="name" v-model="snack.name">
                <input class="px-2 font-semibold text-purple-700 text-md bg-purple-300" v-model="snack.price">
            </div>
            <div class="px-6 pt-1 pb-2">
            <span class="py-2 inline-block bg-violet-300 rounded-full px-3 py-1 text-sm font-semibold text-purple-800 mr-2 mb-2">
                {{snack.description}}
            </span><br />
            <span class="py-2 inline-block px-2  text-md font-semibold text-purple-800 mr-2 ">Ouantity:</span>
            <input type="number" name="ammount" class="ml-2 mr-2 mb-4 w-full bg-purple-200 rounded-lg border border-2 
            border-purple-900 text-violet-900 font-bold p-1 pl-4" v-model.number="ammount"/>
            <button @click.prevent="addToCart(snack,ammount)" type="submit" class=" mt-4 mb-6 m-2 w-full border border-2 border-purple-900 
            rounded-lg p-2 bg-violet-400 text-purple-900 font-bold hover:bg-violet-300">
                AddToCart
            </button>
            </div>
        </div>
        </div>
    </div>
    <div class="mt-20 mb-12 " v-if="isHidden">
        <pagination :data="snackuser"  @pagination-change-page="getsnacks" 
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
import axios from 'axios'
import { ref, computed, onMounted } from "vue"
import headeruser from "../../../components/headeruser.vue"
import { reduce } from 'lodash';
    export default {
      name: "snackindexuser",
      components: {
    "Pagination": LaravelVuePagination,
    headeruser
},
     data(){
        return{
            inventory:[],
            cart:[],
            cartfortotal:[],
            tatalprice:null,
            snackuser:{},
            successMessage : "",
            isHidden: true,
        }
     },

    methods:{
        ...mapActions('snack',['indexuser']),
        ...mapActions('order',['store']),
        checkoutfun(totla){
            let final = {
                ...this.cartfortotal,
            }
            let bebe = {
                "order_items": final,
                "total_price": totla,
            }
            this.store(bebe)
            this.$router.push({ name: 'myorders'})
            this.tatalprice=null;
            this.cart = [];
            this.cartfortotal =[]; 
            console.log(bebe);
        },
        addToCart(snack ,ammount){
            let blabla = {
                ...snack,
                "ammount": ammount,
            };
            let data = {
                "id":blabla.id,
                "ammount": blabla.ammount,
            };
            this.tatalprice+= blabla.price*blabla.ammount;
            this.cartfortotal.push(data)
            this.cart.push(blabla)
            this.ammount=""
        },
        getsnacks(page = 1) {
            this.indexuser()
            axios.get('/Snack/indexuser?page=' + page)
                .then(response => {
                    this.snackuser = response.data.data;
                });
        },
    },
    created() {
        this.indexuser()
    },
    mounted() {
        this.getsnacks();
    },
    computed:mapGetters('snack',{snackuser : "snackuser"}),
  }
  </script>