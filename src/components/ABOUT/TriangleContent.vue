<template>

  
    <div class="about__triangle-content-wrapper">

      <div class="about__triangle-content-item"
      v-for="item in text" :key="item.id"
      >
        <triangle class="about__triangle-number">{{ item.id }}</triangle>
        <div class="about__triangle-content-text-box">
          <div class="about__triangle-content-title">
            {{ item.title }}
          </div>
          <div class="about__triangle-content-text">
            {{ item.content }}
          </div>
        </div>
      </div>

    </div>
  

</template>
  
  <script>
  
  import triangle from '@/components/primitives/graphic/triangle.vue'
  
    export default {
      name:'triangle-content',
      components: {
        triangle,
      },
        data() {
                return {
                    
                text: [
                  {id:1, title:'Quickly',content: 'You do not spend a lot of your time going to car dealerships'},
                  {id:2, title:'Simply',content: 'You can order your dream car just by talking to our specialist by phone'},
                  {id:3, title:'Conveniently',content: 'We will deliver the car directly to the doorstep of your home or office'}
                ]
                    

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

      &__triangle-content-wrapper {
        width: 100%;
        height: 100%;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &__triangle-content-item {
        display: flex;
        align-items: center;
        gap: 40px;
        &:not(:last-child) {
          margin-bottom: 45px;
        }
      }
      
      &__triangle-content-title {
        @include   letterSemiboldDarkBlue   ;
        margin-bottom: 10px;
      }
      &__triangle-content-text {
        width: 74%;
        @include   letterContentSecondarySmallGrayClear   ;
        @media (max-width:1200px) {
          width: 100%;
        }
        @media (max-width:768px) {
          width: 80%;
        }
      }

      
      
      
    }
    
    

    
   
    
  </style>
