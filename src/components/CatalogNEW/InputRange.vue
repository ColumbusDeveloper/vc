<template>
  <div class="doubleinput">


   
    <div class="range">
      <div class="wrapper">
       
        <input type="range" min="0" max="200" value="20" step="1" class = "slider"
        @input="slide()"
        >
        <div class="progress"></div>

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

        min:0,
        max:200,
        
              
      }
    },
    watch:{
      
    },

    methods:{
    
      slide() {
        const slider = document.querySelector('.slider')
        let a = slider.value/2
        const progress = document.querySelector('.progress')
        progress.style.width = `${a}%`
      },
      



      
    },
    
    computed:{

      

    },
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';

    .wrapper{
    
      position: relative;
    
    }

   
   
    .range  input{
      -webkit-appearance: none;
      height: 6px;
      width: 100%;
      background-color: #D7D7D7;
      outline: none;
      -webkit-transition: .2s;
      transition: opacity .2s;
      cursor: pointer;
    }

    .range  input::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 18px;
      width: 18px;
      background: #7481FF;
      cursor: pointer;
      border-radius: 1px;

    }

    .progress{
      -webkit-appearance: none;
      position: absolute;
      content:'';
      border-radius: 1px;
      height: 6px;
      background-color: #7481FF;
      top: calc(50% );
      z-index: 1;
    }
 
</style>