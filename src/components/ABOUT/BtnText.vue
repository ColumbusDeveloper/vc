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
        position: relative;
        border-width:4px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.09);
        @media (max-width:768px) {
          padding: 40px;
        }
        @media (max-width:576px) {
          padding: 20px;
        }
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 1%;
          position: absolute;
          left: 0; 
          bottom: 0;
          background: transparent;
          box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
          -webkit-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
          -moz-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
         
        }
      }
      &__btn-text-title {
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
