<template  >

  <div class="container-fluid ">
    <div class="row ">
      <div class="col">
            <div class="d-flex flex-column min-vh-100" >
                  
                      <Headerone class="center"  v-on:click="mainbackchange"  />

                        <main class="flex-fill" v-bind:class='{cover:mainback}'>
                          <router-view/>
                        </main>

                      <Footer class="center" />

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
  },
  data () {
    return {
      
      mainback:false,
    }
  },

  methods: {
      mainbackchange () {
        this.mainback = !this.mainback
      }
  },

  
  
  



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

  .cover {
    background-color: #000;
  }

  

  


</style>
