<template>
    <div id="about" class="bg-secondary_bg_color dark:before:bg-lightPattern dark:bg-white dark:before:opacity-10 relative pb-10 before:content-[''] before:bg-patternBg_2  before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-50%  before:opacity-5  ">
        
        <div  class="container w-[90%] mx-auto  py-8 gap-y-20">
              <sectiontitle>/ about</sectiontitle>
            <div class="flex justify-center flex-wrap  gap-y-20 lg:justify-between">

                <div class="aboutInfo w-full lg:w-1/2 flex items-center order-1 lg:order-none">
                    <p class="text-white dark:text-primary_bg_color  relative text-center leading-8  before:absolute before:content-[''] before:w-52 before:h-[1px] before:bg-white dark:before:bg-primary_bg_color before:-top-6 before:left-1/2 before:-translate-x-1/2 lg:text-start lg:before:left-0 lg:before:translate-x-0 w-11/12 mx-auto md:w-auto">I am a Frontend developer, who loves to provide 
                        solutions for people and business projects which
                        is a challenge I like to overcome.I build websites using HTML, CSS, JavaScript,
                        and other frameworks and libraries. 
                        I spend most days learning and building
                        I keep working on getting better by trying 
                        to reach the best version of myself.</p>
                </div>
                 <div class="aboutImage w-full lg:w-1/2 flex justify-center   lg:justify-end">
                    <div id="profileImgBox" class="profileBg relative rounded-full bg-blueGradient overflow-hidden bg-cover w-72 md:w-80 lg:w-[400px]">
                        <img src="../assets/images/profile.png" alt="profile" class="relative top-5 mx-auto  duration-500 profileImg">
                    </div>
                    
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import sectiontitle from '../components/sectionTitle.vue'
export default {
    components:{
    sectiontitle
    }
}
</script>
