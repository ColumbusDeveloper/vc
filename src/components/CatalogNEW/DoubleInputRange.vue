<template>
  <div class="doubleinput">


    <div class="wrapper"> 
      <div class="container">
        <div class="slider-track" ref="header"></div>
        <input type="range" min="1" max="300000" value="5000" class="inp" id="slider-1" @input="slideOne(),slide()">
        <input type="range" min="1" max="300000" value="150000" class="inp" id="slider-2" @input="slideTwo(),slide()">
      </div>
    </div>
    
       
    
    

    
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Double-input',
    components: {
      


    },
    props:[''],
    

    data() {
      return {

        minPrice:10000,
        maxPrice:100000,
        percentForBac1:null,
        percentForBac2:null,
              
      }
    },
    watch:{
      
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
        this.percentForBac1=percent1
        let percent2 = (sliderTwo.value/sliderMaxValue) * 100
        this.percentForBac2=percent2
        this.$refs.header.style.background = `linear-gradient(to right, #D7D7D7 ${percent1}%, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
      },
      



      
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
        height: 1rem;
        width: 1rem;
        background-color:#7481FF ;
        cursor: pointer;
        border-radius: 1px;
        margin-top: -6px;
        pointer-events: auto;
      }

      input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        height: 1rem;
        width: 1rem;
        background-color:#7481FF ;
        cursor: pointer;
        border-radius: 1px;        
        pointer-events: auto;
      }

      input[type="range"]::-ms-thumb {
        appearance: none;
        height: 1rem;
        width: 1rem;
        background-color:#7481FF;
        cursor: pointer;
        border-radius: 1px; 
        pointer-events: auto;          
      }

      input[type="range"]:active::-webkit-slider-thumb {
        background-color:#ffffff ;
        border: 3px solid #7481FF;
      }

     .slider-track {
      width: 100%;
      height: 5px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      border-radius: 2px;
     }

     .values {
      background-color: #7481FF;
      width: 50px;
      position: relative;
      margin: auto;
      padding: 10px 0;
      text-align: center;
      color: #ffffff;
     }
     





    







  
</style>