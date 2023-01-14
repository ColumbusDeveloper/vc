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
  
  
  <style lang="scss">
    @import '../../assets/varmix.scss';
  
    .about {
      &__btn-text-wrapper {
        width: 100%;
        height: 100%;
        padding: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width:768px) {
          padding: 40px;
        }
        @media (max-width:576px) {
          padding: 20px;
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
