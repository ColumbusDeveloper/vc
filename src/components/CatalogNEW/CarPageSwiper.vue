
<template>
        <div class="swiperBlock">
          <swiper
            class="parallax-slider swiperBlock__swp-in-top-item"
            :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
            
            grabCursor
            :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }"
              
            
          >
           

            <swiper-slide  class="parallax-slide"
            :style="{height:imgheightb+'px'}"
            >
              <div class="parallax-slide-image"
              :style="{height:imgheightb+'px'}"
              >
              
                <img src="../../assets/images/SwiperImgMaxSize.png" alt='img'>
                            
              </div>
            </swiper-slide>


            <swiper-slide  class="parallax-slide"
            :style="{height:imgheightb+'px'}"
            >
              <div class="parallax-slide-image"
              :style="{height:imgheightb+'px'}"
              >
              
                <img ref="heightb" src="../../assets/images/SwiperMaxImg_1.png" alt='img'>
                        
              </div>
            </swiper-slide>


            <swiper-slide  class="parallax-slide"
            :style="{height:imgheightb+'px'}"
            >
              <div class="parallax-slide-image"
              :style="{height:imgheightb+'px'}"
              >
              
                <img src="../../assets/images/SwiperMaxImg_2.png" alt='img'>
                        
              </div>
            </swiper-slide>
            
            
            <swiper-slide  class="parallax-slide"
            :style="{height:imgheightb+'px'}"
            >
              <div class="parallax-slide-image"
              :style="{height:imgheightb+'px'}"
              >
              
                <img src="../../assets/images/SwiperImgMaxSize.png" alt='img'>
                        
              </div>
            </swiper-slide>

          </swiper>

          <swiper 
              class="parallax-slider swiper-min swiperBlock__swp-in-bottom-item"
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

           

              <swiper-slide  class="parallax-slide "
              :style="{height:imgheightsm +'px'}"
              >
                <div class="parallax-slide-image"
                :style="{height:imgheightsm +'px'}"
                >
                
                  <img  ref="heightsm"  src="../../assets/images/SwiperImgMini_1.png" alt='img'>
                          
                </div>
              </swiper-slide>


              <swiper-slide  class="parallax-slide"
              :style="{height:imgheightsm +'px'}"
              >
                <div class="parallax-slide-image"
                :style="{height:imgheightsm +'px'}"
                >
                
                  <img src="../../assets/images/SwiperImgMini_2.png" alt='img'>
                          
                </div>
              </swiper-slide>


              <swiper-slide  class="parallax-slide "
              :style="{height:imgheightsm +'px'}"
              >
                <div class="parallax-slide-image"
                :style="{height:imgheightsm +'px'}"
                >
                
                  <img src="../../assets/images/SwiperImgMini_3.png" alt='img'>
                          
                </div>
              </swiper-slide>

              <swiper-slide  class="parallax-slide "
              :style="{height:imgheightsm +'px'}"
              >
                <div class="parallax-slide-image"
                :style="{height:imgheightsm +'px'}"
                >
                
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
      imgheightb:366,
      imgheightsm:90,
    }
  },
  computed: {
   
  },
  components: {
    Swiper,
    SwiperSlide,
   
  },
  methods: {
    resizeHandler() {
     
     this.imgheightb = this.$refs.heightb.offsetHeight
     this.imgheightsm = this.$refs.heightsm.offsetHeight    
   },

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
  
  created() {
  
    window.addEventListener("resize", this.resizeHandler)
    window.addEventListener("hashchange", this.resizeHandler, false)
  
  },
  
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler)
    window.addEventListener("hashchange", this.resizeHandler, false)
  },



};
</script>

<style  lang="scss" scoped>


 @import '../../assets/varmix.scss';


  


.swiperBlock {

    &__swp-in-top-item {
      margin-bottom: 5px;
    }

    &__swp-in-bottom-item {
      margin-bottom: 5px;
    }
      

  
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
 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
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
  img {
    @media (max-width:992px) {
       width: 100%;
    }
  }
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

