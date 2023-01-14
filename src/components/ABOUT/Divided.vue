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
          <div class="about__divided-text-box-content">
            <div
            class="about__divided-text-component">
              <BtnText
              buttontext="Request a Car"
              v-if="compName === 'BtnTextMission'"
              >
                <template v-slot:title>
                  Our mission
                </template>
                <template v-slot:content>
                  Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—well even deliver the car to you!
                </template>
              </BtnText>
            </div>
          </div>
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
          <div class="about__divided-text-box-content">
            <div
            class="about__divided-text-component">
              <BtnText
              btntext="Request a Car"
              v-if="compName === 'BtnText'"
              ></BtnText>
            </div>
          </div>
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
          compName: {
            type: String,
            default: 'BtnTextMission',
            validator(value) {
              return [
                'BtnText',
              ].includes(value)
            },
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
        position: relative;
        @media (max-width:768px) {
           width: 100%;
        }
      }
      &__divided-text-box {
        height: 100%;
      }
      &__divided-text-box-content {
        height: 100%;
      }
      &__divided-img {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      
      
    }
    .imgboxheight {
      @media (max-width:768px) {
        height: clamp(245px, 52vw, 408px);
      }
      
    }

    
   
    
  </style>
