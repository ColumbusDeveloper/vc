<template>
              <div>
                        <div class="burgerLines" v-bind:class="{burgerCross:iscross}">

                              <div class="topLine">

                              </div> 

                              <div class="cntLine">

                              </div>  

                              <div class="botLine">
                              
                              </div> 
                        
                      </div>
   
              </div>
      
    
 
  
</template>

<script>

export default {
  name: 'Burger-menu',
  components: {
  
  },
  props:['iscross'],
  
  data () {
      return {
       
      }
  },

  
  
}
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    .burgerLines{
    display: inline-block;
    position: relative;
    height: $sizeBurgerLineWidthFullScreen;
    width: $sizeBurgerLineWidthFullScreen;
    z-index: 10;
    top:25px;
        .topLine {
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            border: 1px solid $colorTitleBurgerBlueDark;
            border-radius: 1px;
            top:0;
            
        }
        .cntLine {
            display: inline-block;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            border: 1px solid $colorTitleBurgerBlueDark;
            border-radius: 1px;
        }   
        .botLine{
          
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            bottom: 0;
            border: 1px solid $colorTitleBurgerBlueDark;
            border-radius: 1px;
           
          }
    }

    
    .burgerCross {
      display: inline-block;
      position: relative;
      height: $sizeBurgerLineWidthFullScreen;
      width: $sizeBurgerLineWidthFullScreen;
      z-index: 100;
      
      @media (max-width:992px) {

        left:-30px
        
      }

      left:-30px;
        .topLine {
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            top:50%;
            transform: translateY(-50%);
            transform: rotate(135deg);
            border: 1px solid $colorTitleBurgerBlueDark;
            border-radius: 1px;
           
        }
        .cntLine {
            display: inline-block;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            opacity: 0;
            border: 1px solid $colorTitleBurgerBlueDark;
            border-radius: 1px;
        }   
        .botLine{
          
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            top:50%;
            transform: translateY(-50%);
            transform: rotate(45deg);
            border: 1px solid $colorTitleBurgerBlueDark;
            border-radius: 1px;
           
          }
    }
   

</style>