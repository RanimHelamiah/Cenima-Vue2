<template>
    <headeruser />
    <movieindexuser />
</template>

<script>
import headeruser from '@/components/headeruser.vue';
import movieindexuser from '../indexuser-movie.vue';
import { mapGetters } from 'vuex';

export default {

name: "movie",
components:{
    headeruser,
    movieindexuser,
},
computed:{
   ...mapGetters('auth', ["loggedIn","isUser", "isAdmin"]),
  },
}
</script>