<template>
    
            <div class="col">
                <div class="btnWhite"
                v-on:click="this.$emit('changeInpPr',this.inpprice),this.$emit('changeInpMon',this.inpmonth), this.$emit('changeInpPrG',this.inpprice),this.$emit('changeInpMonG',this.inpmonth)"
                
                
                >
                    <span class="btnWhite__text"
                    
                    
                    
                    ><slot></slot></span>

                </div>
            
            </div>
        
       
  
</template>

<script>



  export default {
  name: 'Btn-white',
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
  methods: {
    chenP () {
      this.$emit('changeInpPr',this.inpprice)
    },
    chenM () {
      this.$emit('changeInpMon',this.inpmonth)
    }
  }

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
    width: 185px;
    height: 45px;
    background-color: white;
    white-space: nowrap;
    
    &:hover {
        background-color: aqua;
    }

		&__text {
            text-transform:uppercase ;
            word-spacing: 5px;
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
		}
}

  

  

  

  

  
</style>