<template>
  <div class="doubleinput">


   
    <div class="range">
      <div class="sliderValue">
        <span>
          100
        </span>
      </div>
      <div class="field">
        <div class="value left">0</div>
          <input type="range" min="0" max="200" value="100" step="1">
        <div class="value right">200</div>
      </div>

    </div>
       
    
    

    
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Single-input',
    components: {
      


    },
    props:[''],
    

    data() {
      return {

        min:10000,
        max:100000,
        percentForBac1:null,
              
      }
    },
    watch:{
      
    },

    methods:{
    //   slideOne() {
    //     let minGap = 5000
    //     let sliderOne = document.getElementById("slider-1")
    //     let sliderTwo = document.getElementById("slider-2")
    //     if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    //       sliderOne.value = parseInt(sliderTwo.value) - minGap
    //     }
        
    //   },
    //   slideTwo() {
    //     let minGap = 10000
    //     let sliderOne = document.getElementById("slider-1")
    //     let sliderTwo = document.getElementById("slider-2")
    //     if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    //       sliderTwo.value = parseInt(sliderOne.value) + minGap
    //     }
    //   },
    //   slide () {
    //     let sliderOne = document.getElementById("slider-1")
    //     let sliderTwo = document.getElementById("slider-2")
    //     let sliderMaxValue = document.getElementById("slider-1").max
    //     let percent1 = (sliderOne.value/sliderMaxValue) * 100
    //     this.percentForBac1=percent1
    //     let percent2 = (sliderTwo.value/sliderMaxValue) * 100
    //     this.percentForBac2=percent2
    //     this.$refs.head.style.background = `linear-gradient(to right, #D7D7D7 ${percent1}%, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
    //   },
      



      
    },
    
    computed:{

      

    },
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    .range .field {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .range .field input{
      -webkit-appearance: none;
      height: 5px;
      width: 100%;
      background: #ddd;
      border-radius: 2px;
      outline: none;
      border: none;
    }

    .range .field .value{
      position: absolute;
      font-size: 18px;
      font-weight: 600;
      color: #664AFF;
    }

    .range .field .value.left{
      left: -22px;
    }

    .range .field .value.right{
      right: -43px;
    }

    .range .sliderValue {
      position: relative;
      width: 100%;
    }

    .range .sliderValue span{
      position: absolute;
      height: 45px;
      width: 45px;
      color: #fff;
      font-weight: 500;
      top: -40px;
      transform: translateX(-50%);
      line-height: 55px;
      z-index: 2;
    }

    .range .sliderValue span:after {
      position: absolute;
      content: '';
      height: 45px;
      width: 45px;
      background: red;  
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      z-index: -1;
    }

    .range .field input::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 18px;
      width: 18px;
      background: #7481FF;
      border-radius: 2px;
      border: 1px solid #664AFF;
      cursor: pointer;

    }
    
    //  .wrapper {
       
    //   position: relative;
    //   width: auto;
      
    //  }

    //  .container {
    //   margin-left: -24px;
    //  }

    //  .inp {
    //   width: auto;
    //  }
     

    //  input[type="range"] {
    //   -webkit-appearance: none;
    //   -moz-appearance: none;
    //   appearance: none;
    //   width: 100%;
    //   outline: none;
    //   position: absolute;
    //   margin: auto;
    //   top: 0;
    //   bottom: 0;
    //   background-color: transparent;
    //   pointer-events: none;
    //  }

    //   input[type="range"]::-webkit-slider-runnable-track {
    //     -webkit-appearance: none;
    //     height: 5px;
    //   }

    //   input[type="range"]::-moz-range-track {
    //     -moz-appearance: none;
    //     height: 5px;
    //   }

    //   input[type="range"]::-ms-track{
    //     appearance: none;
    //     height: 5px;
    //   }

    //   input[type="range"]::-webkit-slider-thumb {
    //     -webkit-appearance: none;
    //     height: 1rem;
    //     width: 1rem;
    //     background-color:#7481FF ;
    //     cursor: pointer;
    //     border-radius: 1px;
    //     margin-top: -6px;
    //     pointer-events: auto;
    //   }

    //   input[type="range"]::-moz-range-thumb {
    //     -webkit-appearance: none;
    //     height: 1rem;
    //     width: 1rem;
    //     background-color:#7481FF ;
    //     cursor: pointer;
    //     border-radius: 1px;        
    //     pointer-events: auto;
    //   }

    //   input[type="range"]::-ms-thumb {
    //     appearance: none;
    //     height: 1rem;
    //     width: 1rem;
    //     background-color:#7481FF;
    //     cursor: pointer;
    //     border-radius: 1px; 
    //     pointer-events: auto;          
    //   }

    //   input[type="range"]:active::-webkit-slider-thumb {
    //     background-color:#ffffff ;
    //     border: 3px solid #7481FF;
    //   }

    //  .slider-track {
    //   width: 100%;
    //   height: 5px;
    //   position: absolute;
    //   margin: auto;
    //   top: 0;
    //   bottom: 0;
    //   border-radius: 2px;
    //  }

    //  .values {
    //   background-color: #7481FF;
    //   width: 50px;
    //   position: relative;
    //   margin: auto;
    //   padding: 10px 0;
    //   text-align: center;
    //   color: #ffffff;
    //  }
     





    







  
</style>