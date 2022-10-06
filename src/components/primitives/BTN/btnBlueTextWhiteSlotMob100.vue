<template>
   
            <div class="col">
                <div class="btnBlue">
                    <span class="btnBlue__text"><slot></slot></span>

                </div>
            
            </div>
       
  
</template>

<script>



  export default {
    
    name: 'Btn-blue',
    
  }

</script>


<style lang="scss" scoped>
  @import '../../../assets/varmix.scss';

  .btnBlue {
    display: flex;
    align-items: center;
    justify-content: center;
    border-width:2px;
    border-style: solid;
    border-color: $colorMainBlue;
    background-color:$colorMainBlue;
    @include letterBtnWhiteText ;
    border-radius: 2px;
    width: fit-content;
    height: 45px;
    padding-left: 5px;
    padding-right: 5px;
    white-space: nowrap;
    @media (max-width:576px) {
       width: 100%;
    }
    &:hover {
        background-color: rgb(0, 162, 255);
    }

		&__text {
            word-spacing: 5px;
            text-transform:uppercase ;
            
		}
}

  

  

  

  

  
</style>