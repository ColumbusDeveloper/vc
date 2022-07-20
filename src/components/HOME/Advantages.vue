<template>
                <div class="advantages">
                    <div class="row">
                        <div class="col advantages__centralHeading">
                            <h2darkblue>Advantages of working with us</h2darkblue>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="advantagesFlex">
                                <div class="advantagesFlex__mainFlexPartItem1 col-lg-4">
                                    <img src="../../assets/images/triangle__top_img.png" alt="triangle">
                                    <div class="advantagesFlex__iconTextBlock1">
                                        <img src="../../assets/images/IconUnion.png" alt="icon">
                                        <titledark class="advantagesFlex__title">Vehicle Delivery</titledark>
                                        <div class="advantagesFlex__regularText1 ">
                                            <textregular >We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.</textregular>
                                        </div>
                                        
                                    </div>

                                </div>
                                <div class="advantagesFlex__mainFlexPartItem2 col-lg-4">
                                    <img src="../../assets/images/triangle__bot_img.png" alt="triangle">
                                    <div class="advantagesFlex__iconTextBlock2">
                                        <img src="../../assets/images/IconBook.png" alt="icon">
                                        <titledark class="advantagesFlex__title">Auto Financing</titledark>
                                        <div class="advantagesFlex__regularText2">
                                            <textregular class="advantagesFlex__regularText">We partner with the largest lenders in Canada to offer the strongest financing options in the industry including rates as low as 4%</textregular>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="advantagesFlex__mainFlexPartItem3 col-lg-4">
                                    <img src="../../assets/images/triangle__top_img.png" alt="triangle">
                                    <div class="advantagesFlex__iconTextBlock3">
                                        <img src="../../assets/images/IconCar.png" alt="icon">
                                        <titledark class="advantagesFlex__title">Huge Inventory</titledark>
                                        <div class="advantagesFlex__regularText3">
                                            <textregular class="advantagesFlex__regularText">We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</textregular>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
</template>

<script>
    import h2darkblue from '@/components/primitives/text/H2DarkBlue.vue'
    import titledark from '@/components/primitives/text/titleDark.vue'
    import textregular from '@/components/primitives/text/textRegular.vue'

  export default {
    
    name: 'Advantages-Home',
    components: {
        h2darkblue,
        titledark,
        textregular,


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
    

.advantages {

		&__centralHeading {
            padding-top: 90px;
            padding-bottom: 30px;
		}
}

.advantagesFlex {
    display: flex;
    @media (max-width:992px) {
       flex-direction: column;
    }

		&__mainFlexPartItem1 {
            position: relative;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

		}

		&__mainFlexPartItem2 {
            position: relative;
       
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

		}

		&__mainFlexPartItem3 {
            position: relative;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
		}

        &__iconTextBlock1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 10;
         
            img {
                height: 42.85px;
                width: 54.72px;
            }
        }
        &__iconTextBlock2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 10;
            img {
                height: 50px;
                width: 39px;
            }
        }
        &__iconTextBlock3 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 10;
            img {
                height: 33px;
                width: 66px;
            }
        }
        &__regularText1 {
            text-align: center;
            width:320px ;
            height: 116px;
            padding-top: 30px;
            @media (max-width:768px) {
               width: 50vw;
               padding-top: 30px;
            }
        }
        &__regularText2 {
            text-align: center;
            width:204px ;
            height: 174px;
            padding-top: 30px;
            @media (max-width:768px) {
               width: 30vw;
            }
        }
        &__regularText3 {
            text-align: center;
            width:275px ;
            height: 116px;
            padding-top: 30px;
            @media (max-width:768px) {
               padding-top: 30px;
               width: 60vw;
            }
        }
        &__title {
            padding-top: 15px;
            padding-bottom: 5px;
        }
}









  
</style>