<template>
    <p class="pl-8 pr-8 bg-purple-200 dark:bg-violet-900 m-4 ml-8 text-2xl text-purple-900 dark:text-purple-200  
            font-semibold p-3  border-2 border-purple-900 dark:border-purple-200 rounded-lg 
            outline-none exact" v-if="isHidden">
             Ticket Price: {{allprices.ticket_price}} Points
    </p>
    <button name="edit" class="bg-purple-200 dark:bg-violet-900 m-4 mr-8 text-2xl text-purple-900 dark:text-purple-200  
            font-semibold p-3 border-2 border-purple-900 dark:border-purple-200 rounded-lg 
            hover:text-purple-400 outline-none exact " @click="isHidden = !isHidden"
            v-if="isHidden">
            Edit Price
    </button>
    <form @submit.prevent="priceupdate(allprices)" class="mb-2 mt-4" v-if="!isHidden">
        <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">
          {{ successMessage }}
        </div>
        <input  type="number" name="price" style="width:250px;border-radius:6px;
		      border-width:2px;border-color:#340b56;background-color:lightgray;padding-left:30px;color: #340b56;"
         v-model="allprices.ticket_price" >
        <button type="submit" @click="priceupdate(allprices)" name="update" class="text-white bg-violet-400 hover:bg-violet-200"
         style="width:250px;height:40px; color:#340b56;border-radius:6px;
          border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
          padding-right:4px; margin-left:20px;">
            Update
        </button>
     </form>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'
    import { mapGetters,mapActions } from 'vuex'
    export default {
      name: "price",
      components: {
      AdminLayout,
      },
    data(){
      return{
        isHidden: true,
      }
    },
    computed:{
      ...mapGetters('price', {allprices: "allprices"}),
    },
    methods:{
      ...mapActions('price',['index','update']),
      priceupdate(allprices) {
            this.update(allprices);
            this.isHidden=true;
          },  
    },
    created() {
        this.index()
    },
  }
</script>