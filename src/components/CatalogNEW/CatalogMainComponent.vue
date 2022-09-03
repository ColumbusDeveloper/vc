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
                                    {{minpricerealnum[0]}} 
                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box-max inp-cont-box-content-max">
                                    {{maxpricerealnum[0]}}
                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-input-box inp-box">

                                <doubleinprangeprice class="ma-mo__detailed-search-box-doubleinprange-price-elem inp-box-component"
                                :carspropsprice="cars"
                                @minpricedata="minprice=$event"
                                @maxpricedata="maxprice=$event"
                            
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
                            <div class="ma-mo__open-arrow-box-arrows" @click="yeardbinpform=!yeardbinpform,showcalc=!showcalc,getStartedInpYear(),arr ()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up"><i class="fa-solid fa-angle-up" v-if="yeardbinpform"></i></div>
                                 <div class="ma-mo__open-arrow-box-arrows-arrow-Down"><i class="fa-solid fa-angle-down" v-if="yeardbinpform===false"></i></div>
                            </div>
                        </div>
                       

                        <div class="ma-mo__detailed-search-box-doubleinprange-year-box inp-cont-box" v-if="yeardbinpform">

                            <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box inp-cont-box-content">
                                <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box-min inp-cont-box-content-min">
                                    {{minyear[0]}} 
                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box-max inp-cont-box-content-max">
                                    {{maxyear[0]}}
                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-year-input-box inp-box">

                                <doubleinprangeyear class="ma-mo__detailed-search-box-doubleinprange-year-elem inp-box-component"
                                :carspropsyear="cars"
                                :qtyyears="qtyofyears"
                                :minyeartoinp="minyeartoinp"
                                :maxyeartoinp="maxyeartoinp"
                                @fromYearMin="setminyear"
                                @fromYearMax="setmaxyear"
                                @click="minmaxyeartoinp ()"
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
                                :carspropsinprange="cars"
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

                <div class="ma-mo__card-box ma-mo__card-box-calc" v-if="showcalc">
                    <card 
                    v-for="car in calculatedcars" :key="car"
                    :car="car"
                    >

                    </card>
                </div>

                <div class="ma-mo__card-box ma-mo__card-box-main-screen" v-else>
                    <ca
                    v-for="car in cars" :key="car"
                    :car="car"
                    >

                    </ca>
                </div>



                
                
                
        </div>

        

        

                     
                
                    
        
          

    </div>

</template>


<script>


    import card from '@/components/CatalogNEW/CardCatalog.vue'
    import ca from '@/components/CatalogNEW/Card.vue'
    import doubleinprangeprice from '@/components/CatalogNEW/DoubleInputRangePrice.vue'
    import doubleinprangeyear from '@/components/CatalogNEW/DoubleInputRangeYear.vue'
    import inprange from '@/components/CatalogNEW/InputRange.vue'
    

    export default {
        name: 'Catalog-component',
        props:['catalogpropscars'],
        components: {
            card,
            ca,
            doubleinprangeprice,
            doubleinprangeyear,
            inprange,
        
        },
        data() {
            return {
                cars: this.catalogpropscars,
                


                generalid:[],//разница между всеми id на сайте и суммой всех исключенных компонентами id
                calculatedcars:[],//объекты из массива cars, содержащие  id  из переменной generalid
                allid:[],//все имеющиеся в массиве cars id

                qtyofyears:null,
                arrofyears:[], 
                minyeartoinp:null,
                maxyeartoinp:null,
                inpyearstartstop:false,
                showcalc:false,
                yeardbinpform:false,
                kiloinpform:false,
                minyear:[2010],
                maxyear:[2015],
                idfrominpyear:[],



                pricedbinpform:false,//если true, то открывается компонент, устанавливаются стартовые значения minpricerealnum и maxpricerealnum, в методе getStartedInpPrice()
                minprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                maxprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                minpricerealnum:[11000],//хранит реальные цены на авто
                maxpricerealnum:[27000],//хранит реальные цены на авто
                idpriceinputcompgenerated:[],//хранит id элементов массива cars, сгенерированные компонентом
                iddeletedbypriceinp:[],//хранит id элементов массива cars, исключенные компонентом из массива cars потому что он их не выбрал
                arrOfPrices:[],//хранит уникальные цены на все представленные на сайте авто, в порядке возрастания


                
        
            }

        },
        methods: {
            SetAllId () {
                let a = this.cars.slice()
                for(let i=0; i<a.length; i++) {
                    let b = a[i].id
                    this.allid.push(b)
                }
                this.allid.sort(function(a,b){
                    return a-b
                })
                
            },
            
            findArrOfPrices () {
                let a = []
                this.cars.forEach(el=>{
                let b = el.price
                a.push(b)
                })
                a = [...new Set(a)]
                this.arrOfPrices = a
                this.arrOfPrices.sort(function(a, b) {
                return a - b;
                })
            },
            getStartedInpPrice() {
                if(this.pricedbinpform) {
                    this.minpricerealnum=[11000]
                    this.maxpricerealnum=[27000]
                }
            },
            
            
            getStartedInpYear() {
                let a = []
                this.cars.forEach(el => {
                    let b = el.year
                    a.push(b)
                })
                a = [...new Set(a)]
                this.qtyofyears = a.length
                this.inpyearstartstop=!this.inpyearstartstop
                if(this.inpyearstartstop) {
                    this.minyear=[2010]
                    this.maxyear=[2015]
                }
             
            },

            minmaxyeartoinp () {
                
                let b = this.arrofyears.indexOf(this.maxyear[0])
                this.maxyeartoinp = b + 1
                let a = this.arrofyears.indexOf(this.minyear[0])
                this.minyeartoinp = a + 1
            },

            

            setmaxyear (val) {
                

                if(val>=this.minyear) {
                    this.maxyear.unshift(val)
                    this.maxyear.splice(1)
                }
                              
            },
            setminyear (val) {
             
                if(val<=this.maxyear[0]) {
                    this.minyear.unshift(val)
                    this.minyear.splice(1)
                }
                 
            },
            
            arr () {
            let a = []
            this.cars.forEach(el => {
            let b = el.year
            a.push(b)
            });
            a=[...new Set(a)]
            let x = a.sort()
            let b = Object.values(x)
            b.forEach(el=>{
            let q = el
            this.arrofyears.push(q)
            })},

            
                                           
        },
        
        
        watch: {
            setMinPriceRealNumber (val) {
             
                if(val<=this.maxpricerealnum[0]) {
                    this.minpricerealnum.unshift(val)
                    this.minpricerealnum.splice(1)
                }
             
            },         
            setMaxPriceRealNumber (val) {
                
                if(val>=this.minpricerealnum[0]) {
                    this.maxpricerealnum.unshift(val)
                    this.maxpricerealnum.splice(1)
                }
            },

            catalogpropscars (val) {
                this.cars = val
            },
            selectidfromyear (val) {
                this.idfrominpyear = val
                this.idfrominpyear = [...new Set(this.idfrominpyear)]
                this.generalid = val
                this.generalid = [...new Set(this.generalid)]
            },
            selectidfromprice(val) {
                let a = val
                this.idpriceinputcompgenerated = a
                let b = this.allid.slice()
                this.idpriceinputcompgenerated.forEach(el=>{
                    let a = el
                    let s = b.indexOf(a)
                    b.splice(s,1)
                    this.iddeletedbypriceinp = b
                })
                
                
            },
            generalid (val) {
                let a = Object.values(val)
                if (a) {
                    this.calculatedcars = []
                    for(let i = 0; i<a.length; i++) {
                        let b = a[i]
                        for(let i = 0; i<this.cars.length; i++) {
                            let h = this.cars[i].id
                            if(b===h) {
                                this.calculatedcars.push(this.cars[i])
                            }
                        }
                    }
                }
            },
           
            
        },


        computed: {

            selectidfromyear() {
            let d = []  
            for(let i = 0; i<this.arrofyears.length;i++) {
            let a = this.arrofyears[i]
                if(a<=this.maxyear&&a>=this.minyear) {
                    this.cars.forEach(el=>{
                        let m = el
                        if (m.year===a) {
                        d.push(m.id)
                        }
                    })
                }
            }
            return d
            },
            selectidfromprice() {
            let d = []  
            for(let i = 0; i<this.arrOfPrices.length;i++) {
            let a = this.arrOfPrices[i]
                if(a<=this.maxpricerealnum&&a>=this.minpricerealnum) {
                    this.cars.forEach(el=>{
                        let m = el
                        if (m.price===a) {
                        d.push(m.id)
                        }
                    })
                }
            }
            return d
            },
            

            findQtyOfPrices () {
                let a = []
                this.cars.forEach(el=>{
                let b = el.price
                a.push(b)
                })
                a = [...new Set(a)]
                return a.length
            },
            setMinPriceRealNumber () {
                let a = this.minprice - 1//массив arrOfPrices отсортирован по возрастанию (это очень важно), соответственно, цифры в модели будут 
                return this.arrOfPrices[a]//совпадать с индексами значений цен, за минусом 1, так массивы начинаются с 0, 
            },          //длина (max) инпута соотвествтует длинне массива из всех уникальных значений, зарегистрированных на сайте цен, установил в методе slideP () выше
            setMaxPriceRealNumber () {//аналогично написанному выше
                let b = this.maxprice - 1
                return this.arrOfPrices[b]
            },
            

            
           
        },
        

        mounted () {
            this.findArrOfPrices ()
            this.SetAllId ()
        },
        created() {
          
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
           
            width: 30%;
            
           
		}

        &__detailed-search-box-calk-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

		&__global-search-and-card-box {
            
            width: 70%;
            display: flex;
            flex-direction: column;
		}

		&__global-search {
            
            display: flex;
            
		}

		&__card-box {
          
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
            
            height: 55px;
            width: 50%;
        }

        &__global-search-item-right {
            
            height: 55px;
            width: 50%;
        }


        &__open-arrow-box {
            display: flex;
            justify-content: space-between;
            @include letterSemiboldDarkBlue;

        }

        

        .inp-container {
            width: 300px;
            padding: 8px;
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
        .inp-cont-box-content {
            display: flex;
            justify-content: space-between;
            padding-bottom: 23px;
            @include   letterSemiboldDarkBlue   ;
            font-size: 1.5rem;
        }
   

        .activeinp {
             height: 123px;
             padding-bottom: 25px;
        }

       

        


    }

    
    
</style>