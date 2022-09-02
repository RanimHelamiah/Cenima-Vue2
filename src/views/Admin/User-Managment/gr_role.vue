<template>
  <AdminLayout>
    <div class="flex justify-between">
      <form @submit.prevent="grant" >
        <div class="flex justify-center" v-for="role in allroles" :key="role.id"   >
          <label :for="role">{{role.name}}</label>
          <input type="checkbox" :id="role.id" :value="role.id" v-model="roles"/>
        </div>
        <button type="submit">Grant</button>

      </form>
      
        
    </div>
  </AdminLayout>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { mapActions, mapGetters } from 'vuex';
import AdminLayout from '@/Layouts/AdminLayout.vue';
export default {
   name: "gr_role",
   props: ['userid'],
   data() {
       return {
          successMessage:"",
          

       }
   },
   components:{
    AdminLayout
   },
   methods:{
       ...mapActions('role',['indexrole','grant','revoke']),
      revoke(role){
          //console.log(role)
        this.activate(role)
          .then(response => {
            this.$router.push({ name: 'indexrole' })
            this.successMessage="role Activated Successfully!"
          })
          .catch(error => {
              console.log(error)
  
          })
      },grant(){
          console.log(userid)
          const data = {
                 'user_id': props.userid,
                'roles': this.roles,
            }
        this.grant(data)
          .then(response => {
            this.$router.push({ name: 'indexuser' })
            this.successMessage="user Granted Successfully!"
          })
          .catch(error => {
              console.log(error)
  
          })
      },
      
   },
   created() {
        this.indexrole()
   },
   computed:{
    ...mapGetters('role',{allroles: "allroles"}),
  }
}
</script>