<template >
    <div>
     
        <vcatdropitem

        :subitems="subitems"
        
        >
        </vcatdropitem>
     
        <ul>
            <li
            v-for="producer in producers" :key="producer"

            
            
            >
            {{producer}}
            </li>
        </ul>
    </div>
</template>


<script>

import vcatdropitem from './v-cat-drop-item.vue'


export default {
    name:'Drop-main',
    props:['subitems','makes'],
    components:{
     vcatdropitem,
    },
    data () {
        return {
            producers:this.makes,
            
        }
    },
    watch: {
        makes (neVal) {
            this.producers = neVal
        }
    }
    
}
</script>


<style lang="scss">
@import '@/assets/varmix.scss';
    
</style>