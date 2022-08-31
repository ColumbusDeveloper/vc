<template>
  <div class="doubleinput">


    <div class="wrapper"> 
      <div class="container">
        <div class="slider-trackP" ref="pr"></div>
        <input type="range" min="1"  v-model="minPrice" class="inp min" step="1" id="slider-11" @input="slideOneP(),slideP()">
        <input type="range" min="1"  v-model="maxPrice"  class="inp max" step="1" id="slider-22" @input="slideTwoP(),slideP()">
      </div>
    </div>

    
    
    

    
  

    
  
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

        minPrice:4,
        maxPrice:8,
        cars:this.carspropsprice,
        arrOfPrices:[],
        qty:this.qtyOfPrices,
                   
      }
    },
    watch:{
      carspropsprice (val) {
        this.cars = val
      },
      qtyOfPrices (val) {
        this.qty = val
      }
      
    },

    methods:{
      slideOneP() {
        let minGap = 1
        let sliderOne = document.getElementById("slider-11")
        let sliderTwo = document.getElementById("slider-22")
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderOne.value = parseInt(sliderTwo.value) - minGap
        }
      },
      slideTwoP() {
        let minGap = 1
        let sliderOne = document.getElementById("slider-11")
        let sliderTwo = document.getElementById("slider-22")
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