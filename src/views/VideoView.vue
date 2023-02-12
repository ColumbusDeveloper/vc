<template>
  
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
          <div class="col header" @clearmagtopform="setMagtopformInventoryComponent">
            <Headerone  class="center" :liclickedtextoff="navliclicktextoffstate"  />
            <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"  />
            <transition name="menu">
              <burgerlist v-if="iscross" class="burgerlist" :listate="navliclicktextoffstate" v-on:click="iscross=!iscross" v-on:navliclicktextoffevent="changenavliclicktextoffstate"  />
            </transition>
          </div>
      </div>
    </div>
        
    <main class="flex-fill">
    
      
      <swiper></swiper>

    </main>

    <Footer class="center" />

  </div>
     
</template>



<script>

  import Headerone from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import burgerbtn from '@/components/primitives/BurgerBtn.vue'
  import burgerlist from '@/components/primitives/BurgerCollapceList.vue'
  import swiper from '@/components/VIDEO/SwiperMain.vue'
  

  export default {
            components: {
              Headerone,
              Footer,
              burgerbtn,
              burgerlist,
              swiper,
            },
            data() {
              return {
                iscross: false,
                navliclicktextoffstate:false,
                
              }
           },
          methods: {

            changenavliclicktextoffstate (newVal) {
              this.navliclicktextoffstate = newVal
            },

          },

          watch: {
            iscross (newVal) {
              this.navliclicktextoffstate = newVal 
            }
          },

  
  
  } 


  

</script>

<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  
  
  

</style>

