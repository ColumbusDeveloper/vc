<template >
    <div>
        
     
       
        <dropmain
        :subitems="subitems"
        :makes="makes"
        
        
     
        >
        
    
        
        </dropmain>
     
         {{makes[0]}}
 
       
    </div>
</template>


<script>
import dropmain from './v-cat-drop.vue'

export default {
    name:'V-catalog',
    components: {
        dropmain,
    },
    data () {
        return {
            makes:[],

            subitems:[
                {id:1,make:'Porsche',model:['Panamera','Porsche-911'],
                bodytype:['Van','Sedan'],transmission:['Manual','Automatic'],
                price1:[50000,90000],year:[2020,2012],kilometers:[20000,30000]},

                {id:2,make:'Audi',model:['Q7','Q3'],
                bodytype:['Hatchback','Sedan'],transmission:['Manual','Automatic'],
                price1:[30000,80000],year:[2015,2010],kilometers:[10000,300000]},

                {id:3,make:'Ford',model:['Fusion','Electra'],
                bodytype:['Hatchback','Sedan'],transmission:['Manual','Automatic'],
                price1:[50000,90000],year:[2020,2012],kilometers:[15000,250000]},

            ],
        }
    
    },
    methods:{
       
    },
    mounted () {
               
             this.makes = this.initMake  
             console.log(this.makes);
        
    },
    computed:{
        initMake () {
            const a = []
            for (let i = 0; i < this.subitems.length; i++) {
                 a.push(this.subitems[i].make)
            }
            return a
        }
    }
    
}
</script>

<style lang="scss">
@import '@/assets/varmix.scss';
    
</style>