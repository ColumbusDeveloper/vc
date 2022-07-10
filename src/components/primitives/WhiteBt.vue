<template>
    <div class="container">
          

        <div class="row">
            <div class="col">
                <div class="btnWhite">
                    <span class="btnWhite__text">inventory</span>

                </div>
            
            </div>
        
        </div>      

  </div>
  
</template>

<script>



  export default {
     
    name: 'Btn-white',
    
  }

</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';

  .btnWhite {
    position: relative;
    border-width:2px;
    border-style: solid;
    @include letterBtnBlueText;
    border-radius: 2px;
    width: 137px;
    height: 45px;
    &:hover {
        background-color: aqua;
    }

		&__text {
            text-transform:uppercase ;
            color: $colorMainBlue;
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
		}
}

  

  

  

  

  
</style>