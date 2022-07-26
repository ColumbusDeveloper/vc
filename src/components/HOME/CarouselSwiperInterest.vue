
<template>
<div >
          
          
          <div class="swiperBlock2">
            <swiper
              class="parallax-slider"
              :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
              :slides-per-view="1"
              
          
              grabCursor
              @swiper="onSwiperInitialized"
            >
              <div class="parallax-slider-navigation">
                <div class="nav-indicator prevArrow">
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="nav-indicator nextArrow">
                <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>

            

              <swiper-slide  class="parallax-slide">
                <div class="parallax-slide-image">
                <div class="swiperBlock__itemSlide">
                              <div class="swiperBlock__itemSlideImg">
                                <img src="../../assets/images/swiper_bottom_home_1.png" alt='img'>
                              </div>
                              <div class="swiperBlock__itemSlideText">
                                  <div class="swiperBlock__itemSlideTextTitle">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="swiperBlock__itemSlideTextRegular">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>
                </div>
              </swiper-slide>

              

              <swiper-slide  class="parallax-slide">
                <div class="parallax-slide-image">
                            <div class="swiperBlock__itemSlide">
                              <div class="swiperBlock__itemSlideImg">
                                <img src="../../assets/images/swiper_bottom_home_2.png" alt='img'>
                              </div>
                              <div class="swiperBlock__itemSlideText">
                                  <div class="swiperBlock__itemSlideTextTitle">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="swiperBlock__itemSlideTextRegular">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>
                </div>
              </swiper-slide>

              <swiper-slide  class="parallax-slide">
                <div class="parallax-slide-image">
                <div class="swiperBlock__itemSlide">
                              <div class="swiperBlock__itemSlideImg">
                                <img src="../../assets/images/swiper_bottom_home_3.png" alt='img'>
                              </div>
                              <div class="swiperBlock__itemSlideText">
                                  <div class="swiperBlock__itemSlideTextTitle">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="swiperBlock__itemSlideTextRegular">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>
                </div>
              </swiper-slide>
              <swiper-slide  class="parallax-slide">
                <div class="parallax-slide-image">
                <div class="swiperBlock__itemSlide">
                              <div class="swiperBlock__itemSlideImg">
                                <img src="../../assets/images/swiper_bottom_home_1.png" alt='img'>
                              </div>
                              <div class="swiperBlock__itemSlideText">
                                  <div class="swiperBlock__itemSlideTextTitle">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="swiperBlock__itemSlideTextRegular">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>
                </div>
              </swiper-slide>

              

              <swiper-slide  class="parallax-slide">
                <div class="parallax-slide-image">
                <div class="swiperBlock__itemSlide">
                              <div class="swiperBlock__itemSlideImg">
                                <img src="../../assets/images/swiper_bottom_home_3.png" alt='img'>
                              </div>
                              <div class="swiperBlock__itemSlideText">
                                  <div class="swiperBlock__itemSlideTextTitle">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="swiperBlock__itemSlideTextRegular">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>
                </div>
              </swiper-slide>

            </swiper>
          </div>
</div>

</template>

<script>
// swiper core
import SwiperCore, { Navigation, Parallax } from "swiper";
// swiper vue
import { Swiper, SwiperSlide } from "swiper/vue";
// import swiper css
import "swiper/swiper.scss";
// import css for components
// navigation
import "swiper/components/navigation/navigation.scss";
// font awesome icons

SwiperCore.use([Navigation, Parallax]);



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
};
</script>

<style  lang="scss" scoped>


 @import '../../assets/varmix.scss';








.swiperBlock1 .parallax-slider-navigation {
  display: none;
}

.swiperBlock {
  border-width:3px;
  border-style: solid;
  border-color: #000;
  @media (max-width:768px) {
     display: none;
  }
      

  
		&__itemSlide {
      display: flex;
      flex-direction: column;
      border-width:3px;
      border-style: solid;
      border-color: red;
      
      
		}

   

		&__itemSlideImg {
      
   
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
		}

		&__itemSlideText {
       
      
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-around;
      
       @media (max-width:768px) {
          width: 100%;
          padding-left: 0px;
          padding-right: 0px;
          
       }
 

		}

    &__itemSlideTextTitle {
      
      width: 100%;
      @include letterContentSecondarySmallGray;
      color:#606276 ;

    }

    &__itemSlideTextRegular {
      display: flex;
      flex-direction: column;
      
     
      width: 100%;
      @include letterSemiboldDarkBlue;
      p {
        line-height: 0.9rem;
      }
    }
}
.parallax-slider {
  position: relative;
}
.parallax-slide {
  height: fit-content !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width:1200px) {
     height: 450px !important;
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
     top: 45%;
  }
  @media (max-width:450px) {
     top: 50%;
  }
  @media (max-width:372px) {
     top: 50%;
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
</style>

