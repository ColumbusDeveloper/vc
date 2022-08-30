<template>
  <div class="doubleinput">


    <div class="wrapper"> 
      <div class="container">
        <div class="slider-track" ref="header"></div>
        <input type="range" min="1"  v-model="minYear" step="1" class="inp min" id="slider-1" @input="slideOne(),slide(),dataMinYearToCatalog()">
        <input type="range" min="1"  v-model="maxYear" step="1" class="inp max" id="slider-2" @input="slideTwo(),slide(),dataMaxYearToCatalog()">
      </div>
    </div>


       
    
    

    
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Input-year',

    components: {
      


    },
    props:['carspropsyear','qtyyears'],
    

    data() {
      return {

        minYear:4,
        maxYear:8,
        cars:this.carspropsyear,
        inputmax:null,
                 
      }
    },
    watch:{
      carspropsyear (val) {
        this.cars = val
      },
      qtyyears (val) {
        this.inputmax = val
      }
      
    },

    methods:{

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
        sliderOne.max=this.qtyyears
        sliderTwo.max=this.qtyyears
        let sliderMaxValue = document.getElementById("slider-1").max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100 -5
        let percent2 = (sliderTwo.value/sliderMaxValue) * 100 -5
        this.$refs.header.style.background = `linear-gradient(to right, #D7D7D7 ${percent1}%, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
      },
      dataMinYearToCatalog() {
        this.$emit('fromYearMin',this.minYear)
      },
      dataMaxYearToCatalog() {
        this.$emit('fromYearMax',this.maxYear)
      },
         
    },
    mounted () {
        this.slide ()
        this.dataMinYearToCatalog()
        this.dataMaxYearToCatalog()
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