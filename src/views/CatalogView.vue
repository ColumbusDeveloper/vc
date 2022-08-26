<template>
  
        <div class="container">
          <div class="row">
            <div class="col catalog">
              
              <catalog
              
              ></catalog>

              



          

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
    car(1, 'NISSAN', 'L-200', 'Trucks', 'Automatic', 15000, 2012, 30000, 'Mers.png'),
    car(2, 'NISSAN', 'L-200', 'Trucks', 'Automatic', 12000, 2010, 50000, 'Mers.png'),
    car(3, 'MITSUBISHI', 'Outlander', 'SUV', 'Automatic', 12000, 2010, 90000, 'Mers.png'),
    car(4, 'MITSUBISHI', 'Outlander', 'SUV', 'Manual', 10000, 2009, 100000, 'Mers.png'),
    car(5, 'FORD', 'Mondeo', 'Sedan', 'Automatic', 20000, 2013, 150000, 'Mers.png'),
    car(6, 'FORD', 'Mondeo', 'Sedan', 'Manual', 10000, 2005, 200000, 'Mers.png'),
    car(7, 'PORSCHE', 'Porsche-911', 'Sedan', 'Automatic', 60000, 2011, 33000,'Mers.png'),
    car(8, 'PORSCHE', 'Panamera', 'Hatchback', 'Automatic', 30000, 2011, 33000,'Mers.png'),
    car(9, 'SKODA', 'Octavia', 'Hatchback', 'Manual', 12000, 2018, 15000, 'Mers.png'),
    car(10, 'HONDA', 'Accord', 'Coupe', 'Automatic', 11000, 2015, 38000, 'Mers.png'),
    car(11, 'MINI', 'Cabrio', 'Convertiable', 'Automatic', 15000, 2017, 40000, 'Mers.png'),
    car(12, 'OPEL', 'Vivaro', 'VAN', 'Manual', 9000, 2016, 45000, 'Mers.png'),
    car(13, 'MERCEDES', 'Viano', 'VAN', 'Automatic', 27000, 2012, 125000, 'Mers.png'),
    car(14, 'VAS', 'Niva', 'Trucks', 'Manual', 500, 2003, 100000, 'Mers.png'),
]


import catalog from '../components/CatalogNEW/CatalogMainComponent.vue'


export default {
  name: 'CatalogView',
  data () {
    return {
      cars:cars,
      carstoadd:cars,
      models:[],
      var:[],
      id:[],
      allmodels:[],
      deletefromcars:[],
      let:[],
  
    }
  },
  components: {
    catalog,
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
  
      },
      deletefrommain (val) {
          let a = val

          let b = this.cars.filter(el=>el.id!==a)
          this.cars = b     
      },
      addtomaincars (name) {
        if(this.cars.length<this.carstoadd.length) {
            let a = name
            let b = this.carstoadd.filter(el=>el.make===a)
            for(let i = 0;i<b.length;i++) {
              let c = b[i]
              this.cars.push(c)
              this.cars = [...new Set(this.cars)]
            }
            
     
        }
         
      },
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

