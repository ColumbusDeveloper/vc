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
    font-family: $fontFamily700;
    font-weight: 800;
    color: #fff;
    border-radius: 2px;
    height: 45px;
    white-space: nowrap;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    
    &:hover {
        background-color: rgb(0, 162, 255);
    }

		&__text {
            text-transform:uppercase ;
            font-size: 16px;
            word-spacing: 5px;
		}
}

  

  

  

  

  
</style>