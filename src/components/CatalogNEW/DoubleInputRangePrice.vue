<template>
  <div class="doubleinput">


    <div class="wrapper"> 
      <div class="container">
        <div class="slider-trackP" ref="pr"></div>
        <input type="range" min="1"  v-model="minPrice" class="inp min" step="1" id="slider-11" 
        @input="slideOneP(),slideP(),sendMinDtaToParentComponent(),setindexmin()"
        :class="{zindex:indmin}"
        >
        <input type="range" min="1"  v-model="maxPrice"  class="inp max" step="1" id="slider-22" 
        @input="slideTwoP(),slideP(),sendMaxDtaToParentComponent(),setindexmax()"
        :class="{zindex:indmax}"
        >
      </div>
    </div>

    <!--по событтию инпут запускаются slideOneP(),slideP(), также запускается setindexmin(),
    этот метод добавляет инпутам дополнительный класс zindex, он повыщает индекс того элемента по которому по последнему произошли 
    изменения. Из-за этого за него можно зацепиться, когда инпуты дойдут до краю, также это не даст инпуту пройти дальше своего коллеги.  
    Следующие методы формируют и отправляют родителю номера от минимума до максимума, рассчитанного из компьютед свойства  findQtyOfPrices ()  -->
    
    

    
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Input-price',
    components: {
      


    },
    props:['carspropsprice'],
    

    data() {
      return {
        minPrice:null,//модель для инпута, ответственного за минимальное значение, устанавливается в методе findStartEndOfInputsArrOfInputs ()
        maxPrice:null,//модель для инпута, ответственного за максимальное значение, устанавливается в методе findStartEndOfInputsArrOfInputs ()
        cars:this.carspropsprice,//массив со всеми зарегистрированными на сайте машинами
        arrOfPrices:[], //перечислены без повторений все цены, зарегистрированные на сайте
        indmin:false,//переменные, участвуюшие в установке z-index для каждого из инпутов
        indmax:false,//переменные, участвуюшие в установке z-index для каждого из инпутов  
                   
      }
    },
    watch:{
      
      carspropsprice (val) {//запись обновленных состояний в переменную из пропса 
        this.cars = val
      },
      
      
        
        
    },

    methods:{
      sendMinDtaToParentComponent() {
        this.$emit('minpricedata',this.minPrice)//отправляет данные в родительский компонент, запускается из mounted(), а также при событии инпут 
      },
      sendMaxDtaToParentComponent() {
        this.$emit('maxpricedata',this.maxPrice)////отправляет данные в родительский компонент, запускается из mounted(), а также при событии инпут 
      },
      setindexmin() {//используется для определения z-index инпутов
        this.indmin = true
        this.indmax = false
      },
      setindexmax() {//используется для определения z-index инпутов
        this.indmin = false
        this.indmax = true
      },
      slideOneP() {//названия методов должны быть уникальными для подобных компонентов, описание внешнего вида инпутов
        let minGap = 0
        let sliderOne = document.getElementById("slider-11")//названия id должны быть уникальными для подобных компонентов
        let sliderTwo = document.getElementById("slider-22")//названия id должны быть уникальными для подобных компонентов
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderOne.value = parseInt(sliderTwo.value) - minGap
        }
      },
      slideTwoP() {//названия методов должны быть уникальными для подобных компонентов, описание внешнего вида инпутов
        let minGap = 0
        let sliderOne = document.getElementById("slider-11")//названия id должны быть уникальными для подобных компонентов
        let sliderTwo = document.getElementById("slider-22")//названия id должны быть уникальными для подобных компонентов
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderTwo.value = parseInt(sliderOne.value) + minGap
        }
      },
      slideP () {//названия методов должны быть уникальными для подобных компонентов, описание внешнего вида инпутов
        let sliderOne = document.getElementById("slider-11")
        let sliderTwo = document.getElementById("slider-22")
        sliderOne.max = this.qtyOfPrices
        sliderTwo.max = this.qtyOfPrices
        console.log(sliderTwo.max);
        let sliderMaxValue = document.getElementById("slider-11").max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100 - 5
        let percent2 = (sliderTwo.value/sliderMaxValue) * 100 - 5
        this.$refs.pr.style.background = `linear-gradient(to right, #D7D7D7 ${percent1}%, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
     
      },
      findStartEndOfInputsArrOfInputs () {//добывает отсортированный по возрастанию массив уникальных цен на авто
        let a = []//записывает массив в переменную arrOfPrices, минимум и максимум инпутов вычисляется просто
                  //если массив arrOfPrices состоит из 10 членов, то минимум = 1, а максимум = 10.
        this.cars.forEach(el=>{
        let b = el.price
        a.push(b)
        
        })
        a = [...new Set(a)]
        a = Object.values(a)
        a.sort(function(a,b){
          return a-b
        })
        this.arrOfPrices = a
        let m = a[0]
        this.minPrice = a.indexOf(m)+1

        let d = a[a.length-1]
        this.maxPrice = a.indexOf(d)+1
      }, 
      
     
       
         
    },
   
    mounted () {//методы, которые будут вызваны сразу в момент отрисовки компонента
        this.slideP()
        this.sendMinDtaToParentComponent()  
        this.sendMaxDtaToParentComponent() 
        this.findStartEndOfInputsArrOfInputs ()
        
     
      
    },
    
    computed:{
       qtyOfPrices () {//высчитывает количество разных(уникальных) цен на авто на сайте, используем напрямую
            let a = []//подставляем в метод slideP (). Очень важно устанавливать все, с чего начинаются все
                      //последующие рассчеты через computed свойства, используем как переменные
          this.cars.forEach(el=>{
          let b = el.price
          a.push(b)
          
          })
          a = [...new Set(a)]
          a = Object.values(a)
          a.sort(function(a,b){
            return a-b
          })
          return a.length
       },
    
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