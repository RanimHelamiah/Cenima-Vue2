<template>
    <AdminLayout>
        <div class="max-w-6xl max-h-screen mx-auto m-4 ">
            <form @submit.prevent="add" class="mb-2 mt-4" enctype="multipart/form-data">
                <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ successMessage }}</div>
                <div class="relative z-0 mb-6 w-full group">
                    <label for="name" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-n:scale-100 peer-placeholder-n:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    <input type="text" v-model="createsnack.name" name="name" class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <label for="description" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-n:scale-100 peer-placeholder-n:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    <textarea v-model="createsnack.description" name="description" id="description"  style="height:100px;width:100%;"
                        class="block  py-2.5 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" required ></textarea>
                </div>
                <div class="relative z-0 mb-6 mt-7 w-full group">
                    <label for="image" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-n:scale-100 peer-placeholder-n:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                    <!-- <input type="image" name="image" :src="image" style="width:250px;height:45px;" /> -->
                    <input type="file" @input="createsnack.image = $event.target.files[0]" name="image" class="block py-2.5 px-0 
                    w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                    dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                    placeholder=" " required />
                </div> 
                <div class="relative z-0 mb-6 w-full group">
                    <label for="Price" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-n:scale-100 peer-placeholder-n:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    <input type="number" name="price" id="price"
                        class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                        dark:bg-purple-900 bg-transparent
                        border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                        dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                        focus:ring-0 focus:border-violet-600 peer" v-model="createsnack.price" required />
                </div>
                <div class="flex justify-end ">
                <button type="submit" class="mt-8 mr-8 text-white bg-violet-700 hover:bg-violet-800 
                focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-md  sm:w-auto  
                text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                style="width:350px; height:60px;">Create</button>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>
  
<script>
  import { mapActions} from 'vuex';
  import AdminLayout from '@/Layouts/AdminLayout.vue';
  export default {
    name: "snack",
    components:{
        AdminLayout,
    },
    data() {
        return {
            createsnack:{
            name:"",
            description:"",
            image:"",
            price:"",
            },
            successMessage:""
        }
    },
    methods:{
        ...mapActions('snack',['store']),
        add(){
            this.store(this.createsnack)
            this.$router.push({name : 'indexsnack'})
            this.successMessage = 'Snack Created Successfully!'
        }
    },
  }
  </script>