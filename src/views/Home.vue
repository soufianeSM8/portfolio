<template>
  <div class="container mr-auto ml-auto mt-20 relative">
    <div class="ml-32 flex flex-col gap-y-[4rem] relative ">
      <h1
        class="relative before:content-['<h1>'] before:absolute before:text-sm before:-top-8 before:-left-12 before:text-CustomGray before:opacity-60 after:content-['</h1>'] after:absolute after:text-sm after:-bottom-8 after:-left-12 after:text-CustomGray after:opacity-60 text-white uppercase font-bold text-4xl ">
        i'm <span class="text-CustomBlue">soufiane</span> samni
    </h1>
      <p class="text-CustomGray relative w-[80%] before:content-['<p>'] before:absolute before:text-sm before:-top-8 before:-left-8 before:text-CustomGray before:opacity-60 after:content-['</p>'] after:absolute after:text-sm after:-bottom-8 after:-left-8 after:text-CustomGray after:opacity-60 leading-6">
        A Frontend focused Web Developer building the Front-end of Websites and
        Web Applications with great user experiences. that leads to the success
        of the overall product.
      </p>
      <button>let's talk</button>
      <social-media class="absolute left-8 bottom-6"/>
    </div>
  </div>
</template>
<script>
import socialMedia from '../components/socialIcon.vue'
export default {
    components:{
        socialMedia
    }
}
</script>