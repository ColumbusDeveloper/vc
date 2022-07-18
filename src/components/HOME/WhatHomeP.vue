<template>
                

                  
                        <div class="col hap">
                            <div class="hap__headingH2 ">
                                <div class="hap__text">
                                    <h2darkblue  >Happy customers</h2darkblue>
                                </div>
                                <div class="hap__text ">
                                    <textregular class="hap__textRegular" >Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. </textregular>
                                </div>
                                
                                
                            </div>

                            <div class="hap__headingH4 ">
                                <div class="hap__text">
                                    <h4darkblue  >What are you waiting? Get started right now!</h4darkblue>
                                </div>
                                <div class="hap__text">
                                    <btnbluetextwite100  >Request a Car</btnbluetextwite100>
                                </div>                            
                            </div>

                            <div class="hap__num ">
                                <div class="hap__numItem1">
                                    
                                    <div class="hap__shadowBtn">
                                        <div class="hap__shadowBtnText">
                                            <div class="hap__headingH2 hap__padMob">
                                                <h2darkblue class="hap__H2card">7,988+</h2darkblue>
                                            </div>
                                            <div class="hap__BtnTextSmall hap__padMob">
                                                <textregular class="hap__textRegularCard">Sold Cars</textregular>
                                            </div>
                                        </div>
                                        <img class="hap__img" src="../../assets/images/Rectangle24.png" alt="rec">

                                    </div>
                                </div>

                                <div class="hap__numItem2">
                                    
                                    <div class="hap__shadowBtn">
                                        <div class="hap__shadowBtnText">
                                            <div class="hap__headingH2 hap__padMob">
                                                <h2darkblue class="hap__H2card">123</h2darkblue>
                                            </div>
                                            <div class="hap__BtnTextSmall hap__padMob">
                                                <textregular class="hap__textRegularCard">Experts Across Canada</textregular>
                                            </div>
                                        </div>
                                        <img class="hap__img" src="../../assets/images/Rectangle24.png" alt="rec">

                                    </div>
                                </div>

                                <div class="hap__numItem3">
                                   
                                    <div class="hap__shadowBtn">
                                        <div class="hap__shadowBtnText">
                                            <div class="hap__headingH2 hap__padMob">
                                                <h2darkblue class="hap__H2card">16,974+</h2darkblue>
                                            </div>
                                            <div class="hap__BtnTextSmall hap__padMob">
                                                <textregular class="hap__textRegularCard">Vehicles To Choose From</textregular>
                                            </div>
                                        </div>
                                        <img class="hap__img" src="../../assets/images/Rectangle24.png" alt="rec">

                                    </div>
                                </div>

                                <div class="hap__numItemEmpty">

                                </div>

                            </div>
                        </div>

               
                    

               
</template>

<script>
    import h2darkblue from '@/components/primitives/text/H2DarkBlue.vue'
    import textregular from '@/components/primitives/text/textRegular.vue'
    import btnbluetextwite100 from '@/components/primitives/BTN/btnBlueTextWhiteSlotMob100.vue'
    // import btnbluetextwite from '@/components/primitives/BTN/btnBlueTextWhiteSlot.vue'
    import h4darkblue from '../primitives/text/H4DarkBlue.vue'
  export default {
    
    name: 'Advantages-Home',
    components: {
        h2darkblue,
        textregular,
        h4darkblue,
        btnbluetextwite100,
        // btnbluetextwite,

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
    

.hap {
    padding-top: 30px;
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: $adaptiveHappyRow $adaptiveHappyRow $adaptiveHappyRow $adaptiveHappyRow $adaptiveHappyRow $adaptiveHappyRow;
    grid-template-areas: 
        "a a a c c c"
        "a a a c c c"
        "a a a c c c"
        "b b b c c c"
        "b b b c c c"
        "b b b c c c";
        @media (max-width:768px) {
           grid-template-rows: $adaptiveHappyRow $adaptiveHappyRow $adaptiveHappyRowMid $adaptiveHappyRowMid $adaptiveHappyRow $adaptiveHappyRow;
           grid-template-areas: 
            "a a a a a a"
            "a a a a a a"
            "c c c c c c"
            "c c c c c c"
            "b b b b b b"
            "b b b b b b";
        }

		&__headingH2 {
            grid-area: a;
         
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            @media (max-width:768px) {
               justify-content: space-around;
            }
            
		}

		&__headingH4 {
            grid-area: b;
      
            display: flex;
            flex-direction: column;
            @media (max-width:768px) {
               justify-content: space-around;
            }
            
		}

		&__num {
            grid-area: c;
    
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: auto auto ;
            grid-template-areas: 
                "f t "
                "d o ";
                @media (max-width:576px) {
                    grid-template-columns: repeat(1,1fr);
                    grid-template-rows: 70px 70px 70px;
                    grid-template-areas: 
                        "f"
                        "d"
                        "t";
                }
                
		}

        &__numItem1 {
            grid-area: f;
           
            position: relative;
            
            
        }

        &__numItem2 {
            grid-area: d;
          
            position: relative;
            
            
        }

        &__numItem3 {
            grid-area: t;
          
            position: relative;
            
            
        }

        &__numItemEmpty {
            grid-area: o;
       
            
        }

        &__text {
            padding-top: 30px;
            padding-bottom: 30px;
            @media (max-width:768px) {
               padding-top: 0px;
               padding-bottom: 0px;
            }
        }

		&__shadowBtn {
      
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            
            @media (max-width:576px) {
                   height: 60px;
                   width: 100%;
            }

		}

		

        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &__shadowBtnText {
            position:absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        &__textRegular {
            font-size: 1.2rem;
        }
        &__textRegularCard {
            @media (max-width:992px) {
               font-size: 0.5rem;
               line-height: 0;
            }
            
        }
        &__H2card {
            font-size: 1.5rem;
        }

        &__padMob {
            @media (max-width:576px) {
               padding-left: 30px;
               padding-top: 5px;
            }
        }



       

		
}





       










 









  
</style>