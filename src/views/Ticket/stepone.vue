<template>
    <div class="flex justify-center m-4 mt-40  max-h-screen container  item-center px-6 mx-auto
     ">
    <div class="w-3/4 p-20 md:w-full lg:w-7/12 mx-auto md:mx-0 border border-4 border-purple-900 rounded-xl p-4 bg-violet-200 ">
        <form @submit.prevent="step2" class=" mb-2 mt-4 ">
            <div class="relative z-0 mb-6 w-full group">
                    <label for="date" class="absolute font-bold text-2xl text-purple-500 dark:text-purple-400 duration-300 
                    transform -translate-y-6 scale-75 top-3 -z-2 origin-[0] peer-focus:left-0 
                    peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Date..</label>
                    <input type="date" v-model="date" name="date" id="date" 
                    class="block py-2.5 px-0 w-full text-md text-purple-900 bg-transparent border-0 
                    border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 
                    dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" 
                        required />
            </div>
            <div class="relative z-0 mb-6 mt-10 w-full group">
                <label for="date" class="absolute font-bold text-2xl text-purple-500 dark:text-purple-400 duration-300 
                    transform -translate-y-6 scale-75 top-3 -z-2 origin-[0] peer-focus:left-0 
                    peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Start Time..</label>
                    <select name="starttime" id="starttime" 
                    class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                    dark:bg-purple-900 bg-transparent
                    border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                    dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                    focus:ring-0 focus:border-violet-600 peer" v-model="starttime" >
                        <option  disabled  class="bg-purple-200 dark:bg-purple-900">Select Starttime</option>
                        <option   v-for="time in movie.times" :key="time.id" :value="time.starttime">
                            {{time.starttime}}
                        </option>
                    </select>
            </div>
            <div class="flex justify-end relative z-0 mb-6 w-full group">
                <button type="submit" class=" text-white bg-violet-400 hover:bg-violet-200"
                    style="width:250px;height:50px; color:#340b56;border-radius:6px;
                    border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
                    padding-right:4px;margin-top:40px;">Step Two</button>
            </div>
        
        </form>
    </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
   name: "stepone",
   props:['movieid'],
   data() {
       return {
           date:"",
           starttime:"",
           successMessage:""
       }
   },
    methods:{
       ...mapActions('ticket',['stepone','steptwo']),
       step2(){
           let data = {
               'date': this.date,
               'starttime': this.starttime,
               'movieid' : this.movieid,
           }
           this.steptwo(data)
            // console.log(data)

           this.$router.push({ name: 'steptwo' })
       }
    },
    created() {
        this.stepone(this.movieid)
    },
    computed:mapGetters('ticket',{
        movie : "movie",
        times : "times",
    }),
}
</script>