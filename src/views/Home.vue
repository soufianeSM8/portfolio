<template>
  <div class="container mr-auto ml-auto mt-14 lg:mt-20 relative z-0 ">
    <div class="text-center flex flex-col gap-y-8  lg:gap-y-[4rem] relative lg:ml-64 lg:text-left">
      <h1
        class="relative text-white dark:text-primary_bg_color uppercase font-bold text-2xl before:hidden  before:content-['<h1>'] before:absolute before:text-sm before:-top-8 before:left-4 before:text-CustomGray before:opacity-60 after:hidden after:content-['</h1>'] after:absolute after:text-sm after:-bottom-8 after:left-4 after:text-CustomGray after:opacity-60 phone2x:text-3xl phone:before:text-xs phone:after:text-xs  md:before:block md:after:block  md:text-4xl md:before:left-32 md:before:-top-4 md:after:left-32  md:after:-bottom-4 lg:before:-left-20 lg:after:-left-20 ">
        i'm <span class="text-CustomBlue ">soufiane</span> samni
    </h1>
      <p class="text-CustomGray relative w-[90%] text-sm before:hidden before:content-['<p>'] before:absolute before:text-sm  before:text-CustomGray before:opacity-60 after:hidden after:content-['</p>'] after:absolute after:text-sm  after:text-CustomGray after:opacity-60 leading-6 mx-auto sm:text-base md:before:block md:after:block md:before:-left-6 md:before:-top-4 md:after:-bottom-4 md:after:-left-6 lg:before:-top-8 lg:before:-left-14 lg:after:-bottom-8 lg:after:-left-14 lg:mx-0 lg:w-[70%] ">
        A Frontend focused Web Developer building the Front-end of Websites and
        Web Applications with great user experiences. that leads to the success
        of the overall product.
      </p> 
       <custom-button class="px-8 py-3 w-fit mx-auto bg-CustomBlue text-white rounded-full    text-sm hover:bg-cyan-600 relative overflow-hidden hover:scale-95 after:content-[''] after:absolute after:w-2 after:h-40 after:-top-8 after:-left-10 after:bg-slate-100 after:-translate-x-2 hover:after:translate-x-44 after:rotate-45 after:duration-300 sm:px-10 sm:py-4 lg:px-4 lg:py-3 lg:flex lg:flex-col lg:mx-0">
          <span class="">let's</span> 
          <span class="lg:ml-2"> talk</span> 
        </custom-button>
        <social-media class="absolute -left-60 top-32 hidden lg:block"/>
        <pages-number class="absolute right-5 bottom-2 hidden lg:block"/>
       
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
    }
}
</script>