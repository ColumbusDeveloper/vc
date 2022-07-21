<template>
                <div class="progress">
                   
                       <p>Hello!</p> 
                       <input type="range" value="0" min="0" max="100" step="1"/>

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
    
 


input[type=range]  {
  width: 200px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
  border-radius: 10px/100%;
  height: 7px;
  border: 1px solid cyan;
  background-color: #fff;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #ecf0f1;
  border: 1px solid cyan;
  
  cursor: pointer;
  width:15px;
  height: 15px;
  
  margin-top: -5px;
  
  background-color: aqua;
  
}

input[type=range]::-moz-range-track {
  border-radius: 10px/100%;
  height: 5px;
  border: 1px solid cyan;
  background-color: #fff;
}

input[type=range]::-moz-range-thumb {
  background: #ecf0f1;
  border: 1px solid cyan;
  border-radius: 10px/100%;
  cursor: pointer;
}

    







  
</style>