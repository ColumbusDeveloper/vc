<template >
    <div class="catalog">
        
     
       <div class="catalog__title"><p>Make,Model</p></div>
       <div class="catalog__select-wrapper">
            <div class="catalog__select-wrapper-window"
                
            
            >

            </div>
            <div class="catalog__select-wrapper-arrow">

            </div>

       </div>

   
       <p><input type="text" v-model="str" /></p>
        <ul>
            <li v-for="item in FilteredList" :key="item">
                <p>{{ item.make }} - {{ item.model }}</p>
            </li>
        </ul>
        


        

        

        

       
    </div>
</template>


<script>


const car = (id,make,model,bodytype,transmission,price,year,kilometers,image)=>({id,make,model,bodytype,transmission,price,year,kilometers,image})
const cars = [
    car(1,'Porsche','Panamera','Sedan','Automatic',50000,2012,30000,'../../assets/images/Panamera.jpg'),
    car(2,'Audi','A3','Sedan','Automatic',30000,2010,10000,'../../assets/images/AudiA3.jpg'),
    car(3,'Ford','Mondeo','Sedan','Automatic',20000,2013,19000,'../../assets/images/FordMondeo.jpg'),
    car(4,'Porsche','Porsche-911','Sedan','Automatic',60000,2011,33000,'../../assets/images/Porsche911.jpg'),
    car(5,'Audi','Q7','Hatchback','Automatic',52000,2018,15000,'../../assets/images/AudiQ7.jpg'),
    car(6,'Ford','Electra','Sedan','Automatic',15000,2017,40000,'../../assets/images/FordElectra.jpg')
]

export default {
    name:'V-catalog',
    components: {
     
    },
    data () {
        return {
            cars:cars,
            make:'',
            model:'',
            bodytype:'',
            transmission:'',
            price:'',
            year:'',
            kilometers:'',
            str:'Porsche',

            
        }
    
    },
    methods:{
       
    },
    
    computed:{
        FilteredList(){
            let a = this.str;
            return this.cars.filter(function (elem) {
                if(a==='') return true;
                else return elem.make.indexOf(a) > -1;
            })
        }
    },
    
  
    
}
</script>

<style lang="scss">
@import '@/assets/varmix.scss';



    
</style>