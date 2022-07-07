<template>
  <div class="container mycontainer">
    <div class="row">
      <div class="col mycontainer">
        <div class="topLine">
          <div class="topLineNavBar">
             <button>NAVBAR</button>
          </div>
          <div class="topLineRightPart">
            <button>One</button>
            <button>Two</button>
            <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"/>
          </div>

        </div>
        
        <div class="bigBlockContent">
          <menulist/>
        </div>
        
      </div>

    </div>
    
        
        
   
  </div>
</template>

<script>
  
import burgerbtn from './primitives/BurgerBtn.vue'
import menulist from './primitives/BurgerCollapceList.vue'


  export default {
    name: 'Header-one',
    components:{
      burgerbtn,
      menulist,
    
   
    },
    data () {
        return {
          
        iscross:false,
        
          
          
        }
      },
    

    
    
    
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
  .bigBlockContent {
  
    width: 100%;
    height: 400px;
    border-width:2px;
    border-style: solid;
    border-color: #000;
   
  }

  



  

  
  
  

</style>

