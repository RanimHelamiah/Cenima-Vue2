<template>
    <form @submit.prevent="add" class="mb-2 mt-4">
       <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ successMessage }}</div>
       <!-- <input type="text"  placeholder="write the role"  
         style="width:250px;border-radius:6px;
         border-width:2px;border-color:#340b56;"     
         v-model="role" >
       <input type="role"  placeholder="write the endrole"
         style="width:250px;border-radius:6px;
         border-width:2px;border-color:#340b56; margin-left:10px;"
         v-model="role">
       <button type="submit" class="text-white bg-violet-400 hover:bg-violet-200"
        style="width:250px;height:40px; color:#340b56;border-radius:6px;
         border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
         padding-right:4px; margin-left:20px;">Create</button> -->
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
   name: "grantrole",
   data() {
       return {
        //    startrole:"",
        //    endrole:"",
           successMessage:""
       }
   },
   methods:{
       ...mapActions('role',['grant']),
    //    add(){
    //        if (this.startrole.trim().length == 0 || this.endrole.trim().length == 0) {
    //            return
    //        }
    //        const role = {
    //            'startrole': this.startrole,
    //            'endrole': this.endrole,
    //        }
    //        this.store(role)
    //        this.startrole=""
    //        this.endrole=""
    //        this.successMessage = 'role Created Successfully!'
    //    }
   }
}
</script>