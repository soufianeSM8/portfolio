<template>
  <div class="container mr-auto ml-auto mt-20 relative z-1">
    <div class="ml-64 flex flex-col gap-y-[4rem] relative ">
      <h1
        class="relative before:content-['<h1>'] before:absolute before:text-sm before:-top-8 before:-left-20 before:text-CustomGray before:opacity-60 after:content-['</h1>'] after:absolute after:text-sm after:-bottom-8 after:-left-20 after:text-CustomGray after:opacity-60 text-white uppercase font-bold text-4xl ">
        i'm <span class="text-CustomBlue ">soufiane</span> samni
    </h1>
      <p class="text-CustomGray relative w-[70%] before:content-['<p>'] before:absolute before:text-sm before:-top-8 before:-left-14 before:text-CustomGray before:opacity-60 after:content-['</p>'] after:absolute after:text-sm after:-bottom-8 after:-left-14 after:text-CustomGray after:opacity-60 leading-6">
        A Frontend focused Web Developer building the Front-end of Websites and
        Web Applications with great user experiences. that leads to the success
        of the overall product.
      </p> 
       <custom-button class="px-4 py-3 w-fit bg-CustomBlue text-white   rounded-full flex flex-col text-sm hover:bg-cyan-600 relative overflow-hidden hover:scale-95 after:content-[''] after:absolute after:w-2 after:h-40 after:-top-8 after:-left-10 after:bg-slate-100 after:-translate-x-2 hover:after:translate-x-40 after:rotate-45 after:duration-300 ">
          <span class="">let's</span> 
          <span class="ml-2">talk</span> 
        </custom-button>
        <social-media class="absolute -left-60 bottom-14"/>
        <pages-number class="absolute right-5 bottom-0"/>
       
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