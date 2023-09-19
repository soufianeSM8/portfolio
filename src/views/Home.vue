<template>
  <div class="container mr-auto ml-auto mt-32 lg:mt-56 relative z-0  ">
    <div class="relative">
     <transition enter-from-class="-translate-x-10 opacity-0" enter-active-class=" duration-500 ease" enter-to-class="translate-x-0 opacity-1" appear>
     <div class="text-center flex flex-col gap-y-4  lg:gap-y-6  lg:ml-36 lg:text-left">
       <h1
        class="relative text-white dark:text-primary_bg_color uppercase font-bold text-2xl phone2x:text-3xl md:text-5xl  ">
        i'm <span class="text-CustomBlue">soufiane</span> <span>samni</span> 
    </h1>
      <p class="text-CustomGray relative w-[90%] text-sm  leading-6 mx-auto sm:text-lg lg:mx-0 lg:w-[70%]">
        A Frontend focused Web Developer building the Front-end of Websites and
        Web Applications with great user experiences. that leads to the success
        of the overall product.
      </p> 
       <Custom-Button class="px-6 py-2 w-32 mx-auto   sm:py-4 lg:px-4 lg:py-3  lg:mx-0">
          <span>let's talk</span> 
          
        </Custom-Button>
     </div>
     </transition>
     <transition enter-from-class="translate-y-10 opacity-0" enter-active-class=" duration-500 ease-in" enter-to-class="translate-y-0 opacity-1" appear>
     <social-media class="absolute left-4 -bottom-16 hidden lg:block" Custom_Props="flex-col"/>
     </transition>

        <transition enter-from-class="translate-y-10 opacity-0" enter-active-class=" duration-500 ease-in" enter-to-class="translate-y-0 opacity-1" appear>
          <pages-number class="absolute right-5 -bottom-16 hidden lg:block"/>
        </transition>
       
      </div>
  </div>
</template>
<script>
import socialMedia from '../components/socialIcon.vue';
import CustomButton from '../components/theButton.vue';
import pagesNumber from '../components/pagesNumber.vue';
export default {
    components:{
        socialMedia,
        CustomButton,
        pagesNumber
    },
}
</script>