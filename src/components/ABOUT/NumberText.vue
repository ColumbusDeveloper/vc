<template>

  
    <div class="about__number-text-wrapper">

      <div class="about__number-text-item">
        <h2 class="about__number-text-number"><slot name="number"></slot></h2>
        <p class="about__number-text-content">
          <slot name="content"></slot>
        </p>
      </div>
    
    </div>
  

</template>
  
  <script>
  
  
    export default {
      name:'number-text',
      components: {
     
      },
        data() {
                return {
                    
               
                    

            }
        },
      
       
    
        
   
      methods: {
       
        
        
       
      },
      watch: {
        
      },
  
      computed: {
        
      },
      
      
  
    }
  </script>
  
  
  <style scoped lang="scss">
    @import '../../assets/varmix.scss';
  
    .about {
      &__number-text-wrapper {
        position: relative;
        width: 100%;
        height: 125px;
        display: flex;
        align-items: center;
        padding-left: 40px;
        
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 5%;
          position: absolute;
          left: 0; 
          bottom: 0%;
          box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
          -webkit-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
          -moz-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
        }
      }
      &__number-text-number {
        @include   letterH2_Dark_Blue   ;
        margin-bottom: 20px;
      }
      
      
      
    }
    

    
   
    
  </style>
