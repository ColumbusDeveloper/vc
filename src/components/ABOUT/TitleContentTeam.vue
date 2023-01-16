<template>

  
    <div class="about__title-content-team-wrapper">

      <h2 class="about__title-content-team-title"><slot name="title"></slot></h2>
      <h5 class="about__title-content-team-subtitle"><slot name="subtitle1"></slot></h5>
      <p class="about__title-content-team-content_1">
        <slot name="content_1"></slot>
      </p>
      <h5 class="about__title-content-team-subtitle"><slot name="subtitle2"></slot></h5>
      <p class="about__title-content-team-content_2">
        <slot name="content_2"></slot>
      </p>
    </div>
  

</template>
  
  <script>
  
  
    export default {
      name:'title-content-team',
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
      &__title-content-team-wrapper {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &__title-content-team-title {
        @include   letterH2_Dark_Blue   ;
        margin-bottom: 35px;
        @media (max-width:576px) {
          margin-bottom: 25px;
        }
      }
      &__title-content-team-subtitle {
        @include  letterSemiboldDarkBlue    ;
      }
      &__title-content-team-content_1 {
        margin-bottom: 35px;
        @media (max-width:576px) {
          margin-bottom: 25px;
        }
      }
      &__title-content-team-content_2 {
        margin-bottom: 0px;
        padding-bottom: 0px;
      }
      
    }
    

    
   
    
  </style>
