<template >
    <div>
        
     
       
        <dropmain
        :subitems="subitems"
       
        :iscategoryitem="isCategoryItemOn"
        @isCategoryItem="changeCategoryItemState"
        @addToSelected="addToSelected"
     
        >
        
    
        
        </dropmain>

        <div
        
       
        >
        
        </div>
     
        

        {{selectedValues}}
 
       
    </div>
</template>


<script>
import dropmain from './v-cat-drop.vue'

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
        dropmain,
    },
    data () {
        return {
            
            isCategoryItemOn:false,
            subitems:cars,
            selected:[],
        }
    
    },
    methods:{
       changeCategoryItemState () {
        this.isCategoryItemOn=!this.isCategoryItemOn
       },
       addToSelected(index) {
        this.selected.push(this.subitems[index].model)
       }
    },
    
    computed:{
        selectedValues () {
            return [...new Set(this.selected)].join(' ')
             
        }
    }
    
}
</script>

<style lang="scss">
@import '@/assets/varmix.scss';
    
</style>