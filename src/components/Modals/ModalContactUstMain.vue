<template>
                

                  
    <div class="modalmain">
      <burgerCross
      class="burger_Cross"
      @click="closeForm"
      :iscross="true"
      ></burgerCross>
      <h1 
      v-show="step < 3"
      class="modalmain__title">{{ mess0 }}</h1>
      <form 
      @submit.prevent="subForm"
      novalidate
      action="#">

        <input 
        v-show="step === 2"
        @keyup.enter="stepNext"
        @input="checkTheList"
        @click="formItem = false"
        type="text" 
        class="modalmain__input"
        v-model="regForm.carname" 
        placeholder="Enter make, make choice!"
        @blur="v$.regForm.carname.$touch" 
        @focus="this.warning = false"
        >
        <div 
        v-if="step === 2"
        class="modalmain__choice-box"
        >
          <ul v-for="item in filteredcarname" :key="item.id">
            <li class="modalmain__choice-box-li"
            @click="regForm.selectedcarID = item.id, regForm.carname = `${item.make} - ${item.model}`, formItem = 'true'"
            >{{ item.make }}-{{ item.model }}</li>
          </ul>
        </div>
        
        <div v-if="notInTheList">{{ mess5 }}</div>

        <div v-if="v$.regForm.carname.$error">{{ mess1 }}</div>
      
        <input 
        v-show="step < 3"
        v-if="formItem"
        @keyup.enter="stepNext"
        type="text" 
        autocomplete="off"
        class="modalmain__input"
        v-model="regForm.name" 
        @blur="v$.regForm.name.$touch" 
        placeholder="Your Name">
        <div v-if="v$.regForm.name.$error">{{ mess1 }}</div>

        <input 
        v-show="step < 3"
        v-if="formItem"
        @keyup.enter="stepNext"
        type="tel" 
        class="modalmain__input"
        v-model="regForm.phone" 
        @blur="v$.regForm.phone.$touch" 
        placeholder="Phone Number">
        <div v-if="v$.regForm.phone.$error">{{ mess1 }}</div>

        <input 
        v-show="step < 3"
        v-if="formItem"
        @keyup.enter="stepNext"
        type="email"  
        class="modalmain__input"
        v-model="regForm.email" 
        @blur="v$.regForm.email.$touch" 
        placeholder="Email Address">
        <div v-if="v$.regForm.email.$error">{{ mess1 }}</div>
      
        
      

      <div class="modalmain__form-group3"
      v-show="step === 3"
      >
        <img class="modalmain__icon" src="@/assets/images/contactIcon.svg" alt="contactIcon">
        <h1 class="modalmain__success">{{ mess3 }}</h1>
        <p class="modalmain__subtitle">Our manager will contact you in the nearest time.</p>
      </div>
      
      <div v-show="warning === true">{{ mess4 }}</div>

      <button
        type="button"
        v-show="step < 3"
        v-if="formItem"
        class="modalmain__button"
        @click="subForm()"
        >
        CONTACT ME
      </button>

      <p class="modalmain__you-can">You can contact us yourself</p>

      <div
      class="modalmain__socials"
      >
        <a :href="item.mail" target="_blank"   
        v-for="item in socials" :key="item.id"
        class="modalmain__socials-item"
        >
          <img :src="require('../../assets/images/'+ item.img)" :alt="img" />
        </a>
      </div>


      </form>
      
      

    </div>



               
                    

               
</template>

<script>


import { useVuelidate } from '@vuelidate/core'
import { required, helpers, email } from '@vuelidate/validators'
import burgerCross from '@/components/primitives/BurgerBtn.vue'

const alpha = helpers.regex(/^[a-zA-Za-яёА-ЯЁ]*$/) //все буквы русского и латинского алфавмта

const plus = helpers.regex(/^\+?[ 0-9]+$/)//описание правила написания телефонного номера с плюсом впереди

const car = (id, make, model, bodytype, transmission, price, year, kilometers, image) => ({
        id,
        make,
        model,
        bodytype,
        transmission,
        price,
        year,
        kilometers,
        image
})

const cars = [
    car(1, 'NISSAN', 'L-200', 'Trucks', 'Automatic', 15300, 2012, 30000, 'Mers.png'),
    car(2, 'NISSAN', 'L-200', 'Trucks', 'Automatic', 12000, 2010, 50000, 'Mers.png'),
    car(3, 'MITSUBISHI', 'Outlander', 'SUV', 'Automatic', 12400, 2014, 90000, 'Mers.png'),
    car(4, 'MITSUBISHI', 'Outlander', 'SUV', 'Manual', 10000, 2009, 110000, 'Mers.png'),
    car(5, 'FORD', 'Mondeo', 'Sedan', 'Automatic', 20800, 2013, 150000, 'Mers.png'),
    car(6, 'FORD', 'Mondeo', 'Sedan', 'Manual', 10500, 2005, 200000, 'Mers.png'),
    car(7, 'PORSCHE', 'Porsche-911', 'Sedan', 'Automatic', 60000, 2011, 33000,'Mers.png'),
    car(8, 'PORSCHE', 'Panamera', 'Hatchback', 'Automatic', 32000, 2017, 36000,'Mers.png'),
    car(9, 'SKODA', 'Octavia', 'Hatchback', 'Manual', 12000, 2018, 15000, 'Mers.png'),
    car(10, 'HONDA', 'Accord', 'Coupe', 'Automatic', 11000, 2015, 38000, 'Mers.png'),
    car(11, 'MINI', 'Cabrio', 'Convertiable', 'Automatic', 15800, 2019, 40000, 'Mers.png'),
    car(12, 'OPEL', 'Vivaro', 'VAN', 'Manual', 9000, 2008, 45000, 'Mers.png'),
    car(13, 'MERCEDES', 'Viano', 'VAN', 'Automatic', 27000, 2016, 125000, 'Mers.png'),
    car(14, 'VAS', 'Niva', 'Trucks', 'Manual', 500, 2003, 100000, 'Mers.png'),
]
    
  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    
    name: 'Modal-HomeContactUsMain',
    props:['id'],
    components: {
      burgerCross,

    },
    data() {
      return {
        mess0:'We can`t wait to hear from you!',
        mess1:'Fill in the input field above correctly.',
        mess3:'Application Successful!',
        mess4:'Fill in all the fields of the form!',
        mess5: 'Not in the list. Try another one!',
        warning: false,
        carsArr: cars,
        step:1,
        formItem: true,
        notInTheList:false,
        regForm: {
          name:'',
          phone:'',
          email:'',
          carname:'',
          selectedcarID:null,
        },
        socials:[
          {id:1, mail:"https://www.instagram.com/",img:"instagram.svg"},
          {id:2, mail:"https://uk-ua.facebook.com/",img:"facebook.svg"},
          {id:3, mail:"https://www.youtube.com/",img:"youtube.svg"},
          {id:4, mail:"https://mail.google.com/mail/u/0/?tab=rm#inbox",img:"mail.svg"}
        ]

        
      }
    },

    methods:{
      subForm () {
        if (this.step == 1 && !(this.regForm.name == '' || this.regForm.phone == '' || this.regForm.email == '')){
          this.step = 2
        } else if (this.step == 2 && !this.regForm.carname == '') {
          for (let input in this.regForm) {
            this.regForm[input] = ''
          }
          this.v$.$reset()
          this.step = 3
          this.warning = false
        } else {
          this.warning = true
        }
        
      
        
      },
      closeForm () {
        this.$emit('closeForm')
      },
      checkWarning () {
        if (!this.regForm.name == '' && !this.regForm.phone == '' && !this.regForm.email == '' && this.step == 1) {
          this.warning = false
        }
      },
      stepNext () {
        if (!this.v$.regForm.name.$invalid && !this.v$.regForm.phone.$invalid && !this.v$.regForm.email.$invalid ) {
          this.step = 2
        }
      },
      checkTheList () {
          if (this.filteredcarname.length == 0 && !this.regForm.carname == '') {
            this.notInTheList = true
          } else if (this.filteredcarname.length > 0 && !this.regForm.carname == '') {
            this.notInTheList = false
          } else if (this.filteredcarname.length == 0 && this.regForm.carname == '') {
            this.notInTheList = false
          }
          
        
      }
     
    },
    
    computed: {
      invalid () {
        return this.v$.regForm.name.$invalid || this.v$.regForm.phone.$invalid || this.v$.regForm.email.$invalid 
      },
      
      filteredcarname (){

        let a = this.regForm.carname.toUpperCase()
        return this.carsArr.filter(function (elem) {
        if(a==='') return false
        else return elem.make.indexOf(a) > -1;
        })

      }
    },
    updated () {
      this.checkWarning ()
    },
    created () {
        const a = this.$store.state.carpageid
        for (let b = 0; b<this.carsArr.length; b++ ) {
          let v = this.carsArr[b]
          if (v.id === a) {
            this.regForm.carname = v.make + '  ' + v.model
          } }
    },
      validations () {
      return {
        regForm: {
          carname: { required }, 
          name: { required, alpha }, 
          phone: { required,  plus },
          email: { required, email },
        }
        
      }
    },
   





  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
  .modalmain {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 75px;
    background-color: #fff;

    &__choice-box {
      max-height: 200px;
      overflow: auto;
    }
    &__choice-box-li {
      list-style-type: none;
      margin-left: -30px;
      cursor: pointer;
    }
    &__form-group3 {
      margin-top: 35%;
    }
    &__success {
      margin-top: 10%;
    }
    &__title {
      @include   letterH4HeadingBurgerMenuTextNumbersDarkBlue    ;
      margin-bottom: 80px;
    }
    &__success {
      @include   letterH4HeadingBurgerMenuTextNumbersDarkBlue    ;
    }
    &__input {
      width: 100%;
      margin-bottom: 11px;
    }
    &__button {
      width: 100%;
      margin-top: 20px;
      background-color: #7481FF;
      color: #fff;
      border: 0;
      padding: 7px 0px;
    }
    &__you-can {
      @include    letterSemiboldDarkBlue  ;
      margin-top: 60px;
    }
    &__socials {
      display: flex;
    }
    &__socials-item {
      margin-right: 10px;
    }
    
  }
  .burger_Cross {
    margin-left: 24px;
    margin-top: -72px;
    margin-bottom: 43px;
  }
        
 
		





  
</style>