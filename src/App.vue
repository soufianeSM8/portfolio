
<template>
  <div class="bg-primary_bg_color h-[500px]">
    
    <main>
      <div id="Home" class="bg-patternBg bg-100% bg-no-repeat bg-top ">
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

