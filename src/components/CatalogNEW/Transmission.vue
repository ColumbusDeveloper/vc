<template>
  <div class="inputcheckbox">
 
    <div class="inputcheckbox__automatic">
      <input type="checkbox" id="checkbox" v-model="automatchecked">
      <label for="checkbox">Automatic</label> 
    </div>

    <div class="inputcheckbox__manual">
      <input type="checkbox" id="checkbox" v-model="manualchecked">
      <label for="checkbox">Manual</label> 
    </div>

     
  </div>
</template>

<script>
  

  export default {
    
    name: 'Transmission-input',
    components: {
      


    },
    props:['carspropsinpcheck'],
    

    data() {
      return {

        
        cars:this.carspropsinprange,//получаем пропсами основной массив авто от родителя
        
              
      }
    },
    watch:{
      carspropsinprange (val) {//постоянно обновляем основной массив авто от родителя, вдруг что-то новое появилось
        this.cars = val
      }
    },

    methods:{
      
    },
    
    computed:{

    
    },
    mounted() {
        
       
    }
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';

    
 
</style>