<template>
    <AdminLayout>
        <div class="flex mt-8 mb-12 max-h-screen w-full content-center justify-center bg-purple-100 dark:bg-purple-900">
            <div class="flex justify-center w-full  shadow-md">
                <div class="flex  justify-between rounded-l-md  mr-24 mb-16 mt-8" style="width: 48rem; height: 32rem;padding-left:8rem;">
                    <div class="w-72">
                        <div class="w-full " >
                            <div class="font-bold text-4xl text-purple-900 dark:text-purple-200 mb-8">
                                {{showsnack.name}}<br>
                            <span class="inline-block rounded-full  px-4 py-2 text-sm font-bold text-purple-900 dark:bg-purple-200 mt-8" style="width:120px;height:35px; border-width:1px;border-color:lightgray;">
                                <strong>Price:</strong> 
                                {{showsnack.price}}
                            </span>
                            </div>
                            <div class="w-full mb-8" style="font-size:22px;">
                                <p class="font-semibold text-purple-900 dark:text-purple-200 text-md">
                                    {{showsnack.description}}
                                </p>
                            </div>
                            <div class="flex justify-between mt-24">
                                <a href="">
                                <button class="p-1 rounded-md hover:bg-purple-500 bg-rose-700 font-bold" 
                                style="width:250px; margin-top:30px; padding:10px; color:whitesmoke; margin-right:100px;font-size:25px;">
                                    Add To Cart
                                </button>
                                </a>
                                <router-link :to="{name: 'indexsnack'}">
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
                <div class="flex flex-wrap content-center justify-center rounded-r-md" style="width: 48rem; height: 40rem; padding-right: 16rem;">
                    <img class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" :src="`http://127.0.0.1:8000/${showsnack.image}`">
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from '@/Layouts/AdminLayout';
import { mapGetters,mapActions } from 'vuex';

export default {
    name: "showsnack",
    props:['snackid'],
    components: {
        AdminLayout,
    },
    methods:mapActions('snack',['show']),
    computed:mapGetters('snack', {showsnack: "showsnack"}),
    created() {
        this.show(this.snackid);
    },
}
</script>