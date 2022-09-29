
<template>
        <div class="swiperBlock">
          <swiper
            class="parallax-slider"
            :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
            
            grabCursor
            :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }"
              
            
          >
            <!-- <div class="parallax-slider-navigation">
              <div class="nav-indicator prevArrow">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div class="nav-indicator nextArrow">
              <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div> -->

            <swiper-slide  class="parallax-slide">
              <div class="parallax-slide-image">
              
                <img src="../../assets/images/SwiperImgMaxSize.png" alt='img'>
                            
              </div>
            </swiper-slide>


            <swiper-slide  class="parallax-slide">
              <div class="parallax-slide-image">
              
                <img src="../../assets/images/SwiperMaxImg_1.png" alt='img'>
                        
              </div>
            </swiper-slide>


            <swiper-slide  class="parallax-slide">
              <div class="parallax-slide-image">
              
                <img src="../../assets/images/SwiperMaxImg_2.png" alt='img'>
                        
              </div>
            </swiper-slide>
            
            
            <swiper-slide  class="parallax-slide">
              <div class="parallax-slide-image">
              
                <img src="../../assets/images/SwiperImgMaxSize.png" alt='img'>
                        
              </div>
            </swiper-slide>

          </swiper>

          <swiper 
              class="parallax-slider swiper-min"
              :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
              :slides-per-view="4"
              :space-between="5"
              grabCursor
              :modules="[Thumbs]"
              watch-slides-progress
              @swiper="setThumbsSwiper"
              
              >
              <div class="parallax-slider-navigation">
                <div class="nav-indicator prevArrow">
                  <i class="fa-solid fa-chevron-left nav-indicator-arrow"></i>
                </div>
                <div class="nav-indicator nextArrow">
                <i class="fa-solid fa-chevron-right nav-indicator-arrow"></i>
                </div>
              </div>

           

              <swiper-slide  class="parallax-slide parallax-slide-min">
                <div class="parallax-slide-image">
                
                  <img src="../../assets/images/SwiperImgMini_1.png" alt='img'>
                          
                </div>
              </swiper-slide>


              <swiper-slide  class="parallax-slide parallax-slide-min">
                <div class="parallax-slide-image">
                
                  <img src="../../assets/images/SwiperImgMini_2.png" alt='img'>
                          
                </div>
              </swiper-slide>


              <swiper-slide  class="parallax-slide parallax-slide-min">
                <div class="parallax-slide-image">
                
                  <img src="../../assets/images/SwiperImgMini_3.png" alt='img'>
                          
                </div>
              </swiper-slide>

              <swiper-slide  class="parallax-slide parallax-slide-min">
                <div class="parallax-slide-image">
                
                  <img src="../../assets/images/SwiperImgMini_1.png" alt='img'>
                          
                </div>
              </swiper-slide>

            </swiper>
          
        </div>
</template>

<script>

import SwiperCore, { Navigation, Parallax,Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.scss";

import { ref } from 'vue';

SwiperCore.use([Navigation, Parallax,Thumbs]);

export default {
  data() {
    return {
      
    }
  },
  computed: {
   
  },
  components: {
    Swiper,
    SwiperSlide,
   
  },
  methods: {
    
  },
  setup() {
      const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
      return {
        Thumbs,
        thumbsSwiper,
        setThumbsSwiper,
      };
  },
};
</script>

<style  lang="scss" scoped>


 @import '../../assets/varmix.scss';


  


.swiperBlock {
      

  
		&__itemSlide {
      display: flex;
      @media (max-width:768px) {
         flex-direction: column;
      }
      
		}

   

		&__itemSlideImg {
      width: 40%;
          @media (max-width:768px) {
          width: 100%;
        }
   
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
		}

		&__itemSlideText {
       padding-left: 15px;
       padding-right: 50px;
       width: 60%;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-around;
      
       @media (max-width:768px) {
          width: 100%;
          padding-left: 0px;
          padding-right: 0px;
          p {
            padding-top:20px;
          }
       }
 

		}

    &__itemSlideTextTitle {
      
      width: 100%;
      @include letterContentSecondarySmallGray;
      color:#606276 ;

    }

    &__itemSlideTextRegular {
     
      width: 100%;
      @include letterSemiboldDarkBlue;
    }
}
.parallax-slider {
  position: relative;
}



.parallax-slide {
  height: 320px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width:1200px) {
     height: 320px !important;
  }
  @media (max-width:769px) {
     height: 650px !important;
  }
  @media (max-width:576px) {
     height: 578px !important;
  }
  @media (max-width:450px) {
     height: 543px !important;
  }
  @media (max-width:372px) {
     height: 511px !important;
  }
}
.parallax-slider-navigation {
  position: absolute;
  top: 50%;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
  
  @media (max-width:768px) {
     top: 31%;
  }
  @media (max-width:576px) {
     top: 31%;
  }
  @media (max-width:450px) {
     top: 26%;
  }
  @media (max-width:372px) {
     top: 22%;
  }
}
.parallax-slide-image {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-indicator {
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #6b77f6;
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
}
.parallax-slide-min {
  height: 100px !important;
}

</style>

