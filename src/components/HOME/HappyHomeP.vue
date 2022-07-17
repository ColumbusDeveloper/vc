<template>
                

                  
                        <div class="col hap">
                            <div class="hap__headingH2 ">
                                <div class="hap__text">
                                    <h2darkblue  >Happy customers</h2darkblue>
                                </div>
                                <div class="hap__text">
                                    <textregular  >Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. </textregular>
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

                                        </div>

                                    </div>
                                </div>

                                <div class="hap__numItem2">
                                    
                                    <div class="hap__shadowBtn">
                                        <div class="hap__shadowBtnText">

                                        </div>

                                    </div>
                                </div>

                                <div class="hap__numItem3">
                                   
                                    <div class="hap__shadowBtn">
                                        <div class="hap__shadowBtnText">

                                        </div>

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
    import h4darkblue from '../../components/primitives/text/H4DarkBlue.vue'
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
    border-width:2px;
    border-style: solid;
    border-color: #000;
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
            border-width:2px;
            border-style: solid;
            border-color: #000;
            position: relative;
            
        }

        &__numItem2 {
            grid-area: d;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            position: relative;
            
        }

        &__numItem3 {
            grid-area: t;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            position: relative;
            
        }

        &__numItemEmpty {
            grid-area: o;
            background-color: gray;
            
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
            border-width:2px;
            border-style: solid;
            border-color: #000;
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            height: 10vw;
            width: 17vw;
            @media (max-width:768px) {
               height: 8vw;
               width: 17vw;
            }
            @media (max-width:576px) {
                   height: 60px;
                   width: 100%;
            }

		}

		&__shadowBtnText {

		}



       

		
}





       










 









  
</style>