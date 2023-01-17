<template>

  
    <div class="container about__divided-flat-wrapper"
    :class="{reverse:reverse === true}"
    >
      <div class="about__divided-flat-wrapper-left about__divided-flat-wrapper-item"
      
      >
          <div class="about__divided-flat-img-container"
          :class="{imgboxheight:imgplace === true && typetext === false}"
          v-if="imgplace === true && typetext === 'false'"
          >
            <img :src="image" alt="img" 
              v-if="imgplace === true && typetext === 'false'"
              class="about__divided-flat-img"
              :class="{img90:img90 === true}"
              />
          </div>
          
          <div
          class="about__divided-flat-text-box"
          v-if="imgplace === false || typetext === 'true'"
          >
          <div class="about__divided-flat-text-box-content">
            <div
            class="about__divided-flat-text-component">
              
            <TitleContentTeam
            class="about__title-content-team-comp"
            v-if="compName === 'TitleContentTeam'"
            >
              <template v-slot:title>
                We're dynamic team of creative people with innovative mind
              </template>
              <template v-slot:subtitle1>
                Our History
              </template>
              <template v-slot:content_1>
                We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
              </template>
              <template v-slot:subtitle2>
                Our Goal
              </template>
              <template v-slot:content_2>
                Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours. 
              </template>
            </TitleContentTeam>

            <NumberTextComp
            
            v-if="compName === 'NumberTextComp'"
            >
              <template v-slot:title>
                Main features
              </template>
              <template v-slot:content>
                We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that. 
              </template>
            </NumberTextComp>
              

              


              

              

              

              
              


            </div>
          </div>
        </div>     
      </div>  

      <div class="about__divided-flat-wrapper-right about__divided-flat-wrapper-item"
      
      >
        <div class="about__divided-flat-img-container"
        :class="{imgboxheight:imgplace === true && typetext === false}"
        v-if="imgplace === false && typetext === 'false'"
        >
          <img :src="image" alt="img" 
            v-if="imgplace === false && typetext === 'false'"
            class="about__divided-flat-img"
            :class="{img90:img90 === true}"
            />
        </div>
        <div
        class="about__divided-flat-text-box"
        v-if="imgplace === true || typetext === 'true'"
        >
          <div class="about__divided-flat-text-box-content">
            <div
            class="about__divided-flat-text-component">
            
            <TitleContentTeam
            v-if="compName === 'TitleContentTeam'"
            class="about__title-content-team-comp"
            >
              <template v-slot:title>
                We're dynamic team of creative people with innovative mind
              </template>
              <template v-slot:subtitle1>
                Our History
              </template>
              <template v-slot:content_1>
                We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
              </template>
              <template v-slot:subtitle2>
                Our Goal
              </template>
              <template v-slot:content_2>
                Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours. 
              </template>
            </TitleContentTeam>

            <NumberTextComp
            
            v-if="compName === 'NumberTextComp'"
            >
              <template v-slot:title>
                Main features
              </template>
              <template v-slot:content>
                We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.
              </template>
            </NumberTextComp>
              

              

              

              

      


            </div>
          </div>
        </div> 
      </div>  
    </div>
  
    
          
            
              
           
       
  
  </template>
  
  <script>

    import TitleContentTeam from '@/components/ABOUT/TitleContentTeam.vue'
    import NumberTextComp from '@/components/ABOUT/NumberTextComp.vue'

    export default {
      name:'about-divided-flat',  
      props: {
          img: {
            type: String,
          },
          img90:{
            type: String,
          },
          reverse:{
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
                'TitleContentTeam',
                'NumberTextComp',
              ].includes(value)
            },
          },
          
          
        

      },
      components: {
        TitleContentTeam,
        NumberTextComp,
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
      &__divided-flat-wrapper {
        display: flex;
        align-items: center;

      
        @media (max-width:768px) {
           flex-direction: column;
          
        }
      }
      &__divided-flat-wrapper-item {
        width: 50%;
        @media (max-width:768px) {
           width: 100%;
        }
      }
      &__divided-flat-img-container {
        
        
        @media (max-width:768px) {
           padding-top: 20px;
           padding-bottom: 20px;
        }
      }
      &__divided-flat-text-box {
        height: 100%;
        @media (max-width:768px) {
           padding-top: 20px;
           padding-bottom: 20px;
        }
      }
      &__divided-flat-text-box-content {
        height: 100%;
       
      }
      &__divided-flat-img {
   
        width: 100%;
    
        
      }
      &__title-content-team-comp {
        width: 80%;
        @media (max-width:768px) {
          width: 100%;
        }
      }
      
      
    }
    .img90 {
      width: 90%;
      @media (max-width:768px) {
         width: 100%;
      }
    }
    .reverse {
      @media (max-width:768px) {
         flex-direction: column-reverse;
      }
    }
    

    
   
    
  </style>
