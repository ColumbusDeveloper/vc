<template>
  <div class="progress ">
    
      
    <input  

    type="range" 
    min="0" 
    max="450000" 
    name="range" 
    step="100"
    v-model.number="price"
    v-on:input="progbarchagedata"
   
    


    >
  

    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Progressinputprice-bar',
    components: {
      


    },
    props:['proginputprise'],
    data() {
      return {

        price:0,
        
          
      }
    },
    watch:{
      proginputprise (newVal) {
        this.price = newVal
      }
    },

    methods:{
      progbarchagedata () {
        this.$emit ('progbarchagedata',this.price)
      },
      
    },

  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
.progress {
  padding: 0;
  
  display: flex;
  align-items: center;
  
}



input[type=range]  {
width: 900px; //ширина самого слайдера
-webkit-appearance: none; //сброс встроенных стилей 
-moz-appearance: none;
appearance: none;
outline: none;
height: 5px; //высота самого инпута
}

input[type=range]::-webkit-slider-runnable-track {
  height: 5px; // высота для браузера хром
  background-color: #D7D7D7;
  
}

input[type=range]::-webkit-slider-thumb {
  background: #ecf0f1;
  cursor: pointer;
  width:15px;
  min-height: 15px; // размеры ползунка
  -webkit-appearance: none;
  margin-top: -5px; // ниже две тени, белая перекрывает голубую, получается узкая полоса
  box-shadow:  -900px  -902px   0 890px  white,
               -900px -893px   0 890px  #7481FF;           
  border-width:1px;
  border-style: solid;
  border-color: white;
  background-color: #7481FF; //цвет ползунка
}

input[type=range]::-moz-range-track {
    height: 5px;
    background-color: #D7D7D7;
}


input[type=range]::-moz-range-thumb {
  background: #ecf0f1;
  cursor: pointer;
  height: 5px; //стили для мозиллы
  border-radius:0px;
  box-shadow:  -900px  -902px   0 890px  white,
               -900px -893px   0 890px  #7481FF;
  padding: 0px;
  margin: 0px;
}



    







  
</style>