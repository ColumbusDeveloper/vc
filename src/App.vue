<template>
  <div class="wrapper">
    
        <div class="d-flex flex-column min-vh-100">

          <Headerone class="center"/>

            <main class="flex-fill">
              <router-view/>
            </main>

          <Footer class="center" />

        </div>
     
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

  .wrapper {
    max-width: 2010px;
    border-width:2px;
    border-style: solid;
    border-color: #000;
    padding: 0;
    border-width:2px;
    border-style: solid;
    border-color: #000;
  }
  .header {
    margin: 0 auto;
  }


</style>
