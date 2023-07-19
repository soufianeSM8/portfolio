<template>
<header class=" h-15">
    <div class="container ml-auto mr-auto flex justify-between items-center py-2">
        <logo/>
        <header-Nav/>
        <mode-Switcher/>
    </div>
</header>
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
    }
}
</script>