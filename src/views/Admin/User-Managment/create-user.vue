<template>
    <form @submit.prevent="add" class="mb-2 mt-4">
       <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ successMessage }}</div>
       <input type="user"  placeholder="write the startuser"  
         style="width:250px;border-radius:6px;
         border-width:2px;border-color:#340b56;"     
         v-model="startuser" >
       <input type="user"  placeholder="write the enduser"
         style="width:250px;border-radius:6px;
         border-width:2px;border-color:#340b56; margin-left:10px;"
         v-model="enduser">
       <button type="submit" class="text-white bg-violet-400 hover:bg-violet-200"
        style="width:250px;height:40px; color:#340b56;border-radius:6px;
         border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
         padding-right:4px; margin-left:20px;">Create</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
   name: "createuser",
   data() {
       return {
           successMessage:""
       }
   },
   methods:{
       ...mapActions('user',['store']),
       add(){
           this.store(user)
           this.successMessage = 'user Created Successfully!'
       }
   }
}
</script>