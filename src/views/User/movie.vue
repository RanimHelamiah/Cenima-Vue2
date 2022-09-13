<template>
    <headeruser />
    <movieindexuser />
</template>

<script>
import headeruser from '@/components/headeruser.vue'
import movieindexuser from '../indexuser-movie.vue'
export default {
name: "movie",
components:{
    headeruser,
    movieindexuser,
}
}
</script>