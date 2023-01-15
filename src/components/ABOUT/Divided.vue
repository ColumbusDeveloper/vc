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

              <TitleContent
              v-if="compName === 'TitleContent'"
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


              <TriangleContent
              v-if="compNameLeft === 'TriangleContentLeft'"
              ></TriangleContent>

              <TitleContent
              v-if="compNameLeft === 'TitleContentGetACarLeft'"
              >
                <template v-slot:title>
                  Get a car at the best prices and conditions
                </template>
                <template v-slot:content_1>
                  Not only is buying a car with VAC easy, it`s also the best way to save money. We have partnerships with Canada`s largest lenders. That allows us to help you secure loans at the best interest rates available.
                </template>
                <template v-slot:content_2>
                  Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like before you request a test drive.
                </template>
              </TitleContent>

              <BtnTextFlat
              buttontext="Request a Car"
              v-if="compNameLeft === 'BtnTextFlatLeft'"
              >
                <template v-slot:title>
                  Our mission
                </template>
                <template v-slot:content>
                  Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—well even deliver the car to you!
                </template>
              </BtnTextFlat>


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

              <TitleContent
              v-if="compName === 'TitleContent'"
              >
                <template v-slot:title>
                  VAC is convenience and transparency
                </template>
                <template v-slot:content_1>
                  We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.
                </template>
                <template v-slot:content_2>
                  Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.
                </template>
              </TitleContent>

              <TriangleContent
              v-if="compNameRight === 'TriangleContentRight'"
              ></TriangleContent>

              <TitleContent
              v-if="compNameRight === 'TitleContentGetACarRight'"
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

              <BtnTextFlat
              buttontext="Request a Car"
              v-if="compNameRight === 'BtnTextFlatRight'"
              >
                <template v-slot:title>
                  We think that VAC is the best way to buy a car in Canada. Try it for yourself and see how much time and money you can save.
                </template>
                <template v-slot:content>
                  There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.
                </template>
              </BtnTextFlat>


            </div>
          </div>
        </div> 
      </div>  
    </div>
  
    
          
            
              
           
       
  
  </template>
  
  <script>

    import BtnText from '@/components/ABOUT/BtnText.vue'
    import BtnTextFlat from '@/components/ABOUT/BtnTextFlat.vue'
    import TitleContent from '@/components/ABOUT/TitleContent.vue'
    import TriangleContent from '@/components/ABOUT/TriangleContent.vue'

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
              ].includes(value)
            },
          },
          compNameLeft: {
            type: String,
            default: '',
            validator(value) {
              return [
                'TitleContentLeft',
                'TriangleContentLeft',
                'TitleContent',
                'TitleContentGetACarLeft',
                'BtnTextFlatLeft',
              ].includes(value)
            },
          },
          compNameRight: {
            type: String,
            default: '',
            validator(value) {
              return [
                'TitleContentRight',
                'TriangleContentRight',
                'TitleContentGetACarRight',
                'BtnTextFlatRight',
              ].includes(value)
            },
          },
        

      },
      components: {
        BtnText,
        TitleContent,
        TriangleContent,
        BtnTextFlat,
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
  
  
  <style scoped lang="scss">
    @import '../../assets/varmix.scss';
  
    .about {
      &__divided-wrapper {
        display: flex;
        // align-items: center;

        gap: 60px;
        @media (max-width:768px) {
           flex-direction: column;
           gap: 0;
        }
      }
      &__divided-wrapper-item {
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
        display: flex;
      }
      &__divided-img {
        position: absolute;
        max-width: 100%;
        bottom: 4%;
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
