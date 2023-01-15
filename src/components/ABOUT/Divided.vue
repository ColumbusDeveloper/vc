<template>

  
    <div class="container about__divided-wrapper">
      <div class="about__divided-wrapper-left about__divided-wrapper-item"
      
      >
          <div class="about__divided-img-container"
          :class="{imgboxheight:imgplace === true && typetext === false}"
          v-if="imgplace === true && typetext === 'false'"
          >
            <img :src="image" alt="img" 
              v-if="imgplace === true && typetext === 'false'"
              class="about__divided-img"
              />
          </div>
          
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

              <TitleContent
              v-if="compNameLeft === 'TitleContentLeft'"
              >
                <template v-slot:title>
                  Get your dream car
                </template>
                <template v-slot:content_1>
                  We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You dont want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
                </template>
                <template v-slot:content_2>
                  We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.
                </template>
              </TitleContent>
            </div>
          </div>
        </div>     
      </div>  

      <div class="about__divided-wrapper-right about__divided-wrapper-item"
      
      >
        <div class="about__divided-img-container"
        :class="{imgboxheight:imgplace === true && typetext === false}"
        v-if="imgplace === false && typetext === 'false'"
        >
          <img :src="image" alt="img" 
            v-if="imgplace === false && typetext === 'false'"
            class="about__divided-img"
            />
        </div>
        <div
        class="about__divided-text-box"
        v-if="imgplace === true || typetext === 'true'"
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
              <TitleContent
              v-if="compNameRight === 'TitleContentRight'"
              >
                <template v-slot:title>
                  Get your dream car
                </template>
                <template v-slot:content_1>
                  We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You dont want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
                </template>
                <template v-slot:content_2>
                  We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.
                </template>
              </TitleContent>
            </div>
          </div>
        </div> 
      </div>  
    </div>
  
    
          
            
              
           
       
  
  </template>
  
  <script>

    import BtnText from '@/components/ABOUT/BtnText.vue'
    import TitleContent from '@/components/ABOUT/TitleContent.vue'

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
            default: '',
            validator(value) {
              return [
                'BtnText',
                'TitleContentLeft',
                'TitleContentRight',
              ].includes(value)
            },
          },
          compNameLeft: {
            type: String,
            default: '',
            validator(value) {
              return [
                'TitleContentLeft',
              ].includes(value)
            },
          },
          compNameRight: {
            type: String,
            default: '',
            validator(value) {
              return [
                'TitleContentRight',
              ].includes(value)
            },
          },
        

      },
      components: {
        BtnText,
        TitleContent,
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
        gap: 60px;
        @media (max-width:768px) {
           flex-direction: column;
           gap: 0;
        }
      }
      &__divided-wrapper-item {
        // border-width:2px;
        // border-style: solid;
        // border-color: #000;
        width: 50%;
        
        @media (max-width:768px) {
           width: 100%;
        }
      }
      &__divided-img-container {
        position: relative;
        height: clamp(245px, 52vw, 408px);
      }
      &__divided-text-box {
        height: 100%;
      }
      &__divided-text-box-content {
        height: 100%;
      }
      &__divided-img {
        position: absolute;
        max-width: 100%;
        bottom: 0;
        @media (max-width:768px) {
          top:0;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      
      
    }
    .imgboxheight {
      @media (max-width:768px) {
        height: clamp(245px, 52vw, 408px);
      }
      
    }

    
   
    
  </style>
