<template>
    <div class=" h-[500px] pb-12 relative z-1 bg-primary_bg_color before:content-[''] before:bg-patternBg_2 before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-contain before:opacity-10 before:-z-1" >
         <div class="container w-[90%] mx-auto  py-8 ">
        <sectiontitle class="dark:text-dark">/ skells</sectiontitle>


  
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="350" viewBox="0 0 1080 350" class="w-full letr svg">

        <path class="cls-1 fill-none stroke-white stroke-2 " d="M0.061,290.809S141.99,181.024,286.183,244.941C405.31,310,249.449,415.907,229.4,287.532c0.2-130.622,150.211-91.668,233.7-69.892,190.181,54.921,190.027-89.427,162.719-127.772-39.35-53.09-126.482-50.394-157.258,8.737-29.068,59.7-46.88,163.862,116.817,221.951C689.5,343.532,782.652,286.048,802.6,167.826,832.038,53.969,942.663-21.625,1078.66,5.439"/> 
        </svg> -->
      
       



      

    </div>
    </div>
   
</template>
<script>
import sectiontitle from '../components/sectionTitle.vue';
export default {
  data(){
    return{
      show:true
    }
  },
    components:{
    sectiontitle
    }
    ,
    methods:{
      test(){
      
  let path = document.querySelector('.cls-1'),
      pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength ;
         path.style.strokeDashoffset = pathLength ;

        window.addEventListener('scroll',()=>{  
          let x =  (document.documentElement.scrollTop ) / (document.documentElement.scrollHeight - document.documentElement.clientHeight); 
         let drawLength = pathLength * x;

            path.style.strokeDashoffset = pathLength - drawLength;
        })
     
      },
    },
    mounted() {
  
    },

}
</script>
    <style>
      .cls-1 {
         stroke-dasharray: 10.04 5.02; 
         fill-rule: evenodd;      
       }
       .fade-enter-active,
.fade-leave-active {
  transition: opacity 10s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
    </style>