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
    props:[''],
    

    data() {
      return {

        singleinputmodel:70,//эта же модель устанавливает начальное положение ползунка
        
              
      }
    },
    watch:{
      
    },

    methods:{
    
      slide() {
        let sliderOne = document.querySelector('.slider')   
        let sliderMaxValue = document.querySelector('.slider').max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100-4//подбирается опытным путем
        let percent2 = (sliderOne.value/sliderMaxValue) * 100-4
        this.$refs.head.style.background = `linear-gradient(to right, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)`  
      },
         
    },
    
    computed:{

      

    },
    mounted() {
        
        this.slide() //для того чтобы программа запустилась сама после отрисовки страницы
      
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
      -webkit-appearance: none; // сам инпут, мы тут его полнстью обнуляем и создаем полностью
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
      -webkit-appearance: none; //сам ползунок, можно менять как хочешь
      height: 18px;
      width: 18px;
      background: #7481FF;
      cursor: pointer;
      border-radius: 1px;
      margin-top: -17px;
    }

    .progress{
      -webkit-appearance: none; //полоска, что собой заменяет полоску инпута, сразу устанавливаем бэкграунд,
      border-radius: 1px; //потом метод slide() добавляет новый бэкграунд по мере продвижения ползунка
      height: 6px;
      background-color: #D7D7D7;
      margin-top: -20px;
    }

    input[type="range"]:active::-webkit-slider-thumb {
      background-color: #090b18;  //при нажатии меняет цвет, типа ховер
      border: 1px solid  #7481FF;
    }
 
</style>