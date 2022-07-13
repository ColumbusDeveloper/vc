<template>
  
          <div class="container">
            <div class="row">
              <div class="col mycontainer">
                <div class="topLine">
                  <div class="topLineNavBar">
                    <navbar v-on:click="$router.push('/')"/>
                  </div>
                  <div class="topLineRightPart ">
                    <btnwhite class="btnFirstLeft"/>
                    <btnblue  class="btnRightEdge"/>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          
          

 
  
</template>

<script>

import btnwhite from './primitives/BTN/btnWhite.vue'
import btnblue from './primitives/BTN/btnBlue.vue'
import navbar from './primitives/navBar.vue'

export default {
  
  name: 'Header-one',
  components: {
  
  btnwhite,
  btnblue,
  navbar,


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
    height: $heightHeader;
    align-items: center;
  }

  .placeforburger {
    width: 70px;
    height: 30px;
    border-width:2px;
    border-style: solid;
    border-color: #000;
  }

  .btnFirstLeft {
    margin-right: 15px;
    @media (max-width:768px) {
      display: none;
    }
  }

  .btnRightEdge {
    @media (max-width:420px) {
      display: none;
    }
  }

  

  

  

  

  
</style>