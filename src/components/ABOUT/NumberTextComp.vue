<template>

  
    <div class="about__number-text-comp-wrapper">
      <h2 class="about__number-text-comp-number"><slot name="title"></slot></h2>
      <p class="about__number-text-comp-content">
          <slot name="content"></slot>
      </p>
      <div class="about__number-text-comp-grid">
        <NumberText
        class="about__number-text-grid-item-top-left"
        >
        <template v-slot:number>
          7,988+
        </template>
        <template v-slot:content>
          Sold Cars
        </template>
        </NumberText>

        <NumberText
        class="about__number-text-grid-item-top-right"
        >
        <template v-slot:number>
          123
        </template>
        <template v-slot:content>
          Working Experts
        </template>
        </NumberText>

        <NumberText
        class="about__number-text-grid-item-bottom-left"
        >
        <template v-slot:number>
          1560+
        </template>
        <template v-slot:content>
          Happy Clients
        </template>
        </NumberText>
        
      </div>
    
    </div>
  

</template>
  
  <script>
  import NumberText from '@/components/ABOUT/NumberText.vue'
  
    export default {
      name:'number-text-comp',
      components: {
        NumberText,
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
      &__number-text-comp-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
      }
      &__number-text-comp-grid {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto auto;
        gap: 40px;
        grid-template-areas: 
        "a b"
        "c .";
        @media (max-width:576px) {
          display: flex;
          flex-direction: column;
        }
      }
      &__number-text-grid-item-top-left {
        grid-area: a;
      }
      &__number-text-grid-item-top-right {
        grid-area: b;
      }
      &__number-text-grid-item-bottom-left {
        grid-area: c;
      }

      &__number-text-comp-number {
        @include   letterH2_Dark_Blue   ;
        margin-bottom: 50px;
      }
      &__number-text-comp-content {
        margin-bottom: 86px;
      }
      
      
      
      
    }
    

    
   
    
  </style>
