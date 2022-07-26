<template>
                <div class="interest">

                          <div class="interest__heading">
                            <div class="interest__heading-text-block">
                              <span class="interest__heading-text-block-text">Interesting to read</span>
                            </div>
                            <div class="interest__heading-btn-block">
                              <btnwhite> ALL  ARTICLES </btnwhite>
                            </div>          
                          </div>

                          <div class="interest__swiper">
                              <swiper/>
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
  width: 100%;
  height: 500px;
  border-width:2px;
  border-style: solid;
  border-color: #000;
  padding-top: 100px;

		&__heading {
      display: flex;
      justify-content: space-between;
		}

		&__heading-text-block {
      border-width:2px;
      border-style: solid;
      border-color: #000;
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















  
</style>