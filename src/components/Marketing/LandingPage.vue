<template>
     <div class="app flex-center m-4 mb-1">
         <carousel class="car"
           @next="next"
           @prev="prev"
         >
             <carousel-slide v-for="(slide,index) in slides" 
                :key="slide" 
                :index="index"
                :visibleSlide="visibleSlide" 
                :direction="direction" 
                >
                 <img :src="slide" />
             </carousel-slide>
         </carousel>
    </div>
    <div >
        <h1 class="bg-purple-300 text-purple-900 p-4 text-3xl flex justify-center font-bold">Now Showing Movies</h1>
        <movieindexuser />
    </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import CarouselSlide from '@/components/CarouselSlide';
import movieindexuser from "@/views/indexuser-movie.vue";
export default {
    data(){
        return{
            slides:[
                '/images/2.png',
                '/images/4.png',
                '/images/3.png',
            ],
            
            visibleSlide:0,
            direction:'left',
        }
    },
    computed : {
        slideLen(){
            return this.slides.length;
        },
    },
    methods : {
        next() {
            if(this.visibleSlide >= this.slideLen - 1){
                this.visibleSlide = 0;
            }
            else{
                this.visibleSlide++;
            }
            this.direction = "left"

        },
        prev() {
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slideLen - 1;
            }
            else{
                this.visibleSlide--;
            }
            this.direction = "right"

        }
    },
    components : {
        Carousel,
        CarouselSlide,
        movieindexuser,
        
    },
}
</script>

<style scoped>
img{
    height:90%;
    width:100%;
}
</style>
