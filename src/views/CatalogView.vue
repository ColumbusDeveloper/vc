<template>
    <div class="d-flex flex-column min-vh-100">
        <div class="container">
          <div class="row">
              <div class="col header" @clearmagtopform="setMagtopformInventoryComponent">
                <Headerone  class="center" :liclickedtextoff="navliclicktextoffstate"  />
                <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"  />
                <transition name="menu">
                  <burgerlist v-if="iscross" class="burgerlist" :listate="navliclicktextoffstate" v-on:click="iscross=!iscross" v-on:navliclicktextoffevent="changenavliclicktextoffstate"  />
                </transition>
              </div>
          </div>
      </div>
      <main class="flex-fill">
        <div class="container">
          <div class="row">
              <div class="col catalog">
                
                <catalog
                :catalogpropscars="cars"
                @emitToPage="getEmitToPage"
                ></catalog>

              </div>
          </div>   
        </div> 
      </main>
      <Footer class="center" />
    </div> 
    
        
     
</template>



<script>
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


import catalog from '../components/CatalogNEW/CatalogMainComponent.vue'
import Headerone from '@/components/HeaderCatalog.vue'
import Footer from '@/components/Footer.vue'
import burgerbtn from '@/components/primitives/BurgerBtn.vue'
import burgerlist from '@/components/primitives/BurgerCollapceList.vue'



export default {
  name: 'CatalogView',
  props:['magtopvar'],
  data () {
    return {

      iscross: false,
      navliclicktextoffstate:false,


      cars:cars,
      
      datatest:Number,
     
  
    }
  },
  components: {
    catalog,
    Headerone,
    Footer,
    burgerbtn,
    burgerlist,
   
  },
  watch:{
      iscross (newVal) {
        this.navliclicktextoffstate = newVal 
      },
      
  },
  methods:{
      
      changenavliclicktextoffstate (newVal) {
        this.navliclicktextoffstate = newVal
      },
      
      getEmitToPage (val) {
        this.datatest = val
      },
      toApp () {
        this.$emit("fromcatalog",this.datatest)
      }


      
      
  },


  
  computed:{
        
  },

  created () {
          this.getEmitToPage ()      
  },
  mounted () {
    this.toApp ()
  }

   
     
}
</script>

<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .wrapper {
    max-width: 1440px;


    }
    .header {
    display: flex;
    justify-content: space-between;
    }
    .burgerlist {
    position: absolute;
    }

    .menu-enter-active,
    .menu-leave-active {
    transition: all .5s;
    }
    .menu-enter,
    .menu-leave-to {
    opacity: 0;

    }
 
  
  

</style>

