<template>
  
        <div class="container">
          <div class="row">
            <div class="col catalog">
              
              <makemodelselect
              :catalogpropscars="cars"
              @changeovers="fillId"
              ></makemodelselect>

              <mediatorformakemodelcard
              :carsfromcatalogmain="cars"
              :modelsfromcatalogmain='models'
              :modelsfromcatalogview ='allmodels'
              >

              </mediatorformakemodelcard>



          

            </div>
          </div>   
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
    car(0, 'Porsche', 'Panamera', 'Sedan', 'Automatic', 50000, 2012, 30000, 'Panamera1.jpg'),
    car(1, 'Audi', 'A3', 'Sedan', 'Automatic', 30000, 2010, 10000, 'AudiA31.jpg'),
    car(2, 'Ford', 'Mondeo', 'Sedan', 'Automatic', 20000, 2013, 19000, 'FordMondeo1.jpg'),
    car(3, 'Porsche', 'Porsche-911', 'Sedan', 'Automatic', 60000, 2011, 33000,'Porsche9111.jpg'),
    car(4, 'Audi', 'Q7', 'Hatchback', 'Automatic', 52000, 2018, 15000, 'AudiQ71.jpg'),
    car(5, 'Ford', 'Electra', 'Sedan', 'Automatic', 11000, 2015, 38000, 'FordElectra20.jpg'),
    car(6, 'Ford', 'Electra', 'Sedan', 'Automatic', 15000, 2017, 40000, 'FordElectra21.jpg'),
    car(7, 'Ford', 'Electra', 'Sedan', 'Automatic', 12000, 2016, 45000, 'FordElectra22.jpg')
]


import makemodelselect from '../components/CATALOG/CatalogMakeModelChoiсe11.vue'
import mediatorformakemodelcard from '../components/CATALOG/MediatorForMakeCardCatalog.vue'

export default {
  name: 'CatalogView',
  data () {
    return {
      cars: cars,
      models:[],
      var:[],
      id:[],
      allmodels:[],
  
    }
  },
  components: {
    makemodelselect,
    mediatorformakemodelcard,
  },
  watch:{
    id (val) {

      let a = val
      let x = []
      for (let value of Object.values(a)) {
        let a = value
        let b = this.cars.filter(el=>el.id===a)[0].model
        x.push(b)
      }
      x = [...new Set(x)]
      this.models = x   
    }
  },
  methods:{
      fillId(val) {
        this.id=val
        this.id = [...new Set(this.id)]
      }
  },
  created () {
    this.cars.forEach(el=>{
      let a = el.model
      this.allmodels.push(a)
   })
  },

  mounted () {

  },
  computed:{
        
  }
   
     
}
</script>

<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .main {
    height: 100px;
    width: 100px;
    border-width:2px;
    border-style: solid;
    border-color: #000;
  }
  .catalog{
    display: flex;
    justify-content: space-between;
  }
  
  

</style>

