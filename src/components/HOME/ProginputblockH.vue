<template>
            <div class="col progressblock">
                    <div class="progressblock__inputblock">
                      <div class="progressblock__inputblock-btnblock">
                        <div class="progressblock__inputblock-btnblock-item">
                          <btnblue >{{btnbltext}}</btnblue>
                        </div>

                        <div class="progressblock__inputblock-btnblock-item">
                          <btnwhite >{{btwhitetextaverage}}</btnwhite>
                        </div>

                        <div class="progressblock__inputblock-btnblock-item">
                          <btnwhite >{{btnwhitegood}}</btnwhite>
                        </div>


                      </div>
                      <div class="progressblock__inputblock-inputprice">
                        <div class="progressblock__inputblock-inputprice-textnumblock">
                          <span class="progressblock__inputblock-inputprice-textnumblock_text"></span>
                          <span class="progressblock__inputblock-inputprice-textnumblock_number"></span>
                        </div>
                        <div class="progressblock__inputblock-inputprice-sliderblock">
                            <proginputprise v-on:progbarchagedata="priceinputset"/>
                        </div>
                      </div>
                      <div class="progressblock__inputblock-inputmonth">
                        <div class="progressblock__inputblock-inputmonth-textnumblock">
                          <span class="progressblock__inputblock-inputmonth-textnumblock_text"></span>
                          <span class="progressblock__inputblock-inputmonth-textnumblock_number"></span>
                        </div>
                        <div class="progressblock__inputblock-inputmonth-sliderblock">
                            <proginputmonth v-on:progbarchangemonth="monthinputset"/>
                            <span class="">{{priceinput}}</span>
                        </div>
                      </div>

                    </div>
                    <div class="progressblock__textnumblock">
                      <div class="progressblock__textnumblock-innerflex">
                          <div class="progressblock__textnumblock-innerflex-weeklyblue">

                          </div>
                          <div class="progressblock__textnumblock-innerflex-medweeklydurk">

                          </div>
                      </div>
                      
                      <div class="progressblock__textnumblock-btnblock">

                      </div>

                    </div>
                
            </div>
  
</template>

<script>

  import btnblue from '@/components/primitives/BTN/btnBlueTextWhiteSlot112px.vue'
  import btnwhite from '@/components/primitives/BTN/btnWhiteSlot112px.vue'
  import proginputprise from '@/components/HOME/ProgressInputprice.vue'
  import proginputmonth from '@/components/HOME/ProgressInputmonth.vue'



   
    // <span class="">{{priceinput}}</span>
    // <span class="">{{priceinput}}</span>

   

export default {
    
    name: 'Progress-Home',
    components: {
      btnblue,
      btnwhite,
      proginputprise,
      proginputmonth,


    },
    data() {
      return {

        priceinput:0,
        monthinput:0,
        btnbluetext:'poor',
        btnwhitetextaverage:'Average',
        btnwhitegood:'Good',
        fullWidth:document.documentElement.clientWidth,
        issmbtn:false,
       
      }
    },

  

    methods:{
       priceinputset (val) {
        this.priceinput=val
      },

      monthinputset (val) {
        this.monthinput=val
      },
      
      

      
      

      
      

    },

    watch:{
      
      
    },

    computed:{
      btnbltext () {
        return this.btnbluetext.toUpperCase()
      },
      btwhitetextaverage () {
        return this.btnwhitetextaverage.toUpperCase()
      },
      btwhitegood () {
        return this.btnwhitegood.toUpperCase()
      },
      isbtn80px(){
          if(document.documentElement.clientWidth <= 576){
            return true
          }
      else return this.issmbtn
     },
     
     


    },
    



}

</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
.progressblock {
  display: flex;
  border-width:2px;
  border-style: solid;
  border-color: #000;
  @media (max-width:768px) {
     flex-direction: column;
  }

		&__inputblock {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      width: 67%;
      @media (max-width:768px) {
      width: 100%;
     }
		}

		&__inputblock-btnblock {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      display: flex;
      padding-bottom: 50px;
      justify-content: flex-start;
    
		}

		&__inputblock-btnblock-item {
      
      
      

		}

		&__inputblock-inputprice {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      height: 73px;
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
		}

		&__inputblock-inputprice-textnumblock {
      border-width:5px;
      border-style: solid;
      border-color: blue;
      width: 100%;
      display: flex;
      justify-content: space-between;

			&_text {
        width: 30px;
        height: 20px;
        border-width:2px;
        border-style: solid;
        border-color: yellow;
			}

			&_number {
        width: 30px;
        height: 20px;
        border-width:2px;
        border-style: solid;
        border-color: yellow;
			}
		}

		&__inputblock-inputprice-sliderblock {
     
      min-height: 25px;
      border-width:5px;
      border-style: solid;
      border-color: green;
		}

		&__inputblock-inputmonth {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      height: 73px;
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
		}

		&__inputblock-inputmonth-textnumblock {
      border-width:5px;
      border-style: solid;
      border-color: blue;
      width: 100%;
      display: flex;
      justify-content: space-between;

			&_text {
        width: 30px;
        height: 20px;
        border-width:2px;
        border-style: solid;
        border-color: yellow;
			}

			&_number {
        width: 30px;
        height: 20px;
        border-width:2px;
        border-style: solid;
        border-color: yellow;
			}
		}

		&__inputblock-inputmonth-sliderblock {
    
      min-height: 25px;
      border-width:5px;
      border-style: solid;
      border-color: green;
		}










		&__textnumblock {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      width: 33%;
      display: flex;
      flex-direction: column;
      @media (max-width:768px) {
      width: 100%;
     }
		}

		&__textnumblock-innerflex {
      display: flex;
      flex-direction: column;
      border-width:5px;
      border-style: solid;
      border-color: #000;
      @media (max-width:768px) {
      flex-direction: row;
      }
      @media (max-width:576px) {
         flex-direction: column;
      }
      
		}

		&__textnumblock-innerflex-weeklyblue {
      height: 50px;
      background-color: red;
      @media (max-width:768px) {
      width: 50%;
      }
      @media (max-width:576px) {
         width: 100%;
      }
		}

		&__textnumblock-innerflex-medweeklydurk {
   
      min-height: 50px;
      background-color: #000;
      @media (max-width:768px) {
      width: 50%;
      }
      @media (max-width:576px) {
         width: 100%;
      }
		}

		&__textnumblock-btnblock {
    
      height: 50px;
      background-color: blue;
		}

    
}


  

  
</style>