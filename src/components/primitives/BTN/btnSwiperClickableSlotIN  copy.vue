<template>
   
            <div class="col"
            
            >
                <div class="unclicked"
                @click="btnclicked=!btnclicked"
                :class="{clicked:btnclicked}"
                
                >

                    <span class="btn__text">
                      <slot class="btn__slot"></slot>
                    </span>

                </div>
            
            </div>
       
  
</template>

<script>



  export default {
    
    name: 'Btn-swiperIN',
    data() {
        return {
          
          btnclicked:false,
          

        }
    },
    methods:{

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