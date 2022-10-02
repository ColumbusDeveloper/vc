<template>
   
            <div class="col"
            
            >
                <div class="unclicked"
                @click="passstatetocarpage"
                :class="{clicked:state}"
                
                >

                    <span class="btn__text">
                      <slot class="btn__slot"></slot>
                      {{state}}
                   
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
          state:true,

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
        
      },

      
    },
    watch: {
        
    },
  //   updated () {
  //         if (this.$store.state.swiperexon===true){
  //         this.swiperexon=false
  //       } else {
  //         this.swiperexon=true
  //       }
  //       this.$store.state.swiperexon = 0

  //  }
    
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