<template>
  <div class="doubleinput">


    <div class="wrapper"> 
      <div class="container">
        <div class="slider-track" ref="header"></div>
        <input type="range" min="1" max="200000" v-model="minPrice" class="inp min" id="slider-1" @input="slideOne(),slide()">
        <input type="range" min="1" max="200000" v-model="maxPrice"  class="inp max" id="slider-2" @input="slideTwo(),slide()">
      </div>
    </div>

    <!--один инпут для минимальной цены, другой для масксимальной, в моделях уже есть данные
    они и определят начальное положение инпутов при запуске страницы
    запуск именно этого состояния позунков выполняется через запуск метода slide () в mounted ()-->

    
       
    
    

    
  

    
  
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

        minPrice:10000,
        maxPrice:100000,
        cars:this.carspropsprice
                   
      }
    },
    watch:{
      carspropsprice (val) {
        this.cars = val
      }
    },

    methods:{
      slideOne() {
        let minGap = 5000
        let sliderOne = document.getElementById("slider-1")
        let sliderTwo = document.getElementById("slider-2")
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderOne.value = parseInt(sliderTwo.value) - minGap
        }
        

      },
      slideTwo() {
        let minGap = 10000
        let sliderOne = document.getElementById("slider-1")
        let sliderTwo = document.getElementById("slider-2")
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderTwo.value = parseInt(sliderOne.value) + minGap
        }
      },
      slide () {
        let sliderOne = document.getElementById("slider-1")
        let sliderTwo = document.getElementById("slider-2")
        let sliderMaxValue = document.getElementById("slider-1").max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100 
        let percent2 = (sliderTwo.value/sliderMaxValue) * 100
        this.$refs.header.style.background = `linear-gradient(to right, #D7D7D7 ${percent1}%, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
      },
      



      
    },
    mounted () {
        this.slide ()
    },
    
    computed:{

      

    },
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
     .wrapper {
       
      position: relative;
      width: auto;
      
     }

     .container {
      margin-left: -24px;
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