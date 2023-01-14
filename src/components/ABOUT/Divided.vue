<template>

  
    <div class="container about__divided-wrapper">
      <div class="about__divided-wrapper-left about__divided-wrapper-item"
      :class="{imgboxheight:imgplace === true}"
      >
        <img :src="image" alt="img" 
        v-if="imgplace === true && typetext === 'false'"
        class="about__divided-img"
        />
        <div
        class="about__divided-text-box"
        v-if="imgplace === false || typetext === 'true'"
        >
          <BtnText></BtnText>
        </div>     
      </div>  

      <div class="about__divided-wrapper-right about__divided-wrapper-item"
      :class="{imgboxheight:imgplace === false}"
      >
        <img :src="image" alt="img" 
        v-if="imgplace === false && typetext === 'false'"
        class="about__divided-img"
        />
        <div
        class="about__divided-text-box"
        v-if="imgplace === true || typetext === 'true'"
        >
          <BtnText></BtnText>
        </div> 
      </div>  
    </div>
  
    
          
            
              
           
       
  
  </template>
  
  <script>

    import BtnText from '@/components/ABOUT/BtnText.vue'

    export default {
      name:'about-divided',  
      props: {
          img: {
            type: String,
          },
          imgposition: {
            type: String,
          },
          typetext: {
            type: String,
            default: 'false',
          },
        

      },
      components: {
        BtnText,
      
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
          image() {
            return require(`../../assets/images/${this.img}.png`);
          },
          imgplace () {
            if (this.imgposition == 'left') {
              return true
            } else {
              return false
            }
          }
      },
      
      
  
    }
  </script>
  
  
  <style lang="scss">
    @import '../../assets/varmix.scss';
  
    .about {
      &__divided-wrapper {
        display: flex;
        gap: 20px;
        @media (max-width:768px) {
           flex-direction: column;
        }
      }
      &__divided-wrapper-item {
        border-width:2px;
        border-style: solid;
        border-color: #000;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        @media (max-width:768px) {
           width: 100%;
        }
      }
      &__divided-img {
        position: absolute;
        width: 100%;
      }
      
    }
    .imgboxheight {
      height: clamp(245px, 52vw, 408px);
    }

    
   
    
  </style>
