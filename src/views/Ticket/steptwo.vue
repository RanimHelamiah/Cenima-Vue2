<template>{{availableseates}} 
    <div class="flex justify-center m-4 mt-40  max-h-screen container  item-center px-6 mx-auto
     ">
    <div class="w-3/4 p-20 md:w-full lg:w-7/12 mx-auto md:mx-0 border border-4 border-purple-900 rounded-xl p-4 bg-violet-200 ">
    <form @submit.prevent="add" class=" mb-2 mt-4 ">
        <div class="relative z-0 mb-6 mt-10 w-full group">
               <label for="Seats" class="absolute font-bold text-2xl text-purple-500 dark:text-purple-400 duration-300 
                transform -translate-y-6 scale-75 top-3 -z-2 origin-[0] peer-focus:left-0 
                peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Seat..</label>
                <select name="seats" id="seats" 
                class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                dark:bg-purple-900 bg-transparent
                border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                focus:ring-0 focus:border-violet-600 peer" v-model="seats" >
                    <option  disabled  class="bg-purple-200 dark:bg-purple-900">Select Seat</option>
                    <option   v-for="seat in availableseates" :key="seat.id" :value="seat.id">
                        {{seat.code}}
                    </option>
                </select>
                <!-- <input type="hidden" name="date" v-model="date"> -->
                <!-- <input type="hidden" name="startime" v-model="starttime"> -->
        </div>
        <div class="flex justify-end relative z-0 mb-6 w-full group">
            <button type="submit" class=" text-white bg-violet-400 hover:bg-violet-200"
                style="width:250px;height:50px; color:#340b56;border-radius:6px;
                border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
                padding-right:4px;margin-top:40px;">Buy Ticket</button>
        </div>
    
    </form>
    </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
   name: "steptwo",
   props:['movieid'],
   data() {
       return {
        //    date:"",
        //    starttime:"",
        //    movie_id:"",
        //    hall:"",
           seats:"",
           successMessage:""
       }
   },
    methods:{
       ...mapActions('ticket',['steptwo','store']),
       add(){
           const ticket = {
               'date': this.date,
               'starttime': this.starttime,
               'movie_id' : this.movie_id,
               'hall' : this.hall,
               'seats' : this.seats,
               'glasses' : 1,
           }

           console.log(ticket);
           this.store(ticket)
        //    this.$router.push({ name: 'steptwo'})
        //    this.date=""
        //    this.starttime=""
        //    this.movie_id=""
        //    this.hall=""
        //    this.seats=""

       }
    },
    computed:mapGetters('ticket',{
        movie_id :"movie_id",
        starttime :"starttime",
        hall :"hall",
        date :"date",
        availableseates :"availableseates",
    }),
}
</script>