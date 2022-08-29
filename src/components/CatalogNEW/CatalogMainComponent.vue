<template>
    <div class="ma-mo"
   
    >

        <div class="ma-mo__detailed-search-box">

            
            <div class="ma-mo__global-search-header">
                    <p class="ma-mo__global-search-header-stable">Detailed search</p>
                    <p class="ma-mo__global-search-header-changeable">Clear filters</p>
            </div>   

            <div class="ma-mo__detailed-search-box-calk-container">

                    <div class="ma-mo__detailed-search-box-doubleinprange-price">

                        <div class="make-model__arrow-box" @click="form=!form,getStarted()">
                            <div class="make-model__arrow-Up"><i class="fa-solid fa-angle-up" v-if="form"></i></div>
                            <div class="make-model__arrow-Down"><i class="fa-solid fa-angle-down" v-if="form===false"></i></div>
                        </div>
                        
                        <div class="ma-mo__detailed-search-box-doubleinprange-price-box">

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box">
                                <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box-min">

                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box-min">

                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-input-box">

                                <doubleinprangeprice class="ma-mo__detailed-search-box-doubleinprange-price-elem"
                    
                                >

                                </doubleinprangeprice> 

                            </div>

                        </div>
                        
                    </div>

                    <div class="ma-mo__detailed-search-box-doubleinprange-year">
                        <doubleinprangeyear class="ma-mo__detailed-search-box-doubleinprange-year-elem"
                    
                        >

                        </doubleinprangeyear> 
                    </div>

                    <div class="ma-mo__detailed-search-box-inprange">   
                        <inprange class="ma-mo__detailed-search-box-inprange-elem"
                        
                        >

                        </inprange> 
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

        

            &__detailed-search-box-doubleinprange-price {
                width: 300px;
                padding: 15px;
                border-width:2px;
                border-style: solid;
                border-color: #000;
                margin-top: 5px;
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

            &__detailed-search-box-doubleinprange-price-elem {
               
            }

            &__detailed-search-box-doubleinprange-year {
                width: 300px;
                padding: 15px;
                border-width:2px;
                border-style: solid;
                border-color: #000;
                margin-top: 5px;
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

            &__detailed-search-box-doubleinprange-year-elem {

            }

            &__detailed-search-box-inprange {
                width: 300px;
                padding: 15px;
                border-width:2px;
                border-style: solid;
                border-color: #000;
                margin-top: 5px;
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

            &__detailed-search-box-inprange-elem {

            }
            


        

        
}


       

        








</style>