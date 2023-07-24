
<template>
  <div>
    <main>
      <div id="Home" class=" bg-primary_bg_color dark:before:bg-lightPattern dark:bg-white dark:before:opacity-10 pb-12 relative before:content-[''] before:bg-patternBg  before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-contain before:opacity-5 ">
        <theheader/>

        <home id="home"  />
      </div>
      <about id="about" class="bg-secondary_bg_color dark:before:bg-lightPattern dark:bg-white dark:before:opacity-10 relative pb-10 before:content-[''] before:bg-patternBg_2  before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-50%  before:opacity-5  " />

      <skells id="skells" class=" h-[500px] pb-12 relative before:content-[''] before:bg-lightPattern before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-contain before:opacity-20 " />
    </main>
  </div>
</template>

<script>
import theheader from "./components/Theheader.vue";
import home from "./views/Home.vue";
import about from "./views/About.vue";
import skells from "./views/skills.vue";
export default {
  components:{
    theheader,
    home,
    about,
    skells
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

