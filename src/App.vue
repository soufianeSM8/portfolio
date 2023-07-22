
<template>
  <div class="bg-primary_bg_color pb-12">
    
    <main>
      <div id="Home" class="relative before:content-[''] before:bg-patternBg  before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-contain before:opacity-5 z-0 ">
        <theheader/>
        <home  />
      </div>
    </main>
  </div>
</template>

<script>
import theheader from "./components/Theheader.vue";
import home from "./views/Home.vue";
export default {
  components:{
    theheader,
    home
  }
}
</script>
<!--
background color 1 : #212435
background color 2 : #181a26
blue cercel : #39afc9
gray cercle : #3f4249
in hover text : #7e8389
-->

