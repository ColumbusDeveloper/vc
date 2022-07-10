<template>
  <div class="container-fluid">
          <div class="container mycontainer">
            <div class="row">
              <div class="col mycontainer">
                <div class="topLine">
                  <div class="topLineNavBar">
                    <button>NAVBAR</button>
                  </div>
                  <div class="topLineRightPart">
                    <btnWhite/>
                    <button>Two</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          
          

  </div>
  
</template>

<script>

  import btnWhite from './primitives/WhiteBt.vue'

  export default {
    
    name: 'Header-one',
    components: {
    
    btnWhite,


    },
    data() {
      return {

        



      }
    },

    methods:{
      
    }





  }
</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .topLineRightPart {
    display: flex;
  }

  .topLine {
    display: flex;
    justify-content: space-between;
  }

  

  

  

  

  
</style>