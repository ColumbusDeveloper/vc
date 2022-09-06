<template>
  <div class="doubleinput">


    <div class="wrapper"> 
      <div class="container">
        <div class="slider-track" ref="header"></div>
        <input type="range" min="1"  v-model="minYear" step="1" class="inp min" id="slider-1" 
        @input="slideOne(),slide(),sendMinDtaToParentComponent(),setindexmin()"  
        :class="{zindex:indmin}"
        >

        <input type="range" min="1"  v-model="maxYear" step="1" class="inp max" id="slider-2"
        @input="slideTwo(),slide(),sendMaxDtaToParentComponent(),setindexmax()" 
        :class="{zindex:indmax}"
        >
      </div>
    </div>


       
    
    

    
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Input-year',

    components: {
      


    },
    props:['carspropsyear'],
    

    data() {
      return {
        cars:this.carspropsyear,
        minYear:null,
        maxYear:null,      
        arrofyears:[],
        indmin:false,
        indmax:false,          
      }
    },
    watch:{
      carspropsyear (val) {
        this.cars = val
      },
           
    },

    methods:{

      sendMinDtaToParentComponent() {
        this.$emit('minyeardata',this.minYear)//отправляет данные в родительский компонент, запускается из mounted(), а также при событии инпут 
      },
      sendMaxDtaToParentComponent() {
        this.$emit('maxyeardata',this.maxYear)////отправляет данные в родительский компонент, запускается из mounted(), а также при событии инпут 
      },    
      setindexmin() {
        this.indmin = true
        this.indmax = false
      },
      setindexmax() {
        this.indmin = false
        this.indmax = true
      },
      slideOne() {
        let minGap = 0
        let sliderOne = document.getElementById("slider-1")
        let sliderTwo = document.getElementById("slider-2")
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderOne.value = parseInt(sliderTwo.value) - minGap
        }
      },
      slideTwo() {
        let minGap = 0
        let sliderOne = document.getElementById("slider-1")
        let sliderTwo = document.getElementById("slider-2")
      
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderTwo.value = parseInt(sliderOne.value) + minGap
        }
      },
      slide () {
        let sliderOne = document.getElementById("slider-1")
        let sliderTwo = document.getElementById("slider-2")
        sliderOne.max=this.qtyOfYears
        sliderTwo.max=this.qtyOfYears
        
        let sliderMaxValue = document.getElementById("slider-1").max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100 -5
        let percent2 = (sliderTwo.value/sliderMaxValue) * 100 -5
        this.$refs.header.style.background = `linear-gradient(to right, #D7D7D7 ${percent1}%, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
      },

      findStartEndOfInputsArrOfInputs () {//добывает отсортированный по возрастанию массив уникальных цен на авто
        let a = []//записывает массив в переменную arrOfPrices, минимум и максимум инпутов вычисляется просто
                  //если массив arrOfPrices состоит из 10 членов, то минимум = 1, а максимум = 10.
        this.cars.forEach(el=>{
        let b = el.year
        a.push(b)  
        })
        a = [...new Set(a)]
        a = Object.values(a)
        a.sort(function(a,b){
          return a-b
        })
        this.arrofyears = a
        let m = a[0]
        this.minYear = a.indexOf(m)+1

        let d = a[a.length-1]
        this.maxYear = a.indexOf(d)+1
      },
      
         
    },
    
    mounted () {
        this.slide ()
        this.sendMinDtaToParentComponent()
        this.sendMaxDtaToParentComponent()
        this.findStartEndOfInputsArrOfInputs ()
    },
    
    computed:{
        qtyOfYears () {//высчитывает количество разных(уникальных) лет авто на сайте, используем напрямую
              let a = []//подставляем в метод slide (). Очень важно устанавливать все, с чего начинаются все
                        //последующие рассчеты через computed свойства, используем как переменные
            this.cars.forEach(el=>{
            let b = el.year
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
      margin-left: -24px;
      position: relative;
        .zindex {
        z-index: 1;
      }
      
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


     .slider-track {
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