<template>

  
    <div class="about__btn-text-wrapper">
      <Btn
      class="about__btn-text-btn"
      >
        Request a Car
      </Btn>
    </div>
  
  
</template>
  
  <script>
  
  import Btn from '@/components/primitives/BTN/btnBlueSlot.vue'
    export default {
      name:'btn-text',
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
      &__btn-text-btn {
        @media (max-width:576px) {
           width: calc(100vw - 60px);
        }
      }
    }
    

    
   
    
  </style>
