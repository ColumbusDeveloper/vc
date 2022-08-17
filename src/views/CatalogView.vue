<template>
  
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Catalog page!</h1>

              <makemodelselect></makemodelselect>

            </div>
          </div>   
        </div>
     
</template>



<script>

import makemodelselect from '../components/CATALOG/CatalogMakeModelChoiсe5.vue'

export default {
  name: 'CatalogView',
  components: {
    makemodelselect,
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
  

</style>

