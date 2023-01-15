<template>

  
    <div class="about__title-content-wrapper">

      <h2 class="about__title-content-title"><slot name="title"></slot></h2>
      <p class="about__title-content-content_1">
        <slot name="content_1"></slot>
      </p>
      <p class="about__title-content-content_2">
        <slot name="content_2"></slot>
      </p>
    </div>
  

</template>
  
  <script>
  
  
    export default {
      name:'title-content',
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
  
  
  <style lang="scss">
    @import '../../assets/varmix.scss';
  
    .about {
      &__title-content-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &__title-content-title {
        margin-bottom: 40px;
        @media (max-width:576px) {
          margin-bottom: 30px;
        }
      }
      &__title-content-content_1 {
        margin-bottom: 45px;
        @media (max-width:576px) {
          margin-bottom: 30px;
        }
      }
      &__title-content-content_2 {
        margin-bottom: 45px;
        @media (max-width:576px) {
          margin-bottom: 30px;
        }
      }
      
    }
    

    
   
    
  </style>
