<template>
    <div class="swiperBlock">
                <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="50"
                navigation
                loop
                
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                
              
              >
               
                
                <swiper-slide>
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
                </swiper-slide>

                <swiper-slide>
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
                </swiper-slide>
                <swiper-slide>
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
                </swiper-slide>
              
              
                
              </swiper>

  
    </div>
  


</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  

  // Import Swiper styles
  import 'swiper/scss';
  import 'swiper/scss/navigation';
  import 'swiper/scss/pagination';
  import 'swiper/scss/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data () {
      return {
        
      }
    },
    methods:{
        
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/varmix.scss';


  


.swiperBlock {
      

    
    
    
    


    

		&__itemSlide {
      display: flex;
      
		}

		&__itemSlideImg {
      width: 40%;
   
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
       border-width:2px;
       border-style: solid;
       border-color: #000;
 

		}

    &__itemSlideTextTitle {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      width: 100%;

    }

    &__itemSlideTextRegular {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      width: 100%;
    }
}

  .swiper-button-prev:after,
  .swiper-button-next:after {
    display: none;
  } 



</style>

