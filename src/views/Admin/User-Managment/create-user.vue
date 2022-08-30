<template>
    <AdminLayout>
        <div class="max-w-6xl min-h-screen mx-auto m-4 ">
            <form @submit.prevent="add" class="mb-2 mt-4" enctype="multipart/form-data">
            <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ successMessage }}</div>
                <div class="relative z-0 mb-6 w-full group">
                    <label for="name" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    <input type="text" v-model="createuser.name" name="name" class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                </div>
                <div class="relative z-0 mb-6 w-full group">
                        <label for="email" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        <input type="text" v-model="createuser.email" name="email"
                        class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                </div>
                <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative z-0 mb-6 w-full group">
                        <label for="password" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                        <input type="password" v-model="createuser.password" name="password"
                        class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <label for="password_confirmation" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password_confirmation</label>
                        <input type="password" v-model="createuser.password_confirmation" name="password_confirmation"
                        class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                    </div>   
                    <div class="relative z-0 mb-6 w-full group">
                        <label for="phone" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
                        <input type="phone" v-model="createuser.phone" name="phone"
                        class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                    </div>
                    <div class="relative z-0 mb-6 mt-7 w-full group">
                        <label for="id_img" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                        <input type="file" @input="createuser.id_img = $event.target.files[0]" name="id_img" class="block py-2.5 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                    </div>             
                    <div class="relative z-0 mb-6 w-full group">
                    <select name="roles" id="roles"
                    class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                    dark:bg-purple-900 bg-transparent
                    border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                    dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                    focus:ring-0 focus:border-violet-600 peer" v-model="createuser.roles" required >
                        <option value selected disabled>Select Role</option>
                        <option   v-for="role in allroles" :key="role.id" :value="role.id">
                        {{ role.name}}
                        </option>
                    </select>
                    </div>
                    <div class="flex justify-end ">
                    <button type="submit" class="mt-8 mr-8 text-white bg-violet-700 hover:bg-violet-800 
                    focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-md  sm:w-auto  
                    text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                    style="width:350px; height:60px;">Create</button>
                    </div>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>

<script>
import { mapActions , mapGetters } from 'vuex';
import AdminLayout from '@/Layouts/AdminLayout.vue';
export default {
   name: "createuser",
   components:{
    AdminLayout,
   },
   computed:mapGetters('role',{allroles: "allroles"}),
   data() {
    return {
              createuser:{
                name:"",
                email:"",
                password:"",
                password_confirmation:"",
                phone:"",
                id_img:"",
                roles:"",
              },
              successMessage:""
              
          }
   },
   methods:{
        ...mapActions('auth',['register']),
        ... mapActions('role',['index']),
       add(){
            this.register(this.createuser)
            this.$router.push({name : 'indexuser'})
            this.successMessage = 'User Created Successfully!'
        }
   },
    created() {
        this.index()
    },
}
</script>