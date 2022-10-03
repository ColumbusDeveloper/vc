<template>
   
            <div class="col btn-box"
            @click="changestatebtns"
            >                
                <div class="unclicked btn1"                   
                :class="{clicked:clicked1}"               
                >

                    <span class="btn__text">
                      <slot name="btn_1" class="btn__slot"></slot>     
                    </span>


                </div>

                <div class="unclicked"             
                :class="{clicked:clicked2}"               
                >

                    <span class="btn__text">
                      <slot name="btn_2" class="btn__slot"></slot>              
                    </span>

                </div>
            
            </div>
       
  
</template>

<script>



  export default {
    
    name: 'Btn-swiperEX',
   
    data() {
        return {
          
          swiperexon:true,
          clicked1:true,
          clicked2:false,
          

        }
    },
    methods:{
      
      changestatebtns () {
        this.swiperexon=!this.swiperexon

        if (this.swiperexon) {
          this.clicked1=true
          this.clicked2=false
        }else {
          this.clicked1=false
          this.clicked2=true
        }

        this.$store.state.swipercarpageex = this.swiperexon
      }
      
    },
    watch: {
        
    },
  
    
  }

</script>


<style lang="scss" scoped>
  @import '../../../assets/varmix.scss';

  

  .unclicked {
    background-color: #41456B;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 3px;
    border-radius: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-family: $fontFamily700;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
  }
  
  .clicked {
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 3px;
    border-radius: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-family: $fontFamily700;
    font-weight: 500;
    font-size: 1rem;
    color: #41456B;
    cursor: pointer;
  }

  .btn-box {
    display: flex;
    .btn1 {
      margin-right: 10px;
    }
  }

 

  

  

  

  

  

  
</style>