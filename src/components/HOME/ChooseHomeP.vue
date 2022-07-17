<template>
                

                    <div class="row">
                        <div class="col choose">
                            <div class="choose__carImgBox col-md-12 ">
                                <img src="../../assets/images/Corola1.png" class="choose__carImgBox_imgCor"  alt="corola">
                                <img src="../../assets/images/HondaCRV.png" class="choose__carImgBox_imgHon" alt="hondaCRV">
                            </div>

                            <div class="choose__textBox col-md-12">

                                <div class="choose__heading">
                                    <h2darkblue>Сhoose your dream vehicle in our catalog</h2darkblue>
                                </div>

                                <div class="choose__textRegular">
                                    <textregular>In our catalogue there are many models of vehicles. Choose your car to your liking.</textregular>
                                </div>

                                <div class="choose__btn">
                                    <btnbluetextwite>Inventory</btnbluetextwite>
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
            &_imgCor{
                margin-left:calc(100vw * #{$adaptiveMarLeftChoose});
                width: calc(100vw * #{$adaptiveCorolaChooseWidth});
                height: calc(100vw * #{$adaptiveCorolaChooseHeight});
                object-fit: cover;
            }
            &_imgHon{
                margin-top:calc(100vw * #{$adaptiveMarTopChoose});
                width: calc(100vw * #{$adaptiveHondaChooseWidth});
                height: calc(100vw * #{$adaptiveHondaChooseHeight});
                object-fit: cover;
            }
		}

		&__textBox {
            height: 300px;
            width: 50%;
            border-width:2px;
            border-style: solid;
            border-color: #000;
		}

		&__heading {
		}

		&__textRegular {
		}

		&__btn {
		}
}





 









  
</style>