<template>

  <div class="d-flex flex-column min-vh-100">
    <Headerone/>
      <main class="flex-fill">
        <router-view/>
      </main>
    <Footer/>
  </div>
  
</template>

<script>

import Headerone from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components:{
    Headerone,
    Footer,
  }
}


</script>


<style lang="scss">
@import './assets/varmix.scss';


</style>
