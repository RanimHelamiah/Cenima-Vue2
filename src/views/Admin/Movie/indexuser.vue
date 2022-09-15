<template>
    <AdminLayout>
        <div>
            <movieindexuser />
        </div>
    </AdminLayout>
</template>


<script>
    import AdminLayout from '@/Layouts/AdminLayout.vue'
    import movieindexuser from "@/views/indexuser-movie.vue"
    export default {
        name: 'indexusermovie',
        components:{
            AdminLayout,
            movieindexuser,
        }
    }
</script>
