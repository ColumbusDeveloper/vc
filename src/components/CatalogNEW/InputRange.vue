<template>
  <div class="singleinput">


   
    
    <div class="wrapper">
      
      <input type="range" min="20" max="200"  step="1" class = "slider"
      @input="slide()"
      v-model="singleinputmodel"
      >
      <div class="progress" ref="head"></div>

    </div>

   
       
    
    

    
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Single-input',
    components: {
      


    },
    props:['carspropsinprange'],
    

    data() {
      return {

        singleinputmodel:70,
        cars:this.carspropsinprange,
        
              
      }
    },
    watch:{
      carspropsinprange (val) {
        this.cars = val
      }
    },

    methods:{
    
      slide() {
        let sliderOne = document.querySelector('.slider')   
        let sliderMaxValue = document.querySelector('.slider').max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100-4
        let percent2 = (sliderOne.value/sliderMaxValue) * 100-4
        this.$refs.head.style.background = `linear-gradient(to right, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
      },
         
    },
    
    computed:{

      

    },
    mounted() {
        
        this.slide() 
      
    }
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';

    .wrapper{
      position: relative;
      width: auto;
  
    }

   
   
    input{
      -webkit-appearance: none; 
      height: 6px;
      width: 100%;
      background-color: transparent;
      outline: none;
      -webkit-transition: .2s;
      transition: opacity .2s;
      cursor: pointer;
      width: 100%;

    }

    input::-webkit-slider-thumb {
      -webkit-appearance: none; 
      height: 18px;
      width: 18px;
      background: #7481FF;
      cursor: pointer;
      border-radius: 1px;
      margin-top: -17px;
    }

    .progress{
      -webkit-appearance: none; 
      border-radius: 1px; 
      height: 6px;
      background-color: #D7D7D7;
      margin-top: -20px;
    }

    input[type="range"]:active::-webkit-slider-thumb {
      background-color: #090b18;  
      border: 1px solid  #7481FF;
    }
 
</style>