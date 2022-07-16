<template>
            <div >
                    
                <div class="perfCar">
                    <div class=" row">
                        <div class="col-sm-5 perfCar__centralHeading">
                            <h2darkblue>Your perfect car in 5 easy steps</h2darkblue>
                        </div>
                    </div>
                    <div class=" row">
                        <div class="col perfCar__flexMain">
                            <div class="perfCar__leftPart col-md-6">
                                <div class="col perfCar__itemLeftPart">
                                    <triangle>1</triangle>
                                    <div class="col perfCar__itemLeftPartInnerFlexColumn">
                                        <titledark>First Contact</titledark>
                                        <textregular>Tell us what your dream vehicle is.</textregular>
                                    </div>
                                    
                                </div>
                                <div class="col perfCar__itemLeftPart">
                                    <triangle>1</triangle>
                                    <div class="col perfCar__itemLeftPartInnerFlexColumn">
                                        <titledark>First Contact</titledark>
                                        <textregular>Tell us what your dream vehicle is.</textregular>
                                    </div>
                                    
                                </div>
                                <div class="col perfCar__itemLeftPart">
                                    <triangle>2</triangle>
                                    <div class="col perfCar__itemLeftPartInnerFlexColumn">
                                        <titledark>Vehicle Selection</titledark>
                                        <textregular>One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.</textregular>
                                    </div>
                                    
                                </div>
                                <div class="col perfCar__itemLeftPart">
                                    <triangle>3</triangle>
                                    <div class="col perfCar__itemLeftPartInnerFlexColumn">
                                        <titledark>Secure Financing</titledark>
                                        <textregular>You work with a dedicated Qualified Agent to secure financing on your terms.</textregular>
                                    </div>
                                    
                                </div>
                                <div class="col perfCar__itemLeftPart">
                                    <triangle>4</triangle>
                                    <div class="col perfCar__itemLeftPartInnerFlexColumn">
                                        <titledark>Vehicle Delivery</titledark>
                                        <textregular>We deliver your car to your home or office for you to test drive.</textregular>
                                    </div>
                                    
                                </div>
                                <div class="col perfCar__itemLeftPart">
                                    <triangle>5</triangle>
                                    <div class="col perfCar__itemLeftPartInnerFlexColumn">
                                        <titledark>Getting Vehicle</titledark>
                                        <textregular>If you love the vehicle, you sign the paperwork and keep the car.</textregular>
                                    </div>
                                    
                                </div>
                                
                            </div>

                            <div class="perfCar__rightPart col-md-6">
                                <logorootcard />
                            </div>
                        </div>

                    </div>               
                </div>
                
                
                    

                    
                    

            </div>
  
</template>

<script>
    import h2darkblue from '@/components/primitives/text/H2DarkBlue.vue'
    import triangle from '@/components/primitives/graphic/triangle.vue'
    import titledark from '@/components/primitives/text/titleDark.vue'
    import textregular from '@/components/primitives/text/textRegular.vue'
    import logorootcard from '@/components/primitives/graphic/rectangleLogo.vue'

  export default {
    
    name: 'Perf-Home',
    components: {
        h2darkblue,
        triangle,
        titledark,
        textregular,
        logorootcard,


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
    .perfCar {
        

		&__leftPart {
            
            height: 850px;
            
		}

		&__rightPart {
            
            height: 850px;
            
          
		}
        &__flexMain {
            display: flex;
            @media (max-width:768px) {
               flex-direction: column;
            }
        }
        &__itemLeftPart {
            display: flex;
            align-items: center;
           
            height: 16.7%;
            
           
        }
        &__itemLeftPartInnerFlexColumn {
            display: flex;
            flex-direction: column;
            padding-left: 30px;
            justify-content: space-between;
        }
        &__centralHeading {
            padding-top: 60px;
            padding-bottom: 30px;
            @media (max-width:576px) {
               text-align: center;
            }

        }
        &__rightPart {
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width:768px) {
               height: auto;
            }
        }
       
}

  

  

  

  

  

  
</style>