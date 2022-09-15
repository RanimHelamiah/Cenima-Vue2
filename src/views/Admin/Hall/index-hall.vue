<template>
    <AdminLayout>
        <div class="overflow-x-auto" >
            <div class="flex mt-4 mr-20 justify-center">
                <button name="new" v-if="isHidden" @click="isHidden = !isHidden" class="ml-20 bg-purple-200 dark:bg-violet-900 m-4 mr-8 text-3xl text-purple-900 dark:text-purple-200  
                font-semibold px-3 py-1 border-2 border-purple-900 dark:border-purple-200 rounded-lg 
                hover:text-purple-400 outline-none exact ">
                Add New HaLL
            </button>
            <div v-if="!isHidden" class="ml-20">
            <form @submit.prevent="add" class="mb-2 mt-4">
                <input type="text"  placeholder="write the role name"  
                    style="width:250px;border-radius:6px;
                    border-width:2px;border-color:#340b56;"     
                    v-model="name" >
                <button type="submit" class="text-white bg-violet-400 hover:bg-violet-200"
                style="width:250px;height:40px; color:#340b56;border-radius:6px;
                    border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
                    padding-right:4px; margin-left:20px;">Create</button>
            </form>
            </div>
            </div>
            <div class="min-w-screen min-h-3/4  flex m-4 justify-center bg-gray-100 
            dark:bg-purple-900 overflow-hidden">
                <div class="w-full lg:w-5/6">
                    <div class="bg-gray-100   dark:bg-purple-900  rounded my-6">
                        <table class="ml-20 min-w-max w-2/3 table-auto rounded-lg bg-purple-300 shadow-md dark:bg-purple-800" >
                            <thead>
                                <tr class="bg-violet-900 dark:bg-violet-300  uppercase text-md leading-normal text-purple-200 dark:text-purple-900">
                                    <th class="py-3 px-6 text-center">ID</th>
                                    <th class="py-3 px-6 text-center">Name</th>
                                </tr>
                            </thead>
                            <tbody class="text-purple-900 dark:text-gray-200 text-md " 
                            :key="hall.id" v-for="hall in allhalls" >
                            <!-- // v-for="(post, index) in posts" :key="index"> -->
                                <tr class="border-b border-gray-200 hover:bg-purple-500">
                                    <td class="py-3 px-6 text-center whitespace-nowrap">
                                            <div class="mr-2" >
                                            {{hall.id}}
                                            </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                            <div class="mr-2">
                                            {{hall.name}}
                                            </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'
    import { mapGetters,mapActions } from 'vuex'
    export default {
        name: "hallindex",
        components: {
            AdminLayout,
        },
        data(){
            return{
            isHidden: true,
            }
        },
        methods:{
            ...mapActions('hall',['index','store']),
            add(){
                if (this.name.trim().length == 0 ) {
                    return
                }
                const hall = {
                    'name': this.name,
                }
                this.store(hall)
                this.name=""
                this.successMessage = 'hall Created Successfully!'
            }
        },
        created() {
            this.index()
        },
        computed:mapGetters('hall', {allhalls: "allhalls"}),  
    }
</script>