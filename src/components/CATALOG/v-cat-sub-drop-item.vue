<template >
    <div>
        <div class="drop-sub__category-name">
            {{Category}}
        </div>
        <div class="drop-sub__item-name"
        v-for="(subitem,index) in subitems" :key="subitem.index"
        
        >
        
        </div>
        <div class="drop-sub__btn-box"> 
            <button type="button" class="drop-sub__btn-apply">Apply</button>
        </div>       
    </div>
</template>


<script>

export default {
    props:['Category','subitems'],
    
}
</script>

<style lang="scss">
@import '@/assets/varmix.scss';
    
</style>