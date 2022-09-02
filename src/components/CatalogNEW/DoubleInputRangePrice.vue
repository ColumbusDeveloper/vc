<template>
  <div class="doubleinput">


    <div class="wrapper"> 
      <div class="container">
        <div class="slider-trackP" ref="pr"></div>
        <input type="range" min="1"  v-model="minPrice" class="inp min" step="1" id="slider-11" 
        @input="slideOneP(),slideP(),minInpPriceToCatalogMain()"
        @change="setindexmin()"
        :class="{zindex:indmin}"
        >
        <input type="range" min="1"  v-model="maxPrice"  class="inp max" step="1" id="slider-22" 
        @input="slideTwoP(),slideP(),maxInpPriceToCatalogMain()"
        @change="setindexmax()"
        :class="{zindex:indmax}"
        >
      </div>
    </div>

    <!--по событтию инпут запускаются slideOneP(),slideP(), они отрисовывают инпуты вообще, по событию @change запускается setindexmin(),
    этот метод добавляет инпутам дополнительный класс zindex, он повыщает индекс того элемента по которому по последнему произошли 
    изменения. Из-за этого за него можно зацепиться, когда инпуты дойдут до краю.     -->
    
    

    
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Input-price',
    components: {
      


    },
    props:['carspropsprice','qtyOfPrices'],
    

    data() {
      return {

        minPrice:4,//модель для инпута, ответственного за минимальное значение, установил первоначальное значение произвольно
        maxPrice:8,//модель для инпута, ответственного за максимальное значение, установил первоначальное значение произвольно
        minPriceRealNumber:null,//цифра из модели, привязанной к инпуту min преобразуется в цифру реальной цены, зарегистрированной под инддексом в переменной arrOfPrices
        maxPriceRealNumber:null,//цифра из модели, привязанной к инпуту max преобразуется в цифру реальной цены, зарегистрированной под инддексом в переменной arrOfPrices
        arrOfIdGeneratedWithPriceComponent:[],//содержит все id машин на сайте в пределах указанной минимальной и максимальной цены
        cars:this.carspropsprice,//массив со всеми зарегистрированными на сайте машинами
        arrOfPrices:[], //перечислены без повторений все цены, зарегистрированные на сайте, без повторений
        qty:this.qtyOfPrices,//количество уникальных цен на сайте, используем, чтобы определить атрибут max инпутов, забираем пропсами с родительского компонента
        indmin:false,//переменные, участвуюшие в установке z-index для каждого из инпутов
        indmax:false,//переменные, участвуюшие в установке z-index для каждого из инпутов  
                   
      }
    },
    watch:{
      carspropsprice (val) {//запись обновленных состояний в переменную из пропса
        this.cars = val
      },
      qtyOfPrices (val) {//запись обновленных состояний в переменную из функции, которая выполняется при mounted()
        this.qty = val
      },
      setMinPriceRealNumber (val) {//запись обновленных состояний в переменную из computed свойства
        this.minPriceRealNumber = val
      },
      setMaxPriceRealNumber (val) {//запись обновленных состояний в переменную из computed свойства
        this.maxPriceRealNumber = val
      },
      SetArrOfIdGeneratedWithPriceComponent (val) {
        this.arrOfIdGeneratedWithPriceComponent = val
      }
      
    },

    methods:{
      setindexmin() {
        this.indmin = true
        this.indmax = false
      },
      setindexmax() {
        this.indmin = false
        this.indmax = true
      },
      slideOneP() {//названия методов должны быть уникальными для подобных компонентов
        let minGap = 0
        let sliderOne = document.getElementById("slider-11")//названия id должны быть уникальными для подобных компонентов
        let sliderTwo = document.getElementById("slider-22")//названия id должны быть уникальными для подобных компонентов
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderOne.value = parseInt(sliderTwo.value) - minGap
        }
      },
      slideTwoP() {//названия методов должны быть уникальными для подобных компонентов
        let minGap = 0
        let sliderOne = document.getElementById("slider-11")//названия id должны быть уникальными для подобных компонентов
        let sliderTwo = document.getElementById("slider-22")//названия id должны быть уникальными для подобных компонентов
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderTwo.value = parseInt(sliderOne.value) + minGap
        }
      },
      slideP () {
        let sliderOne = document.getElementById("slider-11")
        let sliderTwo = document.getElementById("slider-22")
        sliderOne.max = this.qty
        sliderTwo.max = this.qty
        console.log(sliderTwo.max);
        let sliderMaxValue = document.getElementById("slider-11").max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100 - 5
        let percent2 = (sliderTwo.value/sliderMaxValue) * 100 - 5
        this.$refs.pr.style.background = `linear-gradient(to right, #D7D7D7 ${percent1}%, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
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
         
    },
    mounted () {
        this.slideP()
        this.findArrOfPrices ()

    },
    
    computed:{
      
      setMinPriceRealNumber () {
        let a = this.minPrice - 1//массив arrOfPrices отсортирован по возрастанию (это очень важно), соответственно, цифры в модели будут 
        return this.arrOfPrices[a]//совпадать с индексами значений цен, за минусом 1, так массивы начинаются с 0, 
      },//длина (max) инпута соотвествтует длинне массива из всех уникальных значений, зарегистрированных на сайте цен, установил в методе slideP () выше
      setMaxPriceRealNumber () {//аналогично написанному выше
        let b = this.maxPrice - 1
        return this.arrOfPrices[b]
      },
      SetArrOfIdGeneratedWithPriceComponent () {
        let d = []
        for (let i = 0; i<this.arrOfPrices.length;i++){
          let a = this.arrOfPrices[i]
              if (a<=this.maxPriceRealNumber&&a>=this.minPriceRealNumber) {
                  this.cars.forEach(el=>{
                          let m = el
                          if (m.price===a) {
                            d.push(m.id)
                          }
                  })
              }
        }
        return d
      }
      

    },
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
     .wrapper {
       
      
      width: auto;
      
     }

     .container {
      position: relative;
      margin-left: -24px;
        .zindex {
          z-index: 1; //добавляет инпуту, по которому произошли изменения, повышенный z-index, благодаря этому
        }             //дойдя до края ползунок оказывается сверху и за него можно схватиться
     }

     .inp {
      width: auto;
     }
     

     input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      outline: none;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      background-color: transparent;
      pointer-events: none;
     }

      input[type="range"]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 5px;
      }

      input[type="range"]::-moz-range-track {
        -moz-appearance: none;
        height: 5px;
      }

      input[type="range"]::-ms-track{
        appearance: none;
        height: 5px;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 18px;
        width: 18px;
        background-color:#7481FF ;
        cursor: pointer;
        border-radius: 1px;
        margin-top: -7px;
        pointer-events: auto;
      }

      input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        height: 18px;
        width: 18px;
        background-color:#7481FF ;
        cursor: pointer;
        border-radius: 1px;        
        pointer-events: auto;
      }

      input[type="range"]::-ms-thumb {
        appearance: none;
        height: 18px;
        width: 18px;
        background-color:#7481FF;
        cursor: pointer;
        border-radius: 1px; 
        pointer-events: auto;          
      }


     .slider-trackP {
      width: 100%;
      height: 5px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      border-radius: 1px;
     }

     input:active::-webkit-slider-thumb {
      background-color: #090b18;
      border: 1px solid  #7481FF;
    }

     
     





    







  
</style>