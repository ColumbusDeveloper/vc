<template>
                <div class="interest ">
                  <div class="row">
                          <div class="interest__heading col">
                            <div class="interest__heading-text-block">
                              <span class="interest__heading-text-block-text">Interesting to read</span>
                            </div>
                            <div class="interest__heading-btn-block">
                              <btnwhite> ALL  ARTICLES </btnwhite>
                            </div>          
                          </div>
                  </div>
                  <div class="row"> 
                          <div class="interest__disappear-med-part col">

                            <div class="interest__disappear-med-part-item">
                              <div class="interest__disappear-med-part-item-img-box">
                                <img src="../../assets/images/swiper_bottom_home_1.png" alt='img'>
                              </div>
                              <div class="interest__disappear-med-part-item-text-box">
                                  <div class="interest__disappear-med-part-item-text-box-data">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="interest__disappear-med-part-item-text-box-content">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>
                            <div class="interest__disappear-med-part-item">
                              <div class="interest__disappear-med-part-item-img-box">
                                <img src="../../assets/images/swiper_bottom_home_2.png" alt='img'>
                              </div>
                              <div class="interest__disappear-med-part-item-text-box">
                                  <div class="interest__disappear-med-part-item-text-box-data">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="interest__disappear-med-part-item-text-box-content">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>
                            <div class="interest__disappear-med-part-item interest__item-none">
                              <div class="interest__disappear-med-part-item-img-box">
                                <img src="../../assets/images/swiper_bottom_home_3.png" alt='img'>
                              </div>
                              <div class="interest__disappear-med-part-item-text-box">
                                  <div class="interest__disappear-med-part-item-text-box-data">
                                    <p>10 May, 2020</p>
                                  </div>
                                  <div class="interest__disappear-med-part-item-text-box-content">
                                    <p>How to save on buying a car?</p> 
                                    <p>Why is it better to buy from us</p>
                                  </div>
                              </div>      
                            </div>


                          </div>
                  </div>

                  <div class="row">
                    <div class="interest__swiper col">
                              <swiper/>
                    </div>
                  </div>


                          

                          

                          
                    
                </div>
</template>

<script>
 import btnwhite from '@/components/primitives/BTN/btnWhiteSlot185.vue'
 import swiper from '@/components/HOME/CarouselSwiperInterest.vue'
 

  export default {
    
    name: 'interesting-Home',
    components: {

      btnwhite,
      swiper,
        
       


    },
    data() {
      return {

        



      }
    },

    methods:{
      
    }





  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    

.interest {
  
  height: 560px;
  
  padding-top: 60px;
   
    &__item-none {
      @media (max-width:768px) {
         display: none;
      }
    }
  

    &__swiper {
      display: none;
      @media (max-width:576px) {
        display: block;
      }
    }

		&__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
		}

		&__heading-text-block {
     
      @media (max-width:576px) {
         width: 100%;
      }

		}

		&__heading-text-block-text {
      @include   letterH2textTitleDarkBlue   ;
      font-size: 2.81rem;
      @media (max-width:576px) {
         font-size: 2.4rem;
         line-height:2.6rem ;
      }

		}

		&__heading-btn-block {
      @media (max-width:576px) {
         display: none;
    }

   

    













  }
}

.interest {

		&__disappear-med-part {
      display: flex;
      justify-content: space-between;
      
      padding-top: 60px;
      @media (max-width:768px) {
         justify-content: space-between;
      }
      
    
      @media (max-width:576px) {
        display: none;
      }
		}

		&__disappear-med-part-item {
  
      width: 30%;
      @media (max-width:768px) {
         width: 50%;
         margin-left: 5px;
         margin-right: 5px;
      }
     
		}

		&__disappear-med-part-item-img-box {
      img {
            width: 100%;
            height: 100%;
            object-fit: cover;
      }
		}

		

		&__disappear-med-part-item-text-box-data {
      @include    letterContentSecondarySmallGray  ;
      
		}

		&__disappear-med-part-item-text-box-content {
      @include   letterSemiboldDarkBlue   ;
      
		}
}


 

















  
</style>