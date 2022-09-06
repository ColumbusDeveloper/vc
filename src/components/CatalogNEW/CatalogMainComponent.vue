<template>
    <div class="ma-mo"
   
    >
    

        <div class="ma-mo__detailed-search-box">

            
            <div class="ma-mo__global-search-header">
                    <p class="ma-mo__global-search-header-stable">Detailed search</p>
                    <p class="ma-mo__global-search-header-changeable">Clear filters</p>
            </div>   

            <div class="ma-mo__detailed-search-box-calk-container">

                    <div class="ma-mo__detailed-search-box-doubleinprange-price inp-container"  :class="{activeinpprice:pricedbinpform}">
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

                    <div class="ma-mo__detailed-search-box-doubleinprange-year inp-container" :class="{activeinpyear:yeardbinpform}">

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
                                    {{minyearrealnum[0]}}
                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box-max inp-cont-box-content-max">
                                    {{maxyearrealnum[0]}}
                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-year-input-box inp-box">

                                <doubleinprangeyear class="ma-mo__detailed-search-box-doubleinprange-year-elem inp-box-component"
                                :carspropsyear="cars"
                                @minyeardata="minyear=$event"
                                @maxyeardata="maxyear=$event"
                               
                                
                                >

                                </doubleinprangeyear> 

                            </div>

                        </div>


                    </div>

                    

                    <div class="ma-mo__detailed-search-box-inprange inp-container" :class="{activeinpkilo:kiloinpform}">  

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

                <div class="ma-mo__card-box ma-mo__card-box-calc" v-if="showcalculated">
                    <card 
                    v-for="car in calculatedcars" :key="car"
                    :car="car"
                    >

                    </card>
                </div>

                <div class="ma-mo__card-box ma-mo__card-box-main-screen" v-if="showcars">
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
                allid:[],//все имеющиеся в массиве cars id
                
                inputsAtWork:[],//массив с формами всех включенных компонентов, отслеживаем длинну, для отрисовки calcID через повторения
                calculatedcars:[],//объекты из массива cars, отобранные инпутами компонентов, из computed свойства selectedCARScomputed()
                showcalculated:false,// поведение прописано в методе show (), если true то показывается массив showcalculated                     
                showcars:true, //поведение прописано в методе show (), если true то показывается массив cars

                yeardbinpform:false,
                yearcompname:'year',
                minyear:null,
                maxyear:null,
                minyearrealnum:[],
                maxyearrealnum:[],
                arrOfYears:[],
               
            
                

              
                
               
                
               



                pricedbinpform:false,//если true, то открывается компонент, устанавливаются стартовые значения в методе getStartedInpPrice()
                pricecompname:'price',//наименование компонента
                minprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                maxprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                minpricerealnum:[],//хранит реальные цены на авто
                maxpricerealnum:[],//хранит реальные цены на авто         
                arrOfPrices:[],//хранит уникальные цены на все представленные на сайте авто, в порядке возрастания
       
              

                

                kiloinpform:false,
        
            }

        },
        methods: {
            show () { //определяет состояние переменных
                if (this.calculatedcars.length<this.cars.length) { //либо массив с результатом работы инпутов всех компонентов
                    this.showcalculated = true //либо массив со всеми машинами на сайте
                    this.showcars = false
                } else if(this.calculatedcars.length===0) {
                    this.showcalculated = false
                    this.showcars = true
                } else if (this.cars.length===this.calculatedcars.length) {
                    this.showcalculated = false
                    this.showcars = true
                }
            },
            SetAllId () {//определяем все имеющиеся на сайте уникальные id объектов с машинами, отсортированы по возрастанию
                let a = this.cars.slice()
                for(let i=0; i<a.length; i++) {
                    let b = a[i].id
                    this.allid.push(b)
                }
                this.allid.sort(function(a,b){
                    return a-b
                })
                
            },
            getStartedInpPrice() { //при клике на стрелку компонента запускается функция
                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные
                let a = []
                this.cars.forEach(el => {
                let b = el.price
                a.push(b)
                });
                a=[...new Set(a)]
                let x = a.sort()
                let b = Object.values(x)
                b.forEach(el=>{
                let q = el
                this.arrOfPrices.push(q) //подготавливает массив уникалных занчений цен на сайте, по возрастанию цены
                })
                this.arrOfPrices = [...new Set(this.arrOfPrices)]
                let k = Object.values(this.arrOfPrices)
                this.arrOfPrices = k
                this.arrOfPrices.sort(function(a,b){
                    return a-b
                })
                
                this.minpricerealnum.unshift(this.arrOfPrices[0]) //устанавливает минимум инпута по умолчанию уже в цифрах реальной цены
                this.maxpricerealnum.unshift(this.arrOfPrices[this.arrOfPrices.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реальной цены

                if(!this.inputsAtWork.includes(this.pricecompname)) {//если в переменной для отслеживания включенных в работу инпутов названия, этого
                    this.inputsAtWork.push(this.pricecompname)//если компонента по которому производится клик нет, то его имя добавляется
                }else {                                       //в противном случае удаляется, получился кликер, имя то появляется то удаляется
                    let w = this.inputsAtWork.indexOf(this.pricecompname)//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1) //чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                }

                            
            },
            
           

            getStartedInpYear() {//при клике на стрелку компонента запускается функция, аналогично указанному выше, только для другого компонента
                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные
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
                this.arrOfYears.push(q) //подготавливает массив уникалных занчений годов на сайте , по возрастанию годов
                })
                this.arrOfYears = [...new Set(this.arrOfYears)]
                let k = Object.values(this.arrOfYears)
                this.arrOfYears = k
                this.arrOfYears.sort(function(a,b){
                    return a-b
                })

                this.minyearrealnum.unshift(this.arrOfYears[0]) //устанавливает минимум инпута по умолчанию уже в цифрах реального минимального года
                this.maxyearrealnum.unshift(this.arrOfYears[this.arrOfYears.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реального года

                if(!this.inputsAtWork.includes(this.yearcompname)) {//если в переменной для отслеживания включенных в работу инпутов названия, этого
                    this.inputsAtWork.push(this.yearcompname)//если компонента по которому производится клик нет, то его имя добавляется
                }else {                                       //в противном случае удаляется, получился кликер, имя то появляется то удаляется
                    let w = this.inputsAtWork.indexOf(this.yearcompname)//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                }

                   
            },
                                          
        },
        
        
        watch: {
            catalogpropscars (val) {//получает от родительского компонента массив со всеми авто
                this.cars = val
            },
            setMinPriceRealNumber (val) {//берет соответствующего названия computed свойство и в зависимости от приходящих данных
                
                if(val<=this.maxpricerealnum[0]) {//устанавливает динамически цену для минимального инпута
                    this.minpricerealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.minpricerealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
             
            },         
            setMaxPriceRealNumber (val) {//берет соответствующего названия computed свойство и в зависимости от приходящих данных
                
                if(val>=this.minpricerealnum[0]) {//устанавливает динамически цену для максимального инпута в компоненте цены
                    this.maxpricerealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.maxpricerealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
            },
            setMinYearRealNumber (val) {
                if(val<=this.maxyearrealnum[0]) {//устанавливает динамически цену для минимального инпута
                    this.minyearrealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.minyearrealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
            },
            setMaxYearRealNumber (val) {
                if(val>=this.minyearrealnum[0]) {//устанавливает динамически цену для максимального инпута в компоненте цены
                    this.maxyearrealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.maxyearrealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
            },
            
            selectedCARScomputed(val) { //вычисляемое свойство, которое динамически возвращает объекты из массива cars отобранные в ходе работы инпутов компонентов
                this.calculatedcars = val
            }
                    
        },


        computed: {           
            setMinPriceRealNumber () {
                let a = this.minprice - 1//массив arrOfPrices отсортирован по возрастанию (это очень важно), соответственно, цифры в модели будут 
                return this.arrOfPrices[a]//совпадать с индексами значений цен, за минусом 1, так массивы начинаются с 0, 
            },          //длина (max) инпута соотвествтует длинне массива из всех уникальных значений, зарегистрированных на сайте цен, установил в методе slideP () выше

            setMaxPriceRealNumber () {//аналогично написанному выше
                let b = this.maxprice - 1
                return this.arrOfPrices[b]
            },

            setMinYearRealNumber () {//аналогично написанному выше только по другому компоненту
                let b = this.minyear - 1
                return this.arrOfYears[b]
            },

            setMaxYearRealNumber () {//аналогично написанному выше только по другому компоненту
                let b = this.maxyear - 1
                return this.arrOfYears[b]
            },

            

            selectedCARScomputed() {//свойство выводит id элементов массива cars которые оказались между двумя ползунками компонента, отслеживающего года авто
                
                let w = []
                let d = []             // отслеживаем какие годы авто из массива годов оказались между двумя ползунками 
                let calculatedCARS = []
                    for(let i = 0; i<this.arrOfYears.length;i++) {//дальше отслежваем какие id у элементов массива cars с такими годами 
                    let a = this.arrOfYears[i]                   //все это хранится в виде массива в этом свойстве
                        if(a<=this.maxyearrealnum&&a>=this.minyearrealnum) {//все сваливаем в массив d
                            this.cars.forEach(el=>{//отслеживаем компонент Input-year
                                let m = el
                                if (m.year===a) { //все
                                d.push(m.id)
                                }
                            })
                        }
                    }
                    for(let i = 0; i<this.arrOfPrices.length;i++) {//дальше отслежваем какие id у элементов с такими ценами 
                    let a = this.arrOfPrices[i]                   //все это хранится в виде массива в этом же свойстве
                        if(a<=this.maxpricerealnum&&a>=this.minpricerealnum) {//отслеживаем компонент Input-price
                            this.cars.forEach(el=>{
                                let m = el
                                if (m.price===a) {//так мы циклами проходимся по всем инпутным компонентам, при появлении нового компонента
                                d.push(m.id)      //добавляем еще один цикл по этому компоненту
                                }
                            })
                        }
                    }

                for(let i=0; i<d.length;i++) {//итерируемся по массиву d и на каждой итерации сколько итый элемент встречается 
                    let k = d[i]              //в массиве d если встречается столько же раз сколько инпутов компонентов включено в этот момент,
                    let v = d.filter(el=>el===k).length //то записываем в массив w
                    if (v===this.inputsAtWork.length) {
                        w.push(k)
                    }
                }
                
                w = [...new Set(w)]//делаем массив состоящим из уникальных значений именно id выводимых после отбора компонентами авто
                w = Object.values(w)//на всякий случай делаем массив из значений имен объекта если это объект

                w.forEach (el=>{//итерируем массив с id, прикаждой итерации итерируем массив cars и если есть совпадения
                    let a = el // объукты с таким id заносим в массив calculatedCARS, котороый и возвращаем
                    for(let i = 0; i<this.cars.length;i++) {//каждый раз при изменении инпутов компонентов все массивы становятся пустыми 
                        let b = this.cars[i] //и наполняются новыми значениями всякий раз при поступлении новых данных
                        let c = this.cars[i].id
                        if (a===c) {
                            calculatedCARS.push(b)
                        }
                    }
                })

                
                return calculatedCARS
                
            },
        
        },
        

        mounted () {
            
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
   

        .activeinpprice {
             height: 123px;
             padding-bottom: 25px;
        }
        .activeinpyear {
             height: 123px;
             padding-bottom: 25px;
        }
        .activeinpkilo {
             height: 123px;
             padding-bottom: 25px;
        }

       

        


    }

    
    
</style>