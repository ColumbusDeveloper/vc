<template>
   
            <div class="col">
                <div class="btnBlue">
                    <span class="btnBlue__text">apply for this vehicle</span>

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
    position: relative;
    border-width:2px;
    border-style: solid;
    border-color: $colorMainBlue;
    background-color:$colorMainBlue;
    @include letterBtnWhiteText ;
    border-radius: 2px;
    width: 250px;
    height: 45px;
    white-space: nowrap;
    @media (max-width:576px) {
       width: 100%;
    }
    &:hover {
        background-color: rgb(0, 162, 255);
    }

		&__text {
            text-transform:uppercase ;
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            word-spacing: 5px;
		}
}

  

  

  

  

  
</style>