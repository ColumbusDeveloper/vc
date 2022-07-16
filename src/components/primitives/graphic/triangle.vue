<template>
              
                <div class="triangle-top">
                    <img src="../../../assets/images/Polygon_103.png" class="triangle-top__img" alt="triangle">
                    <span class="triangle-top__num"><slot></slot></span>
                </div>
              
</template>

<script>

export default {
  name: 'H2-darkBlue',
  components: {
  
  },
 
  
  data () {
      return {
       
      }
  },

  
  
}
</script>


<style lang="scss" scoped>
  @import '../../../assets/varmix.scss';
   .triangle-top {
    position: relative;
    width: 79px;
    height: 71px;
    &__img {
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    &__num {
        position:absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: $colorTitleBurgerBlueDark;
        @include letterH2textTitleDarkBlue;
        font-size: 2.5rem;
    }
}

</style>