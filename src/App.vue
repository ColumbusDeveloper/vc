<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex flex-column min-vh-100">
          <Headerone/>
            <main class="flex-fill">
              <router-view/>
            </main>
          <Footer/>
        </div>
      </div>
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

  .container {
    border-width:2px;
    border-style: solid;
    border-color: #000;
    padding: 0;
  }


</style>
