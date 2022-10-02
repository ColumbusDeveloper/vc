<template>
   
            <div class="col"
            
            >
                <div class="unclicked"
                @click="passstatetocarpage"
                :class="{clicked:state}"
                
                >

                    <span class="btn__text">
                      <slot class="btn__slot"></slot>
                      <!-- {{$store.state.swiperexon}} -->
                      {{state}}
                  
                    </span>

                </div>
            
            </div>
       
  
</template>

<script>



  export default {
    
    name: 'Btn-swiperIN',
   
    data() {
        return {
          
          swiperexon:false ,

          state:false,

        }
    },
    methods:{
      passstatetocarpage () {
        

        
        this.swiperexon=!this.swiperexon
        if (this.swiperexon) {
          this.$store.state.swiperexon = false
          this.state = !this.$store.state.swiperexon
        }else if (!this.swiperexon) {
          this.$store.state.swiperexon = true
          this.state = !this.$store.state.swiperexon
        }
     
    
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

  

  

  

  

  

  
</style>