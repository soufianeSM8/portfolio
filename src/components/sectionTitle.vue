<template>
    <div class=" w-full py-7 mb-12">
           <h2 class="relative w-fit uppercase z-50 mx-auto text-white before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:-left-3 before:w-14 before:h-14 before:-z-10 before:rounded-full before:bg-CustomBlue after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-right-4 after:w-14 after:h-14 after:-z-20 after:rounded-full after:bg-circleColorGray md:mx-0 " :class="customProp"><slot></slot></h2>
  
    </div>
</template>
<script>
export default {
    props:["customProp"]
}
</script>