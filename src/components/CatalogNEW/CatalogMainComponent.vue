<template>
    <div class="ma-mo"
   
    >

        <div class="ma-mo__detailed-search-box">

            
            <div class="ma-mo__global-search-header">
                    <p class="ma-mo__global-search-header-stable">Detailed search</p>
                    <p class="ma-mo__global-search-header-changeable">Clear filters</p>
            </div>   

            <div class="ma-mo__detailed-search-box-calk-container">
                    <div class="ma-mo__detailed-search-box-doubleinprange">
                        <doubleinprange class="ma-mo__detailed-search-box-doubleinprange-elem"
                    
                        >

                        </doubleinprange> 
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
    import doubleinprange from '@/components/CatalogNEW/DoubleInputRange.vue'
    import inprange from '@/components/CatalogNEW/InputRange.vue'
    

    export default {
        name: 'Catalog-component',
        props:['catalogpropscars'],
        components: {
            card,
            doubleinprange,
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
            padding-left: 30px;
            padding-right: 30px;
            display: flex;
            flex-direction: column;
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

        &__detailed-search-box-doubleinprange {
            margin-top: 100px;   
            height: 5px;
            background-color:#D7D7D7 ;         
        }

        &__detailed-search-box-doubleinprange-elem {
            margin-top: 3px;
        }

        &__detailed-search-box-inprange {
            margin-top: 100px;   
        }
}


       

        








</style>