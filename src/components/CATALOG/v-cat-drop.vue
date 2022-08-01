<template >
    <div>
     <vcatdropitem></vcatdropitem>
        
    </div>
</template>


<script>

import vcatdropitem from './v-cat-drop-item.vue'


export default {
    name:'Drop-main',
    components:{
     vcatdropitem,
    },
    data () {
        return {
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

            ]
        }
    }
    
}
</script>


<style lang="scss">
@import '@/assets/varmix.scss';
    
</style>