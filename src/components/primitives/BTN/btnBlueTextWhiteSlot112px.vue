<template>
   
            <div class="col">
                <div class="btnBlue"
                v-on:click="this.$emit('changeInpPrBtnBlue',this.inpprice),this.$emit('changeInpMonBtnBlue',this.inpmonth) "
                
                >
                    <span class="btnBlue__text"
                    
                    
                    >
                    <slot></slot></span>

                </div>
            
            </div>
       
  
</template>

<script>
  


  export default {
  name: 'Btn-blue',
  components: {
  
  },
  props:['proginputprise,proginputmonth'],
  
  data () {
      return {
       inpprice:0,
       inpmonth:0,
      }
  },
  watch:{
    proginputprise (newVal) {
      this.inpprice = newVal
    },
    proginputmonth (newVal) {
      this.inpmonth = newVal
    },
  },

  
  
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
    width: 112px;
    height: 45px;
    white-space: nowrap;
    @media (max-width:576px) {
       width: 90px;
    }
    &:hover {
        background-color: rgb(0, 162, 255);
    }

		&__text {
            text-transform:uppercase ;
            position:absolute;
            word-spacing: 5px;


            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            
		}
}

  

  

  

  

  
</style>