<template>
  <div class="burgerLines" >

    <div class="topLine">

    </div> 

    <div class="cntLine">

    </div>  

    <div class="botLine">

    </div> 

  </div>
</template>

<script>

export default {
  name: 'Burger-menu',
  
  data () {

  }
  
}
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    .burgerLines{
    display: inline-block;
    position: relative;
    height: $sizeBurgerLineWidthFullScreen;
    width: $sizeBurgerLineWidthFullScreen;
    position: absolute;
    top:17px;
    right: 0;
        .topLine {
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
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
        }   
        .botLine{
          
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            bottom: 0;
           
          }
    }

    
    .burgerCross {
      display: inline-block;
      position: relative;
      height: $sizeBurgerLineWidthFullScreen;
      width: $sizeBurgerLineWidthFullScreen;
      position: absolute;
      top:17px;
      right: 0;
        .topLine {
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            top:50%;
            transform: translateY(-50%);
            transform: rotate(135deg);
           
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
        }   
        .botLine{
          
            position: absolute;
            width: $sizeBurgerLineWidthFullScreen;
            height: $sizeBurgerLineHeightFullScreen;
            background-color: $colorTitleBurgerBlueDark;
            top:50%;
            transform: translateY(-50%);
            transform: rotate(45deg);
           
          }
    }
   

</style>