<template>

  
    <div class="about__btn-text-wrapper">

      <h2 class="about__btn-text-title"><slot name="title"></slot></h2>
      <p class="about__btn-text-content">
        <slot name="content"></slot>
      </p>
      <Btn
      class="about__btn-text-btn"
      >
        {{ buttontext }}
      </Btn>
    </div>
  

</template>
  
  <script>
  
  import Btn from '@/components/primitives/BTN/btnBlueSlot.vue'
    export default {
      name:'btn-text',
      inheritAttrs: false,
      props: {
          buttontext: {
            type: String,
          },
      },
      components: {
        Btn,
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
      &__btn-text-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
      }
      &__btn-text-title {
        padding-top: 7px;
        @include   letterH4HeadingBurgerMenuTextNumbersDarkBlue  ;
        line-height: 2rem;
        margin-bottom: 40px;
        @media (max-width:576px) {
          margin-bottom: 30px;
        }
      }
      &__btn-text-content {
        margin-bottom: 45px;
        @media (max-width:576px) {
          margin-bottom: 30px;
        }
      }
      &__btn-text-btn {
        height: fit-content;
        max-width: 200px;
        justify-self: baseline;
        @media (max-width:576px) {
           width: calc(100vw - 60px);
        }
      }
    }
    

    
   
    
  </style>
