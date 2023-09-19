<template>
    <transition enter-from-class="-translate-y-10 opacity-0" enter-active-class=" duration-500 ease" enter-to-class="translate-y-0 opacity-1" appear >
    <header class="fixed top-0 z-100 w-full">
    <div class=" h-15 relative z-100  before:absolute before:w-full before:h-full before:top-0 before:left-0 before:backdrop-blur-Blur-on before:-z-1 ">
         <div class="container w-[90%] min-x-auto  flex justify-between items-center py-2 mx-auto   ">
        <logo/>
        <header-Nav class="hidden lg:block"/>
        <mode-Switcher class="hidden lg:flex"/>
         <button id="showMenuBtn" class="w-7 h-7 mt-3 flex flex-col gap-y-2 cursor-pointer lg:hidden ">
                <span class="w-full  h-[2px] bg-white dark:bg-primary_bg_color "></span>
                <span class="w-full h-[2px] bg-white  dark:bg-primary_bg_color"></span>
                <span class="w-full h-[2px] bg-white dark:bg-primary_bg_color "></span>
            </button>
        <div id="mobileMenu" class="flex  flex-col  w-3/6 bg-primary_bg_color h-[100vh] fixed right-0 top-0 z-100 gap-y-16 translate-x-[100%]  duration-300">
           <button id="hideMenuBtn" class="text-white flex justify-end mr-10 mt-10">
  <svg enable-background="new 0 0 128 128" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fill-white w-9 h-9 hover:rotate-180 duration-300" ><g><g><path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z"/></g></g></svg>
               
            </button>
          <nav>
            <ul class="text-white flex flex-col  items-center gap-y-2">
                <li class="w-full text-center"><a href="#" class="py-2 block hover:bg-CustomBlue uppercase">home</a></li>
                <li class="w-full text-center"><a href="#" class="py-2 block hover:bg-CustomBlue uppercase">about</a></li>
                <li class="w-full text-center"><a href="#" class="py-2 block hover:bg-CustomBlue uppercase">work</a></li>
                <li class="w-full text-center"><a href="#" class="py-2 block hover:bg-CustomBlue uppercase">contact</a></li>
            </ul>
          </nav>
        <mode-Switcher class="mx-auto"/>
        </div>

    </div> 
    </div>
  
</header>
    </transition>

</template>

<script>
import logo from './logo.vue'
import headerNav from './TheheaderNav.vue'
import modeSwitcher from './modeSwitcher.vue'
export default {
    components:{
        logo,
        headerNav,
        modeSwitcher
    },
    methods:{
        headerBlurEffect(){
            let Header = document.querySelector('header').style;
                    window.addEventListener('scroll',()=>{
                        window.scrollY <= 0 ? Header.setProperty('--Blur-on','0') : Header.setProperty('--Blur-on','4px')  
                
                    })
        }
    },
    mounted(){
       this.headerBlurEffect()
        
        
    }
    
}
</script>

