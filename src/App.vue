
<template>
  <div >
    <main class="relative ">
      <theheader class=""/>
      
      <div id="Home" class=" bg-primary_bg_color h-[90vh] max-h-[450px] flex dark:before:bg-lightPattern dark:bg-white dark:before:opacity-10 pb-12 relative before:content-[''] before:bg-patternBg  before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-contain before:opacity-5 lg:max-h-[680px] ">
        <home id="home"  />
      </div>
      <about id="about"  />
      <skells id="skells" />
      <work/>
      <contact/>
    </main>
    <footer>
     <theFooter></theFooter>
    </footer>
  </div>
</template>

<script>
import theheader from "./components/Theheader.vue";
import home from "./views/Home.vue";
import about from "./views/About.vue";
import skells from "./views/skills.vue";
import work from "./views/work.vue";
import contact from "./views/contact.vue";
import theFooter from "./views/footer.vue";
export default {
  components:{
    theheader,
    home,
    about,
    skells,
    work,
    contact,
    theFooter
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

