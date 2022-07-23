
<template>
<div class="swiperBlock">
  <swiper
    class="parallax-slider"
    :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
 
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
                      <img src="../../assets/images/SwiperImg.png" alt='img'>
                    </div>
                    <div class="swiperBlock__itemSlideText">
                        <div class="swiperBlock__itemSlideTextTitle">
                          <p>Laura Chaisson</p>
                        </div>
                        <div class="swiperBlock__itemSlideTextRegular">
                          <p>In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</p>
                        </div>
                    </div>      
                  </div>
      </div>
    </swiper-slide>

    <swiper-slide  class="parallax-slide">
      <div class="parallax-slide-image">
       <div class="swiperBlock__itemSlide">
                    <div class="swiperBlock__itemSlideImg">
                      <img src="../../assets/images/SwiperImg.png" alt='img'>
                    </div>
                    <div class="swiperBlock__itemSlideText">
                        <div class="swiperBlock__itemSlideTextTitle">
                          <p>Laura Chaisson</p>
                        </div>
                        <div class="swiperBlock__itemSlideTextRegular">
                          <p>In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</p>
                        </div>
                    </div>      
                  </div>
      </div>
    </swiper-slide>

    <swiper-slide  class="parallax-slide">
      <div class="parallax-slide-image">
       <div class="swiperBlock__itemSlide">
                    <div class="swiperBlock__itemSlideImg">
                      <img src="../../assets/images/SwiperImg.png" alt='img'>
                    </div>
                    <div class="swiperBlock__itemSlideText">
                        <div class="swiperBlock__itemSlideTextTitle">
                          <p>Laura Chaisson</p>
                        </div>
                        <div class="swiperBlock__itemSlideTextRegular">
                          <p>In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</p>
                        </div>
                    </div>      
                  </div>
      </div>
    </swiper-slide>

  </swiper>
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
  height: 550px !important;
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
</style>

