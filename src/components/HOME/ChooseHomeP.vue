<template>
                

                    <div class="row">
                        <div class="col choose">
                            <div class="choose__carImgBox col-md-6 ">
                                <img src="../../assets/images/Corola1.png" class="choose__carImgBox_imgCor"  alt="corola">
                                <img src="../../assets/images/HondaCRV.png" class="choose__carImgBox_imgHon" alt="hondaCRV">
                            </div>

                            <div class="choose__textBox col-md-6">

                                <div class="choose__heading">
                                    <h2darkblue>Сhoose your dream vehicle in our catalog</h2darkblue>
                                </div>

                                <div class="choose__textBTNbox">
                                    <div class="choose__textRegular">
                                         <textregular>In our catalogue there are many models of vehicles. Choose your car to your liking.</textregular>
                                    </div>

                                    <div class="choose__btn">
                                        <btnbluetextwite class="choose__BtnComp">Inventory</btnbluetextwite>
                                    </div>
                                </div>

                                

                            </div>

                        </div>

                    </div>
                    

               
</template>

<script>
    import h2darkblue from '@/components/primitives/text/H2DarkBlue.vue'
    import textregular from '@/components/primitives/text/textRegular.vue'
    import btnbluetextwite from '@/components/primitives/BTN/btnBlueTextWhiteSlot.vue'

  export default {
    
    name: 'Advantages-Home',
    components: {
        h2darkblue,
        textregular,
        btnbluetextwite,


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
    
.choose {
    display: flex;
    @media (max-width:768px) {
       flex-direction: column;
    }

		&__carImgBox {
            height: 300px;
            width: 50%;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            position: relative;
            @media (max-width:768px) {
               width: 100%;
               height: 20vw;
               order:2;
            }
            &_imgCor{
                position:absolute;
                top: 40%;
                left: 60%;
                transform: translate(-50%,-50%);
                width: calc(100vw * #{$adaptiveCorolaChooseWidth});
                height: calc(100vw * #{$adaptiveCorolaChooseHeight});
                max-width: 428px;
                max-height: 187px;
                
           
            }
            &_imgHon{
                position:absolute;
                top: 60%;
                left:Min(300px,calc(100vw * #{$adaptiveMarLeftChoose}));
                transform: translate(-50%,-50%);
                width: calc(100vw * #{$adaptiveHondaChooseWidth});
                height: calc(100vw * #{$adaptiveHondaChooseHeight});
                max-width: 491px;
                max-height: 234px;
                @media (max-width:768px) {
                   left: 40%;
                }
            }
		}

		&__textBox {
           
            width: 50%;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            @media (max-width:768px) {
               width: 100%;
               display: flex;
               order:1;
            }
            @media (max-width:576px) {
               flex-direction: column;
            }
		}

        &__textBTNbox {
           @media (max-width:768px) {
              padding-left: 10px;
           }
           @media (max-width:576px) {
              padding-left: 0px;
           }
        }

		&__heading {
            @media (max-width:768px) {
               padding-right: 10px;
            }
            @media (max-width:576px) {
               padding-right: 0px;
            }
            @media (max-width:992px) {
               font-size: 2rem;
            }
            @media (max-width:420px) {
               font-size: 1.5rem;
               line-height: 1.8rem;
            }
		}

        

		&__textRegular {
		}

		&__btn {
		}
}





 









  
</style>