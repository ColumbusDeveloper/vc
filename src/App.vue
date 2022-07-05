<template>

  <div>
    <Headerone/>
      <main>
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
