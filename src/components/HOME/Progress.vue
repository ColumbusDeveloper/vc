<template>
  <div class="progress ">
    
      
    <input  type="range" min="0" max="100" value="50" name="range" step="1"/>


    
  
  </div>
</template>

<script>
  

  export default {
    
    name: 'Progress-bar',
    components: {
      


    },
    data() {
      return {

        



      }
    },

    methods:{
      
    }





  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
.progress {

  height: 20px;
  width: 100%;
  border-width:2px;
  border-style: solid;
  border-color: #000;
  display: flex;
  align-items: center;
  

}



input[type=range]  {
width: 300px; //
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
outline: none;
height: 5px;
}

input[type=range]::-webkit-slider-runnable-track {
  height: 7px;
  background-color: #D7D7D7;
  
}

input[type=range]::-webkit-slider-thumb {
  background: #ecf0f1;
  cursor: pointer;
  width:15px;
  min-height: 15px;
  -webkit-appearance: none;
  margin-top: -4px;
  box-shadow:  -200px  -201px   0 190px  white,
               -200px -193px   0 190px  #7481FF;           
  border-width:1px;
  border-style: solid;
  border-color: white;
  background-color: #7481FF; 
}

input[type=range]::-moz-range-track {
    height: 5px;
    background-color: #D7D7D7;
}


input[type=range]::-moz-range-thumb {
  background: #ecf0f1;
  cursor: pointer;
  height: 7px;
  border-radius:0px;
  box-shadow:  -200px  -201px   0 190px  white,
               -200px -193px   0 190px  #7481FF;
  padding: 0px;
  margin: 0px;
}



    







  
</style>