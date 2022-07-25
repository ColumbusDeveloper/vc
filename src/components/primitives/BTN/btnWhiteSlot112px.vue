<template>
    
            <div class="col">
                <div class="btnWhite">
                    <span class="btnWhite__text"><slot></slot></span>

                </div>
            
            </div>
        
       
  
</template>

<script>



  export default {
    
    name: 'Btn-white',
    
  }

</script>


<style lang="scss" scoped>
  @import '../../../assets/varmix.scss';

  
  .btnWhite {
    position: relative;
    border-width:2px;
    border-style: solid;
    border-color: $colorMainBlue;
    @include letterBtnBlueText;
    border-radius: 2px;
    width: 112px;
    height: 45px;
    background-color: white;
    white-space: nowrap;
    @media (max-width:576px) {
       width: 90px;
    }
    &:hover {
        background-color: aqua;
    }

		&__text {
            text-transform:uppercase ;
         
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
		}
}

  

  

  

  

  
</style>