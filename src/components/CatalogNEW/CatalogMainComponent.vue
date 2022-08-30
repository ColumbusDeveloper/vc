<template>
    <div class="ma-mo"
   
    >

        <div class="ma-mo__detailed-search-box">

            
            <div class="ma-mo__global-search-header">
                    <p class="ma-mo__global-search-header-stable">Detailed search</p>
                    <p class="ma-mo__global-search-header-changeable">Clear filters</p>
            </div>   

            <div class="ma-mo__detailed-search-box-calk-container">

                    <div class="ma-mo__detailed-search-box-doubleinprange-price inp-container"  :class="{activeinp:pricedbinpform}">
                        <div class="ma-mo__open-arrow-box arr-box">
                            <p class="ma-mo__open-arrow-box-text arr-box-text">
                                Price
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows arr-box-arrows-box" @click="pricedbinpform=!pricedbinpform,getStartedInpPrice()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up arr-box-arrows-box-el1"><i class="fa-solid fa-angle-up" v-if="pricedbinpform"></i></div>
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Down arr-box-arrows-box-el2"><i class="fa-solid fa-angle-down" v-if="pricedbinpform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-doubleinprange-price-box inp-cont-box" v-if="pricedbinpform">

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box inp-cont-box-content">
                                <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box-min inp-cont-box-content-min">
                                    $$$
                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box-max inp-cont-box-content-max">
                                    $$$
                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-input-box inp-box">

                                <doubleinprangeprice class="ma-mo__detailed-search-box-doubleinprange-price-elem inp-box-component"
                                :carspropsprice="cars"
                                >

                                </doubleinprangeprice> 

                            </div>

                        </div>
                        
                    </div>

                    <div class="ma-mo__detailed-search-box-doubleinprange-year inp-container" :class="{activeinp:yeardbinpform}">

                        <div class="ma-mo__open-arrow-box">
                            <p class="ma-mo__open-arrow-box-text">
                                Year
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows" @click="yeardbinpform=!yeardbinpform,getStartedInpYear()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up"><i class="fa-solid fa-angle-up" v-if="yeardbinpform"></i></div>
                                 <div class="ma-mo__open-arrow-box-arrows-arrow-Down"><i class="fa-solid fa-angle-down" v-if="yeardbinpform===false"></i></div>
                            </div>
                        </div>
                       

                        <div class="ma-mo__detailed-search-box-doubleinprange-year-box inp-cont-box" v-if="yeardbinpform">

                            <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box inp-cont-box-content">
                                <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box-min inp-cont-box-content-min">
                                    $$$
                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box-max inp-cont-box-content-max">
                                    $$$
                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-year-input-box inp-box">

                                <doubleinprangeyear class="ma-mo__detailed-search-box-doubleinprange-year-elem inp-box-component"
                    
                                >

                                </doubleinprangeyear> 

                            </div>

                        </div>


                    </div>

                    

                    <div class="ma-mo__detailed-search-box-inprange inp-container" :class="{activeinp:kiloinpform}">  

                        <div class="ma-mo__open-arrow-box">
                            <p class="ma-mo__open-arrow-box-text">
                                Kilometers
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows" @click="kiloinpform=!kiloinpform,getStartedInpKilo()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up"><i class="fa-solid fa-angle-up" v-if="kiloinpform"></i></div>
                                 <div class="ma-mo__open-arrow-box-arrows-arrow-Down"><i class="fa-solid fa-angle-down" v-if="kiloinpform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-inprange-box inp-cont-box inp-cont-box" v-if="kiloinpform">

                            <div class="ma-mo__detailed-search-box-inprange-box-text-box inp-cont-box-content">
                                <div class="ma-mo__detailed-search-box-inprange-text inp-cont-box-content-elem">
                                    $$$
                                </div>

                            </div>

                            <div class="ma-mo__detailed-search-box-inprange-input-box inp-box">

                                <inprange class="ma-mo__detailed-search-box-inprange-input-box-elem inp-box-component"
                        
                                >

                                </inprange> 

                            </div>

                        </div>


                        
                    </div>

            </div>
            
            
                 
        </div>
        <div class="ma-mo__global-search-and-card-box">
                <div class="ma-mo__global-search">
                    <div class="ma-mo__global-search-item-left">
                        
                    </div>

                    <div class="ma-mo__global-search-item-right">
                        
                    </div>
                   
                </div>
                <div class="ma-mo__card-box">
                    <card 
                    v-for="car in cars" :key="car"
                    :car="car"
                    >

                    </card>
                </div>
        </div>

        

        

                     
                
                    
        
          

    </div>

</template>


<script>


    import card from '@/components/CatalogNEW/CardCatalog.vue'
    import doubleinprangeprice from '@/components/CatalogNEW/DoubleInputRangePrice.vue'
    import doubleinprangeyear from '@/components/CatalogNEW/DoubleInputRangeYear.vue'
    import inprange from '@/components/CatalogNEW/InputRange.vue'
    

    export default {
        name: 'Catalog-component',
        props:['catalogpropscars'],
        components: {
            card,
            doubleinprangeprice,
            doubleinprangeyear,
            inprange,
        },
        data() {
            return {

                cars: this.catalogpropscars,
                pricedbinpform:false,
                yeardbinpform:false,
                kiloinpform:false,      
            }

        },
        methods: {

           
           
            
            
           

           
                                               
        },
        
        
        watch: {

            catalogpropscars (val) {
                this.cars = val
            }
        },


        computed: {
           
            
           
        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';

    .ma-mo {
        display: flex;
		&__detailed-search-box {
            display: flex;
            flex-direction: column;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            width: 30%;
            
           
		}

        &__detailed-search-box-calk-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

		&__global-search-and-card-box {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            width: 70%;
            display: flex;
            flex-direction: column;
		}

		&__global-search {
            
            display: flex;
            
		}

		&__card-box {
            background-color: aqua;      
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media (max-width:768px) {
               grid-template-columns: 1fr;
            }
		}

        

		&__global-search-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            height: 55px;
         
		}

		&__global-search-header-stable {
            @include letterSemiboldDarkBlue;
            margin-right: 20px;
            padding: 0;
            margin-bottom: 0;
		}

		&__global-search-header-changeable {
            @include letterContentSecondarySmallGrayClear;
            color: #7481FF;
            margin-bottom: 0;
		}

        &__global-search-item-left {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            background-color: rgb(240, 240, 101);
            height: 55px;
            width: 50%;
        }

        &__global-search-item-right {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            background-color: rgb(163, 163, 53);
            height: 55px;
            width: 50%;
        }

        

        

        &__detailed-search-box-doubleinprange-price-elem {
            
        }

        

        &__detailed-search-box-doubleinprange-year-elem {

        }

        

        &__detailed-search-box-inprange-elem {

        }
        
        &__detailed-search-box-doubleinprange-price {

        }

        &__open-arrow-box {
            display: flex;
            justify-content: space-between;
            @include letterSemiboldDarkBlue;

        }

        &__open-arrow-box-text {

        }

        &__open-arrow-box-arrows {

        }

        &__open-arrow-box-arrows-arrow-Up {

        }

        &__open-arrow-box-arrows-arrow-Down {

        }

        &__detailed-search-box-doubleinprange-price-box {

        }

        &__detailed-search-box-doubleinprange-price-text-box {

        }

        &__detailed-search-box-doubleinprange-price-text-box-min {

        }

        &__detailed-search-box-doubleinprange-price-text-box-max {

        }

        &__detailed-search-box-doubleinprange-price-input-box {

        }

        &__detailed-search-box-doubleinprange-price-elem {

        }

        &__detailed-search-box-doubleinprange-year {

        }

        &__detailed-search-box-doubleinprange-year-box {

        }

        &__detailed-search-box-doubleinprange-year-text-box {

        }

        &__detailed-search-box-doubleinprange-year-text-box-min {

        }

        &__detailed-search-box-doubleinprange-year-text-box-max {
        }


        &__detailed-search-box-doubleinprange-year-input-box {

        }

        &__detailed-search-box-doubleinprange-year-elem {

        }

        &__detailed-search-box-inprange {

        }

        &__detailed-search-box-inprange-box {

        }

        &__detailed-search-box-inprange-box-text-box {

        }

        &__detailed-search-box-inprange-text {

        }

        &__detailed-search-box-inprange-input-box {

        }

        &__detailed-search-box-inprange-input-box-elem {

        }
        
        .inp-container {
            width: 300px;
            padding: 8px;
            border-width:1px;
            border-style: solid;
            border-color: #D7D7D7;
            margin-top: 5px;
            height: 45px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width:1440px) {
                width: 300px;
            }
            @media (max-width:1200px) {
                width: 275px;
            }
            @media (max-width:992px) {
                width: 200px;
            }
            @media (max-width:768px) {
                width: 150px;
            }
            

        }

        .arr-box {

        }

        .arr-box-text {

        }

        .arr-box-arrows-box {

        }

        .arr-box-arrows-box-el1 {

        }

        .arr-box-arrows-box-el2 {

        }

        .inp-cont-box {

        }

        .inp-cont-box-content {
            display: flex;
            justify-content: space-between;
            padding-bottom: 23px;
            @include   letterSemiboldDarkBlue   ;
            font-size: 1.5rem;
        }

        .inp-cont-box-content-min {

        }

        .inp-cont-box-content-max {

        }

        .inp-box {

        }

        .inp-box-component {

        }

        .inp-cont-box-content-elem {

        }

        .activeinp {
             height: 123px;
             padding-bottom: 25px;
        }








    }

    
    

        


       

        








</style>