<template>
    <div class="flex justify-between" style="margin-left:20px;margin-right:30px; margin-bottom:20px;">
        <div class="mt-20" v-for="movie in shmovies.data" :key="movie.id"> 
            <div class=" max-w-sm mx-20 mb-20 shadow-2xl  w-80 rounded-lg overflow-hidden shadow-lg bg-purple-300" 
            style="height:500px;">
                <router-link :to="{name: 'showmovie' , params:{movieid: movie.id}}">
                <img class=" w-full" style="height:300px;width:200px;" alt="image" :src="`http://127.0.0.1:8000/${movie.image}`" />
                <div class="px-6 py-1">
                <div class="font-bold text-2xl text-purple-900 mt-8 mb-2">
                    {{movie.name}}
                </div>
                    <p class="px-2 font-semibold text-purple-700 text-m">
                        {{movie.type}}
                    </p>
                </div>

                <div class="px-6 pt-1 pb-2">
                <span class="py-2 inline-block bg-purple-300 rounded-full px-2 py-1 text-sm font-semibold text-purple-800 mr-2 mb-2">
                    {{movie.from}} /{{movie.to}}
                </span>
                
                <span class="mt-2 inline-block bg-purple-300 rounded-full px-2 py-1 text-m font-semibold 
                  text-purple-800 mr-2 mb-2" v-for="genre in movie.genres" :key="genre.id">
                          {{genre.name}}                   
                </span>
                </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="mt-20 mb-12 ">
        <pagination :data="shmovies"  @pagination-change-page="getmovies" 
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
    export default {
      name: "movieindexuser",
      components: {
      'Pagination': LaravelVuePagination,
     },
     data(){
      return{
          shmovies:{},
         successMessage : "",
        }
     },
     mounted() {
          // Fetch initial results
          this.getmovies();
      },
     methods:{
      ...mapActions('movie',['indexuser']),
      getmovies(page = 1) {
          this.indexuser()
              axios.get('/Movie/indexuser?page=' + page)
                  .then(response => {
                      this.shmovies = response.data.data;
                  });
          },
      
     },
      created() {
          this.indexuser()
      },
      computed:mapGetters('movie',{shmovies : "shmovies"}),
  }
  </script>