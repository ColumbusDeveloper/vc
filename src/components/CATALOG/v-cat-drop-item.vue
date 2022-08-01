<template >
    <div>
        
        <vcatsub
        
        :subitems="subitems"

        
        
        >
            

        

        
            
        </vcatsub>
        
        
    </div>
</template>


<script>

import vcatsub from './v-cat-sub-item.vue'

export default {
    name:'Drop-item',
    props:['subitems'],
    components:{
        vcatsub,
    },
    data () {
        return {
            
        }
    }
    
}
</script>


<style lang="scss">
@import '@/assets/varmix.scss';
    
</style>