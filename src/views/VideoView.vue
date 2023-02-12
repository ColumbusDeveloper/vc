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
      
       
        
  
        
  
        
        
  
      </main>
  
      <Footer class="center" />
  
    </div>
       
  </template>
  
  
  
  <script>
  
    
  
    export default {
              components: {
              
              },
              data() {
                return {
                 
                  
  
                  
  
                }
             },
            methods: {
  
              
            },
  
            watch: {
             
            },
  
    
    
    } 
  
  
    
  
  </script>
  
  <style lang="scss" scoped>
    @import '../assets/varmix.scss';
  
    
    
    
  
  </style>