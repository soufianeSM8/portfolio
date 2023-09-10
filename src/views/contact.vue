<template>
      <div class="  pb-12 relative z-1 bg-primary_bg_color before:content-[''] before:bg-patternBg_2 before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-contain before:opacity-10 before:-z-1 dark:bg-white dark:before:bg-lightPattern" >
         <div class="container w-[90%] mx-auto  py-8 ">
        <sectiontitle customProp="before:w-16 before:h-16 after:w-16 after:h-16">/ Contact</sectiontitle>
			<div class="flex justify-center flex-col gap-y-10  flex-wrap md:justify-between md:flex-row">

			
        <div>
            <h3 class="text-white text-4xl uppercase dark:text-primary_bg_color mb-7">say <span class="text-CustomBlue font-bold">hello!</span></h3>
            <p class="text-white dark:text-primary_bg_color mb-3">I appreciate you coming by.</p>
            <p class="text-white dark:text-primary_bg_color ">Feel free to reach out to me any time.</p>
            <p class="flex gap-x-3 mt-5"><span>
               <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="20px"
	 height="20px" viewBox="0 0 24 24" xml:space="preserve">
<g id="Guides">
	<g id="_x32_0_px_2_">
	</g>
	<g id="_x32_0px">
	</g>
	<g id="_x34_0px">
	</g>
	<g id="_x34_4_px">
	</g>
	<g id="_x34_8px">
		<g id="_x31_6px">
		</g>
		<g id="square_4px">
			<g id="_x32_8_px">
				<g id="square_4px_2_">
				</g>
				<g id="square_4px_3_">
				</g>
				<g id="square_4px_1_">
				</g>
				<g id="_x32_4_px_2_">
				</g>
				<g id="_x31_2_px">
				</g>
			</g>
		</g>
	</g>
	<g id="Icons">
	</g>
	<g id="_x32_0_px">
	</g>
	<g id="square_6px">
		<g id="_x31_2_PX">
		</g>
	</g>
	<g id="_x33_6_px">
		<g id="_x33_2_px">
			<g id="_x32_8_px_1_">
				<g id="square_6px_1_">
				</g>
				<g id="_x32_0_px_1_">
					<g id="_x31_2_PX_2_">
					</g>
					<g id="_x34_8_px">
						<g id="_x32_4_px">
						</g>
						<g id="_x32_4_px_1_">
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>
	<g id="_x32_0_px_3_">
	</g>
	<g id="_x32_0_px_4_">
	</g>
	<g id="New_Symbol_8">
		<g id="_x32_4_px_3_">
		</g>
	</g>
</g>
<g id="Artboard">
</g>
<g id="Free_Icons">
	<g>
		
			<rect x="0.5" y="4.5" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" width="23" height="16" class="stroke-CustomBlue"/>
		<polyline style="fill:none;stroke-linecap:round;stroke-linejoin:round;strokee-miterlimit:10;" points="0.5,6.5 
			12,14 23.5,6.5 		" class="stroke-CustomBlue"/>
		
			<line style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="8.901" y1="11.979" x2="4.5" y2="15.5" class="stroke-CustomBlue"/>
		
			<line style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="15.101" y1="11.98" x2="19.5" y2="15.5" class="stroke-CustomBlue"/>
	</g>
</g>
                </svg></span>
                <a href="mailto:soufiane.samni@gmail.com" class="text-white dark:text-primary_bg_color">soufiane.samni@gmail.com</a></p>
        </div>
		<div>
			<h4 class="text-white dark:text-primary_bg_color pb-3">Follow me:</h4>
			<socialIcon Custom_Props="flex-row after:hidden gap-x-5"/>
		</div>
  		</div>


    </div>
    </div>
</template>

<script>
import sectiontitle from '../components/sectionTitle.vue';
import socialIcon from '../components/socialIcon.vue';
export default {
     components:{
    sectiontitle,
	socialIcon
    }
}
</script>