<template>
    
            <div class="col">
                <div class="navBar">
                    <img src="../../assets/images/logo_header.png" alt="logo">
                    <span class="navBar__text">VAC</span>

                </div>
            
            </div>
        
       
  
</template>

<script>



  export default {
    
    name: 'Nav-bar',
    
  }

</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';

  .navBar {
    display: flex;
    align-items: center;
		&__text {
            @include letterLogoBlueText;
		}
}



  

  

  

  

  
</style>
