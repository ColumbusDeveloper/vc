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
      // sendDataToParent() {//отправляет данные о состоянии инпута (модель singleinputmodel) родительскому компоненту
      //   this.$emit('datafromsingleinput',this.singleinputmodel) //отправляем родительскому компоненту данные о состоянии инпута
      // },   

      // setSliderMax () {
      //   let sliderOne = document.querySelector('.slider') 
      //   sliderOne.max = this.qtyOfKilometers //также устанавливается max инпута, как количество разных показателей километража, зарегистрированных авто
      // },

      // startInput() {//метод формирует сам инпут и закраску активной и пассивной его частей в динамике
      //   let sliderOne = document.querySelector('.slider')     
      //   let sliderMaxValue = document.querySelector('.slider').max
      //   let percent1 = (sliderOne.value/sliderMaxValue) * 100-4//цифра после 100 устанавливается путем подбора
      //   let percent2 = (sliderOne.value/sliderMaxValue) * 100-4
      //   this.$refs.head.style.background = `linear-gradient(to right, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)` //полоска 
      // }, //закрашивается в разной степени в зависимости от состояния инпута
     
      // findStartPositionOfInput () {//добывает отсортированный по возрастанию массив уникальных пробегов авто
      //   let a = []//записывает массив в переменную arrofkilometers, старт инпута это длинна массива arrofkilometers, сразу устанавливаем зачение модели
      //             //при запуске приложения в mounted()
      //   this.cars.forEach(el=>{
      //   let b = el.kilometers
      //   a.push(b)
        
      //   })
      //   a = [...new Set(a)]
      //   a = Object.values(a)
      //   a.sort(function(a,b){
      //     return a-b
      //   })
      //   this.arrofkilometers = a
   
      //   this.singleinputmodel = this.arrofkilometers.length

      // }, 
    },
    
    computed:{

    //   qtyOfKilometers () {//высчитывает количество разных(уникальных) проезженных километров на авто на сайте, используем напрямую
    //       let a = []//подставляем в метод slideS (). Очень важно устанавливать все, с чего начинаются все
    //                   //последующие рассчеты через computed свойства, используем как переменные
    //       this.cars.forEach(el=>{
    //       let b = el.kilometers
    //       a.push(b)
          
    //       })
    //       a = [...new Set(a)]
    //       a = Object.values(a)
    //       a.sort(function(a,b){
    //         return a-b
    //       })
    //       return a.length
    //    },

    },
    mounted() {
        
        // this.setSliderMax ()//сразу устанавливаем максимальный размер инпута
        // this.findStartPositionOfInput ()//устанавливаем инпут в максимальное положение
        // this.sendDataToParent()//сразу отправляем данные осостоянии инпута родительскому компоненту
    }
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';

    
 
</style>