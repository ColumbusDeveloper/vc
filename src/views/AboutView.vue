<template>
  
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
          <div class="col header" @clearmagtopform="setMagtopformInventoryComponent">
            <Headerone  class="center" :liclickedtextoff="navliclicktextoffstate"  />
            <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"  />
            <transition name="menu">
              <burgerlist v-if="iscross" class="burgerlist" :listate="navliclicktextoffstate" v-on:click="iscross=!iscross" v-on:navliclicktextoffevent="changenavliclicktextoffstate"  />
            </transition>
          </div>
      </div>
    </div>
        
    <main class="flex-fill">
    
      <AboutVac
      class="about-page__about-vac-comp"
      />

      <Divided 
       class="about-page__item"
       img="about_kia"
       typetext="false"
       imgposition="right"
       compName="BtnTextMission"
      />
      
      <Divided 
       class="about-page__item"
       typetext="true"
       compNameLeft="TitleContentLeft"
       compNameRight="TriangleContentRight"
      />

      <Divided 
       class="about-page__item"
       img="Nissan"
       typetext="false"
       imgposition="left"
       compName="TitleContent"
      />

      <Divided 
       class="about-page__item"
       typetext="true"
       compNameLeft="TitleContentGetACarLeft"
       compNameRight="BtnTextFlatRight"
      />

      <Divided 
       class="about-page__item about-page__item-tablet-dell"
       typetext="true"
       compNameLeft="BtnTextContactLeft"
       compNameRight="TitleContentOurRight"
      />

      <div class="container about-page__item  about-page__swiper-wrapper">
        <CarouselSwiper
        class="about-page__swiper"
        ></CarouselSwiper>
      </div>

      <DividedFlat 
       class="about-page__item"
       img="about_team"
       typetext="false"
       imgposition="right"
       compName="TitleContentTeam"
      />

      <DividedFlat 
       class="about-page__item"
       img="about_bottom"
       typetext="false"
       imgposition="left"
       compName="NumberTextComp"
       :img90="true"
       :reverse="true"
      />
      

    </main>

    <Footer class="center" />

  </div>
     
</template>



<script>

  import Headerone from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import burgerbtn from '@/components/primitives/BurgerBtn.vue'
  import burgerlist from '@/components/primitives/BurgerCollapceList.vue'
  import AboutVac from '@/components/ABOUT/AboutVac.vue'
  import Divided from '@/components/ABOUT/Divided.vue'
  import CarouselSwiper from '@/components/HOME/CarouselSwiper.vue'
  import DividedFlat from '@/components/ABOUT/DividedFlat.vue'

  export default {
            components: {
              Headerone,
              Footer,
              burgerbtn,
              burgerlist,
              AboutVac,
              Divided,
              CarouselSwiper,
              DividedFlat,
            },
            data() {
              return {
                iscross: false,
                navliclicktextoffstate:false,
                

                

              }
           },
          methods: {

            changenavliclicktextoffstate (newVal) {
              this.navliclicktextoffstate = newVal
            },

          },

          watch: {
            iscross (newVal) {
              this.navliclicktextoffstate = newVal 
            }
          },

  
  
  } 


  

</script>

<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  
  .wrapper {
    max-width: 1440px;


    }
    .header {
    display: flex;
    justify-content: space-between;
    }
    .burgerlist {
    position: absolute;
    }

    .menu-enter-active,
    .menu-leave-active {
    transition: all .5s;
    }
    .menu-enter,
    .menu-leave-to {
    opacity: 0;

    }
  .about-page {
    &__about-vac-comp {
      margin-bottom: 40px;
    }
    &__item {
      margin-bottom: 115px;
      @media (max-width:768px) {
         margin-bottom: 80px;
      }
    }
    &__item-tablet-dell {
      @media (max-width:768px) {
         display: none;
      }
    }
    &__swiper-wrapper {
      position: relative;
      
      &::after {
          content: "";
          display: block;
          width: 100%;
          height: 1%;
          position: absolute;
          left: 0; 
          bottom: 17%;
          background: transparent;
          box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
          -webkit-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
          -moz-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.21);
         @media (max-width:1399px) {
          bottom: 22%;
         }
         @media (max-width:1200px) {
          bottom: 10%;
         }
         @media (max-width:991px) {
          bottom: 14%;
         }
         @media (max-width:768px) {
            bottom: -4%;
         }
        }
    }
   
  }
  

</style>

