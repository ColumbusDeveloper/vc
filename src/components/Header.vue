<template>
  <div class="container mycontainer">
    <h1 ref="tex">Header!</h1>
    <burger v-bind:class="{burgerCross:isCross}"  v-on:click="isCross=!isCross"   />
  </div>
</template>

<script>
  
import burger from './primitives/BurgerBtn.vue'
  export default {
    name: 'Header-one',
    components:{
      burger,
    },
    data () {
    return {
      
      isCross:false,
      
       
    }},

    watch: {
      isCross:function (val) {
          if(val) {
            this.$refs.tex.style.display = 'none'
          }
          else {
            this.$refs.tex.style.display = 'block'
          }
      }
    }
    
    
  }

    

  
</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .mycontainer {
    position: relative;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  h1 {
    position: absolute;
    top:0;
    left: 0;
  }
  
  

</style>