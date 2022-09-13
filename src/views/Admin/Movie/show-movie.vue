<template>
    <div class="flex justify-between max-h-screen w-full mt-20 mb-12 content-center justify-center bg-purple-200 dark:bg-purple-900">
     <div class="flex justify-center w-full  shadow-md">
        <div class="flex  justify-between rounded-l-md  mr-24 mb-20 mt-20" style="width: 48rem; height: 32rem;padding-left:8rem;">
        <div class="w-72">
            <div class="w-full " >
                    <div class="font-bold text-4xl text-purple-900 dark:text-purple-200 mb-8">
                        {{showmovie.name}}<br>
                    <span class="inline-block rounded-full mb-4  px-4 py-2 text-sm font-bold text-purple-900 dark:bg-purple-200 mt-8" style="width:120px;height:35px; border-width:1px;border-color:lightgray;">
                        <strong>Type:</strong> 
                        {{showmovie.type}}
                    </span><br />
                    <span class="rounded-full  px-4 py-3  font-bold text-purple-900 dark:bg-purple-200 mt-8"
                     style="width:120px;height:35px; border-width:1px;border-color:lightgray;font-size:18px;"
                      v-for="genre in showmovie.genres" :key="genre.id">
                     Genres: {{genre.name}}                   
                    </span>
                    </div>
                <div class="w-full mb-8" style="font-size:24px;">
                    <p class="text-purple-900 dark:text-purple-200">
                        {{showmovie.description}}
                    </p>
                </div>
                <div class="flex justify-between mt-8">
                    <router-link :to="{name : 'stepone' ,params:{movieid: movieid}}">
                    <button class="p-1 rounded-md hover:bg-purple-500 bg-rose-700 font-bold" 
                    style="width:250px; margin-top:30px; padding:10px; color:whitesmoke; margin-right:100px;font-size:25px;">
                        Buy Ticket
                    </button>
                    </router-link>
                    <router-link :to="{name: 'movieindex'}">
                            <button class="p-1 rounded-md hover:bg-purple-500 bg-violet-700" 
                            style="width:150px; margin-top:30px; padding:10px; color:whitesmoke; margin-right:80px;">
                                <i class="fa fa-chevron-left" fa-2x aria-hidden="true"></i>
                                Back..
                            </button>
                    </router-link>
                </div>
            </div>
        </div>
        </div>

        <!-- Login banner -->
        <div class="flex flex-wrap mt-20 mb-20 content-center justify-center rounded-r-md" style="width: 52rem; height: 38rem; padding-right: 8rem;padding-bottom: 2rem;">
        <img class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"  :src="`http://127.0.0.1:8000/${showmovie.image}`" />
        </div>

    </div>

    </div>
  </template>
  
  <script>
    // @ is an alias to /src
    import AdminLayout from '@/Layouts/AdminLayout'
    import { mapGetters,mapActions } from 'vuex'
    export default {
      name: "showmovie",
      props:['movieid'],
      components: {
          AdminLayout,
     },
     methods:{
      ...mapActions('movie',['show']),
     },
      created() {
          this.show(this.movieid)
      },
      computed:mapGetters('movie', {
        showmovie: "showmovie",
        allhalls: "allhalls",
        allgenres: "allgenres",
        alltimes: "alltimes",
    }),
  }
  </script>