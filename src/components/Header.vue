<template>
  <div class="container mycontainer">
    <burgerbtn  v-bind:class="{burgerCross:isCross}"  v-on:click="isCross=!isCross"  />
    <menulist ref="tex"/>
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
          
        isCross:false,
          
          
        }
      },
    watch: {
      isCross:function (val) {
          if(val) {
            this.$refs.tex.style.display = 'none'
          }
          else {
            this.$refs.tex.style.display = 'block'
          }
      }
    },

    
    
    
  }

    

  
</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .mycontainer {
    position: relative;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  
  
  

</style>

