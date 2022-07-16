<template>
              
                <div class="rectangleLogo">
                    <img src="../../../assets/images/LogoImgTextCard.png" class="rectangleLogo__logo" alt="logo">
                    <img src="../../../assets/images/RootCard.png" class="rectangleLogo__root" alt="root">
                </div>
              
</template>

<script>

export default {
  name: 'Logo-root-imgs',
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
   
    .rectangleLogo {
        position: relative;
        
        display: flex;
        justify-content: center;
		&__logo {
            
            
            width: calc(100vw * #{$adaptiveLogoCardWidth});
            height: calc(100vw * #{$adaptiveLogoCardHeight});
            @media (max-width:768px) {
               width: calc(100vw * #{$adaptiveLogoCardWidthTablet});
               height: calc(100vw * #{$adaptiveLogoCardHeightTablet});
            }

 
		}


		&__root {
            
            
            
            width: calc(100vw * #{$adaptiveRootCardWidth});
            height: calc(100vw * #{$adaptiveRootCardHeight});
            @media (max-width:768px) {
               width: calc(100vw * #{$adaptiveRootCardWidthTablet});
               height: calc(100vw * #{$adaptiveRootCardHeightTablet});
            }
		}
}


</style>