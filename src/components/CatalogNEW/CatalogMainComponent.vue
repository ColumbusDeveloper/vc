<!-- eslint-disable vue/no-unused-components -->
<template>
    <div class="ma-mo"
   
    >
    

        <div class="ma-mo__detailed-search-box">

            
            <div class="ma-mo__global-search-header">
                    <p class="ma-mo__global-search-header-stable">Detailed search</p>
                    <p class="ma-mo__global-search-header-changeable">Clear filters</p>
            </div>   

            <div class="ma-mo__detailed-search-box-calk-container">
                    <div class="ma-mo__detailed-search-box-trans inp-container"  :class="{activeinptrans:transinpform}">
                        <div class="ma-mo__open-arrow-box arr-box">
                            <p class="ma-mo__open-arrow-box-text arr-box-text">
                                Transmission
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows arr-box-arrows-box" @click="getStartedInpTrans(),clearcrosshistoryarrs()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up arr-box-arrows-box-el1"><i class="fa-solid fa-angle-up" v-if="transinpform"></i></div>
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Down arr-box-arrows-box-el2"><i class="fa-solid fa-angle-down" v-if="transinpform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-trans-items-box inp-cont-box" v-if="transinpform">

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-input-box inp-box">
                                
                            </div>
                            
                            <div class="ma-mo__detailed-search-box-trans-input-box inp-cont-box-content inp-cont-box-result">                   
                                <transmission
                                
                                
                                >


                                </transmission>
                            </div>

                        </div>
                        
                    </div>

                    <div class="ma-mo__detailed-search-box-doubleinprange-price inp-container"  :class="{activeinpprice:pricedbinpform}">
                        <div class="ma-mo__open-arrow-box arr-box">
                            <p class="ma-mo__open-arrow-box-text arr-box-text">
                                Price
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows arr-box-arrows-box" @click="getStartedInpPrice(),clearcrosshistoryarrs()">
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
                            <div class="ma-mo__open-arrow-box-arrows" @click="getStartedInpYear(),clearcrosshistoryarrs()">
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
                            <div class="ma-mo__open-arrow-box-arrows" @click="getStartedInpKilo()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up"><i class="fa-solid fa-angle-up" v-if="kiloinpform"></i></div>
                                 <div class="ma-mo__open-arrow-box-arrows-arrow-Down"><i class="fa-solid fa-angle-down" v-if="kiloinpform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-inprange-box inp-cont-box inp-cont-box" v-if="kiloinpform">

                            <div class="ma-mo__detailed-search-box-inprange-box-text-box inp-cont-box-content">
                                <div class="ma-mo__detailed-search-box-inprange-text inp-cont-box-content-elem">
                                    {{maxkilorealnum[0]}}   or less
                                </div>

                            </div>

                            <div class="ma-mo__detailed-search-box-inprange-input-box inp-box" v-if="kiloinpforminput">

                                <inprange class="ma-mo__detailed-search-box-inprange-input-box-elem inp-box-component"
                                :carspropsinprange="cars"
                                @datafromsingleinput="kilocompdata=$event"
                         
                                >

                                </inprange> 

                            </div>

                            <div class="ma-mo__detailed-search-box-inprange-input-box-closed-cross-on inp-box inp-box-cross-on" v-if="kiloinpformcross">

                                    <cardkilo
                                    v-for="car in calculatedcars" :key="car"
                                    :carkilo="car"
                                    @deletedkilotoparent="deletedkiloitem=$event"
                                    >


                                    </cardkilo>
                                    <div class="inp-box-cross-on-undo"
                                    @click="undokilocomponent"
                                    >
                                        <span>UNDO</span>
                                    </div>

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
    import cardkilo from '@/components/CatalogNEW/CardKilo.vue'
    import doubleinprangeprice from '@/components/CatalogNEW/DoubleInputRangePrice.vue'
    import doubleinprangeyear from '@/components/CatalogNEW/DoubleInputRangeYear.vue'
    import inprange from '@/components/CatalogNEW/InputRange.vue'
    import transmission from '@/components/CatalogNEW/Transmission.vue'
    

    export default {
        name: 'Catalog-component',
        props:['catalogpropscars'],
        components: {
            card,
            ca,
            cardkilo,
            doubleinprangeprice,
            doubleinprangeyear,
            inprange,
            transmission,
        },
        data() {
            return {
                cars: this.catalogpropscars,
                allid:[],//все имеющиеся в массиве cars id
                
                inputsAtWork:[],//массив с формами всех включенных компонентов, отслеживаем длинну, для отрисовки calcID через повторения
                calculatedcars:[],//объекты из массива cars, отобранные инпутами компонентов, из computed свойства selectedCARScomputed()
                showcalculated:false,// поведение прописано в методе show (), если true то показывается массив showcalculated                     
                showcars:true, //поведение прописано в методе show (), если true то показывается массив cars



                transinpform:false,
                transcompname:'transcheck',
            

                yeardbinpform:false,
                yearinpforminput:false, //если true то в форме открывается подформа, показывающая инпут
                yearinpformcross:false,//если true то в форме открывается подформа, показывающая кроссы
                yeartrigger:Boolean,
                yearformstatekeeper:[],//вспомогательный массив, относительно которого идут вычисления значений переменных по открытию подформ
                yearcompname:'yearslider',
                minyear:null,
                maxyear:null,
                minyearrealnum:[],
                maxyearrealnum:[],
                arrOfYears:[],
            

                pricedbinpform:false,//если true, то открывается компонент, устанавливаются стартовые значения в методе getStartedInpPrice()
                priceinpforminput:false, //если true то в форме открывается подформа, показывающая инпут
                priceinpformcross:false,//если true то в форме открывается подформа, показывающая кроссы
                pricetrigger:Boolean,
                priceformstatekeeper:[],//вспомогательный массив, относительно которого идут вычисления значений переменных по открытию подформ
                pricecompname:'priceslider',//наименование компонента
                minprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                maxprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                minpricerealnum:[],//хранит реальные цены на авто
                maxpricerealnum:[],//хранит реальные цены на авто         
                arrOfPrices:[],//хранит уникальные цены на все представленные на сайте авто, в порядке возрастания
               
            
                kiloinpform:false,
                kiloinpforminput:false,
                kiloinpformcross:false,
                kilotrigger:Boolean,
                kiloformstatekeeper:[],             
                kilocompname:'kiloslider',
                kilocompdata:null,
                minkilorealnum:[],
                maxkilorealnum:[],
                arrOfKilometers:[],
                deletedkiloitem:[],
                deletedkiloitemhistory:[],
        
            }

        },
        methods: {
            show () { //определяет состояние переменных и если хоть один компонент включен, то показывается итерация по массиву showcalculated
                if (this.yeardbinpform||this.pricedbinpform||this.kiloinpform) {//если хоть один инпут включенный
                    this.showcars=false
                    this.showcalculated=true
                }else {
                    this.showcars=true
                    this.showcalculated=false
                  
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


                this.priceformstatekeeper.push(1)//описывает в какой последовательности открывать и закрывать форму и части формы
                if (this.priceformstatekeeper.length===1) {
                    this.pricedbinpform = true
                    this.priceinpforminput = true
                    this.priceinpformcross = false
                    this.pricetrigger = true //нужен для определения промежуточного состояния, когда форма открыта, но последующий клик не перезапускает форму
                }else if (this.priceformstatekeeper.length===2) {
                    this.kiloinpforminput = false
                    this.kiloinpformcross = true
                    this.pricetrigger = false
                } else {
                    this.priceinpforminput = false
                    this.priceinpformcross = false
                    this.pricedbinpform = false
                    this.pricetrigger = true
                    this.priceformstatekeeper = []
                }


                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные
                let a = []
                this.cars.forEach(el => {
                let b = el.price
                a.push(b)
                })
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

                if(this.pricedbinpform) {
                    this.minpricerealnum.unshift(this.arrOfPrices[0]) //устанавливает минимум инпута по умолчанию уже в цифрах реальной цены
                    this.maxpricerealnum.unshift(this.arrOfPrices[this.arrOfPrices.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реальной цены
                }else{
                    this.minpricerealnum=[]//если эта переменная пустой массив, то в computed свойство selectedCARScomputed() не могут попасть
                    this.maxpricerealnum=[]//данные для рассчетов по инпуту касательно этого компонента, рассчет идет по тем компонентам, что включены 
                }                          // и поставляют данные для selectedCARScomputed()
                
               

                if(!this.inputsAtWork.includes(this.pricecompname)) {//если в переменной для отслеживания включенных в работу инпутов названия, этого
                    this.inputsAtWork.push(this.pricecompname)//если компонента по которому производится клик нет, то его имя добавляется
                }else {                                       //в противном случае удаляется, получился кликер, имя то появляется то удаляется
                    let w = this.inputsAtWork.indexOf(this.pricecompname)//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1) //чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                }

                                      
            },







            getStartedInpYear() {//при клике на стрелку компонента запускается функция, аналогично указанному выше, только для другого компонента

                this.yearformstatekeeper.push(1)//описывает в какой последовательности открывать и закрывать форму и части формы
                if (this.yearformstatekeeper.length===1) {
                    this.yeardbinpform = true
                    this.yearinpforminput = true
                    this.yearinpformcross = false
                    this.yeartrigger = true
                }else if (this.yearformstatekeeper.length===2) {
                    this.yearinpforminput = false
                    this.yearinpformcross = true
                    this.yeartrigger = false
                } else {
                    this.yearinpforminput = false
                    this.yearinpformcross = false
                    this.yeardbinpform = false
                    this.yearformstatekeeper = []
                    this.yeartrigger = true
                }


                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные
                let a = []
                this.cars.forEach(el => {
                let b = el.year
                a.push(b)
                })
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

                if(this.yeardbinpform) {
                    this.minyearrealnum.unshift(this.arrOfYears[0]) //устанавливает минимум инпута по умолчанию уже в цифрах реального минимального года
                    this.maxyearrealnum.unshift(this.arrOfYears[this.arrOfYears.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реального года
                }else{
                    this.minyearrealnum=[]//если эта переменная пустой массив, то в computed свойство selectedCARScomputed() не могут попасть
                    this.maxyearrealnum=[]//данные для рассчетов по инпуту касательно этого компонента, рассчет идет по тем компонентам, что включены 
                }                         // и поставляют данные для selectedCARScomputed()



                if(!this.inputsAtWork.includes(this.yearcompname)) {//если в переменной для отслеживания включенных в работу инпутов названия, этого
                    this.inputsAtWork.push(this.yearcompname)//если компонента по которому производится клик нет, то его имя добавляется
                }else {                                       //в противном случае удаляется, получился кликер, имя то появляется то удаляется
                    let w = this.inputsAtWork.indexOf(this.yearcompname)//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                }   

                   
            },


            getStartedInpKilo() {

                this.kiloformstatekeeper.push(1)//описывает в какой последовательности открывать и закрывать форму и части формы
                if (this.kiloformstatekeeper.length===1) {
                    this.kiloinpform = true
                    this.kiloinpforminput = true
                    this.kiloinpformcross = false
                    this.kilotrigger = true
                }else if (this.kiloformstatekeeper.length===2) {
                    this.kiloinpforminput = false
                    this.kiloinpformcross = true
                    this.kilotrigger = false
                } else {
                    this.kiloinpforminput = false
                    this.kiloinpformcross = false
                    this.kiloinpform = false
                    this.kilotrigger = true
                    this.kiloformstatekeeper = []
                }

                if(this.kiloinpform && this.kilotrigger) {
                    this.minkilorealnum.unshift(this.arrOfKilometers[0]) //устанавливает стартовый минимум инпута по умолчанию уже в цифрах реального минимального пробега реального авто
                    this.maxkilorealnum.unshift(this.arrOfKilometers[this.arrOfKilometers.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реального пробега
                }else if (this.kiloinpform && !this.kilotrigger) {
                    let a = this.calculatedcars.map(car =>{
                        return car.kilometers
                    })
                    a = [...new Set(a)]
                    a.sort(function(a,b) {
                        a-b
                    })
                    let b = a[a.length-1]
                    this.maxkilorealnum.unshift(b)
                } else {
                    this.minkilorealnum=[]//если эта переменная пустой массив, то в computed свойство selectedCARScomputed() не могут попасть
                    this.maxkilorealnum=[]//данные для рассчетов по инпуту касательно этого компонента, рассчет идет по тем компонентам, что включены 
                    this.deletedkiloitemhistory=[]
                }

                if(this.kiloinpform && this.kilotrigger) {
                    this.inputsAtWork.push(this.kilocompname)//если компонента по которому производится клик нет, то его имя добавляется
                    this.inputsAtWork = [...new Set(this.inputsAtWork)]
                }else if (!this.kiloinpform && !this.kilotrigger) {                                       //в противном случае удаляется, получился кликер, имя то появляется то удаляется
                    let w = this.inputsAtWork.indexOf(this.kilocompname)//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                } 
             
                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные
                
                let a = []
                this.cars.forEach(el => {
                let b = el.kilometers
                a.push(b)
                })
                a=[...new Set(a)]
                let x = a.sort()
                let b = Object.values(x)
                b.forEach(el=>{
                let q = el
                this.arrOfKilometers.push(q) //подготавливает массив уникалных занчений километражей на сайте , по возрастанию километража авто
                })
                this.arrOfKilometers = [...new Set(this.arrOfKilometers)]
                let k = Object.values(this.arrOfKilometers)
                this.arrOfKilometers = k
                this.arrOfKilometers.sort(function(a,b){ //очень важно отсортировать массив по ворастанию, тогда можно легко брать минимумы и максимумы
                    return a-b
                })
                            
            },
            undokilocomponent () {
                if (this.deletedkiloitemhistory.length!==0) {
                    let a = this.deletedkiloitemhistory[0]
                    let b = this.cars.find(el=>el.id===a)
                    this.calculatedcars.unshift(b)
                    this.deletedkiloitemhistory.splice(0,1)
                    let w = this.calculatedcars
                    w = [...new Set(w)]
                    this.calculatedcars = w
                }
    
            },

            

            
            
           

            

            
        
                                          
        },
        
        
        watch: {
            
            catalogpropscars (val) {//получает от родительского компонента массив со всеми авто
                this.cars = val
            },
            selectedCARScomputed(val) { //вычисляемое свойство, которое динамически возвращает объекты из массива cars отобранные в ходе работы инпутов компонентов         
                this.calculatedcars = val                           
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





            setMaxKiloRealNumber (val) {
                if(val) {//устанавливает динамически цену для максимального инпута в компоненте цены
                    this.maxkilorealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.maxkilorealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }//инпут в данном случае один, нам не нужно выдерживать условия, сразу пишем данные если появились в переменную maxkilorealnum
            },
            deletedkiloitem (val) {//при удалении при закрытом компоненте элемента с крестиком он передает в родительский компонент данные о себе в переменную  deletedkiloitem 
                let a = val.id    //именно сейчас я проверяю приходящие из дочернего компонента данные, записываю id объектов в переменную deletedkiloitemhistory в начало
                this.deletedkiloitemhistory.unshift(a) // после того как записал удаляю из переменной с вычисленными объектами для показа этот объект по полученному id 
                this.deletedkiloitemhistory = [...new Set(this.deletedkiloitemhistory)]
                let b = this.deletedkiloitemhistory[0]
                let c = this.calculatedcars.findIndex(el=>el.id===b)
                this.calculatedcars.splice(c,1)
            },
           
                    
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






            setMaxKiloRealNumber () {//вычисляет динамически меняющееся значение максимального пробега авто по мере движения инпута
                let b = this.kilocompdata - 1
                return this.arrOfKilometers[b]
            },

            

            selectedCARScomputed() {//свойство выводит id элементов массива cars 
                
                let w = []
                let d = []             
                let calculatedCARS = []
                    for(let i = 0; i<this.arrOfYears.length;i++) {//отслеживаем компонент Input-year, итерируем массив arrOfYears с уникальными годами авто
                    let a = this.arrOfYears[i] //записываем в переменную элемент массива arrOfYears, по которому сейчас происходит итерация
                        if(a<=this.maxyearrealnum[0]&&a>=this.minyearrealnum[0]) {//если этот элемент больше минимальной выведенной сейчас цены, 
                                                            //но меньше выведенной сейчас цены инпутами компонентов, то принимается к рассмотрению
                            this.cars.forEach(el=>{//итерируем главный массив со всеми авто на сайте 
                                let m = el  //записываем в переменную элемент массива по которому происходит итерация
                                if (m.year===a) { //если этот элемент со значением свойства year равен отобранному при итерации выше элементу массива arrOfYears
                                d.push(m.id) //то его id записываем в массив d
                                }
                            })
                        }
                    }
                    for(let i = 0; i<this.arrOfPrices.length;i++) {//отслеживаем компонент Input-price, все аналогично указанному в комментариях выше
                    let a = this.arrOfPrices[i]                 
                        if(a<=this.maxpricerealnum[0]&&a>=this.minpricerealnum[0]) {
                            this.cars.forEach(el=>{
                                let m = el
                                if (m.price===a) {
                                d.push(m.id)    
                                }
                            })
                        }
                    }
                    for(let i = 0; i<this.arrOfKilometers.length;i++) {//отслеживаем компонент Single-input с одним инпутом, итерируем arrOfKilometers и на каждой итерации
                    let a = this.arrOfKilometers[i]                   //записываем в переменную элемент массива, по которому сейчас проходит итерация
                        if(a<=this.maxkilorealnum[0]) {//и если этот элемент соответствует условию, то есть он меньше выведенного инпутом сейчас километража
                            this.cars.forEach(el=>{ //то он принимается к рассмотрению, дальше производим итерацию главного массива со всеми авто
                                let m = el //записываем в переменную елемент по которому сейчас происходит итерация и если
                                if (m.kilometers===a) {//значение свойства kilometers элемента равен элементу, выведенному ранее в итерации массива километражей, 
                                d.push(m.id)      //то его id записываемв в массив d
                                }
                            })
                        }
                    }
                    

                for(let i=0; i<d.length;i++) {//итерируемся по массиву d в котором вобрался весь сборняк выбранных ранее id элементов
                    let k = d[i]              //записываем в переменную элемент массива по которому сейчас происходит итерация
                    let v = d.filter(el=>el===k).length //выясняем сколько раз в массиве d встречается конкретный элемент массива d по которому сейчас происходит итерация
                    if (v===this.inputsAtWork.length) { //устанавливаем, что если элемент встречается столько раз сколько открыто компонентов, то его 
                        w.push(k)                       //записываем в массив w
                    }
                }
           
                w = [...new Set(w)]//делаем массив состоящим из уникальных значений id выводимых после отбора компонентами авто
                w = Object.values(w)//на всякий случай делаем массив из значений имен объекта если это объект

                w.forEach (el=>{//итерируем массив с id, при каждой итерации итерируем массив cars и если есть совпадения
                    let a = el // объекты с таким id заносим в массив calculatedCARS, котороый и возвращаем
                    for(let i = 0; i<this.cars.length;i++) {//каждый раз при изменении инпутов компонентов все массивы становятся пустыми 
                        let b = this.cars[i] //и наполняются новыми значениями всякий раз при поступлении новых данных
                        let c = this.cars[i].id
                        if (a===c) {
                            calculatedCARS.push(b)
                        }
                    }
                })

               
                
                return calculatedCARS//!!!!КРАЙНЕ ВАЖНО ЭТО ДЕЛАТЬ В COMPUTED ТАК КАК ЭТИ СВОЙСТВА ПЕРЕСОЗДАЮТСЯ ПРИ КАЖДОМ ПОЯВЛЕНИИ
                                        //НОВЫХ ДАННЫХ, ТАК У НАС ПОСТОЯННО АКТУАЛЬНЫЕ ДАННЫЕ
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

        .inp-box-cross-on {
            display: flex;
            flex-wrap: wrap;
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

        .inp-box-cross-on-undo {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $undo;
            border-radius: 5px;
            padding-top: 10px;
            padding-left: 7px;
            padding-right: 7px;
            cursor: pointer;
            &:hover{
                background-color: $undohover;
            }
            span {
                min-height: 35px;
                margin: 0;
            }

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