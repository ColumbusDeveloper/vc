<!-- <template>
              <div class="swiperBlock">
                
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
  


</template>
<script>
  
  

  

 
  export default {
    components: {
     
      
    },
    data () {
      return {
 
      }
    },
    methods:{
       
    },
    computed: {
       
    },
    
  }

</script>

<style lang="scss" scoped>
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

  
</style> -->



<template>
  <swiper
    class="parallax-slider"
    :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
    loop
    
 
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
    <swiper-slide
      class="parallax-slide"
      v-for="image in images"
      :key="image.id"
    >
      <div
        class="parallax-slide-image"
        
      >
        <img :src="image.imageUrl" />
      </div>
    </swiper-slide>
  </swiper>
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
      parallaxSwiperWidth: 0,
      images: [
        { id: 1, imageUrl: require("../../assets/images/HondaCRV.png") },
        { id: 2, imageUrl: require("../../assets/images/HondaCRV.png") },
        { id: 3, imageUrl: require("../../assets/images/HondaCRV.png") },
      ],
    };
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
   
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
};
</script>

<style scoped>
.parallax-slider {
  position: relative;
}
.parallax-slide {
  height: 500px !important;
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

