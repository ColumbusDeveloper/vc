<template>
  <div class="singleinput">


   
    
    <div class="wrapper">
      
      <input type="range" min="1"  step="1" class = "slider"
      @input="startInput(),sendDataToParent()"
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

        singleinputmodel:null,//модель, хранит положение инпута
        arrofkilometers:[],
        cars:this.carspropsinprange,//получаем пропсами основной массив авто от родителя
        
              
      }
    },
    watch:{
      carspropsinprange (val) {//постоянно обновляем основной массив авто от родителя, вдруг что-то новое появилось
        this.cars = val
      }
    },

    methods:{
      sendDataToParent() {//отправляет данные о состоянии инпута (модель singleinputmodel) родительскому компоненту
        this.$emit('datafromsingleinput',this.singleinputmodel) //отправляем родительскому компоненту данные о состоянии инпута
      },   

      setSliderMax () {
        let sliderOne = document.querySelector('.slider') 
        sliderOne.max = this.qtyOfKilometers //также устанавливается max инпута, как количество разных показателей километража, зарегистрированных авто
      },

      startInput() {//метод формирует сам инпут и закраску активной и пассивной его частей в динамике
        let sliderOne = document.querySelector('.slider')     
        let sliderMaxValue = document.querySelector('.slider').max
        let percent1 = (sliderOne.value/sliderMaxValue) * 100-4//цифра после 100 устанавливается путем подбора
        let percent2 = (sliderOne.value/sliderMaxValue) * 100-4
        this.$refs.head.style.background = `linear-gradient(to right, #7481FF ${percent1}%, #7481FF ${percent2}%,#D7D7D7 ${percent2}%)` //полоска 
      }, //закрашивается в разной степени в зависимости от состояния инпута
     
      findStartPositionOfInput () {//добывает отсортированный по возрастанию массив уникальных пробегов авто
        let a = []//записывает массив в переменную arrofkilometers, старт инпута это длинна массива arrofkilometers, сразу устанавливаем зачение модели
                  //при запуске приложения в mounted()
        this.cars.forEach(el=>{
        let b = el.kilometers
        a.push(b)
        
        })
        a = [...new Set(a)]
        a = Object.values(a)
        a.sort(function(a,b){
          return a-b
        })
        this.arrofkilometers = a
   
        this.singleinputmodel = this.arrofkilometers.length

      }, 
    },
    
    computed:{

      qtyOfKilometers () {//высчитывает количество разных(уникальных) проезженных километров на авто на сайте, используем напрямую
          let a = []//подставляем в метод slideS (). Очень важно устанавливать все, с чего начинаются все
                      //последующие рассчеты через computed свойства, используем как переменные
          this.cars.forEach(el=>{
          let b = el.kilometers
          a.push(b)
          
          })
          a = [...new Set(a)]
          a = Object.values(a)
          a.sort(function(a,b){
            return a-b
          })
          return a.length
       },

    },
    mounted() {
        
        this.setSliderMax ()//сразу устанавливаем максимальный размер инпута
        this.findStartPositionOfInput ()//устанавливаем инпут в максимальное положение
        this.sendDataToParent()//сразу отправляем данные осостоянии инпута родительскому компоненту
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
      appearance: none; 
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
      appearance: none; 
      height: 18px;
      width: 18px;
      background: #7481FF;
      cursor: pointer;
      border-radius: 1px;
      margin-top: -17px;
    }

    .progress{
      appearance: none; 
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