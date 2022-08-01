<template>
  
          <div class="container">
            <div class="row">
              <div class="col mycontainer">
                <div class="topLine">
                  <div class="topLineNavBar">
                    <navbar v-on:click="$router.push('/')"/>
                    <div class="header-btnwhite-substitute" v-if="btnclicked">
                      <span class="header-btnwhite-substitute__text">Inventory</span>
                    </div>
                  </div>
                  <div class="topLineRightPart ">
                    <btnwhite v-on:click="$router.push('/catalog'),btnclicked=!btnclicked" :class="{Off:btnclicked}" class="btnFirstLeft"/>
                 
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

  props:['liclickedtextoff'],


  data() {
    return {
      
      liclicked:this.liclickedtextoff,
      btnclicked:false,
      is:false,
      

    }
  },

  
  watch:{

    liclickedtextoff (newVal) {
      if(this.btnclicked)
      this.btnclicked = newVal

    },

   

    



    

    
  },
  methods:{
    compositbtntrulitru () {
      return this.is = this.liclicked * this.btnclicked
    }
  },

  computed:{
    
  },


  

  







}
</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .topLineNavBar {
    display: flex;
    align-items: center;
  }

  .header-btnwhite-substitute {
    

    
    width: 115px;
    height: 35px;
    padding-top: 7px;
    @media (max-width:530px) {
       display: none;
    }
    

    &__text {
      @include   letterH4HeadingBurgerMenuTextNumbersDarkBlue    ;
      font-size: 1.56rem;
      line-height: 0.1rem;
    }
  }

  .On {
    display: block;
  }

  

  

  .Off {
    display: none;
  }

  .Off1 {
    display: none;
  }


  .isClicked {
    display: none;
  }

  
  .isOn {
    display: block;
  }

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