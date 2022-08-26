<template>
    <div class="ma-mo"
   
    >

        <div class="ma-mo__detailed-search-box">
            <div class="ma-mo__global-search-header">
                        <p class="ma-mo__global-search-header-stable">Detailed search</p>
                        <p class="ma-mo__global-search-header-changeable">Clear filters</p>
            </div>         
        </div>
        <div class="ma-mo__global-search-and-card-box">
                <div class="ma-mo__global-search">
                   
                    

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

    

    export default {
        name: 'Catalog-component',
        props:['catalogpropscars'],
        components: {
            card,
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
            background-color: rgb(211, 95, 101);
            border-width:2px;
            border-style: solid;
            border-color: #000;
            width: 30%;
           
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
            background-color: yellow;
            height: 45px;
            border-width:2px;
            border-style: solid;
            border-color: #000;
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
            align-items: flex-end;
            border-width:2px;
            border-style: solid;
            border-color: #000;
         
		}

		&__global-search-header-stable {
            @include letterSemiboldDarkBlue;
            margin-right: 20px
		}

		&__global-search-header-changeable {
            @include letterContentSecondarySmallGrayClear;
            color: #7481FF;
		}
}


       

        








</style>