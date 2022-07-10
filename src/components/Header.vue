<template>
  <div class="container-fluid">
          <div class="container mycontainer">
            <div class="row">
              <div class="col mycontainer">
                <div class="topLine">
                  <div class="topLineNavBar">
                    <button>NAVBAR</button>
                  </div>
                  <div class="topLineRightPart ">
                    <btnwhite/>
                    <btnblue/>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          
          

  </div>
  
</template>

<script>

import btnwhite from './primitives/btnWhite.vue'
import btnblue from './primitives/btnBlue.vue'

export default {
  
  name: 'Header-one',
  components: {
  
  btnwhite,
  btnblue,


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
    max-width: 400px;
  }

  .topLine {
    display: flex;
    justify-content: space-between;
  }

  .placeforburger {
    width: 70px;
    height: 30px;
    border-width:2px;
    border-style: solid;
    border-color: #000;
  }

  

  

  

  

  
</style>