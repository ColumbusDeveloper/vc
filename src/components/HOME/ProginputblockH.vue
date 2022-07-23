<template>
            <div class="col progressblock">
                    <div class="progressblock__inputblock">
                      <div class="progressblock__inputblock-btnblock">
                        <div class="progressblock__inputblock-btnblock-item">
                          <btnblue class="progressblock__inputblock-btnblock-item_btn-blue">{{btnbltext}}</btnblue>
                        </div>

                        <div class="progressblock__inputblock-btnblock-item">

                        </div>

                        <div class="progressblock__inputblock-btnblock-item">

                        </div>


                      </div>
                      <div class="progressblock__inputblock-inputprice">
                        <div class="progressblock__inputblock-inputprice-textnumblock">
                          <span class="progressblock__inputblock-inputprice-textnumblock_text"></span>
                          <span class="progressblock__inputblock-inputprice-textnumblock_number"></span>
                        </div>
                        <div class="progressblock__inputblock-inputprice-sliderblock">

                        </div>
                      </div>
                      <div class="progressblock__inputblock-inputmonth">
                        <div class="progressblock__inputblock-inputmonth-textnumblock">
                          <span class="progressblock__inputblock-inputmonth-textnumblock_text"></span>
                          <span class="progressblock__inputblock-inputmonth-textnumblock_number"></span>
                        </div>
                        <div class="progressblock__inputblock-inputmonth-sliderblock">

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

    // import proginputprise from '@/components/HOME/ProgressInputprice.vue'



    // <proginputprise v-on:progbarchagedata="priceinputset"/>
    // <span class="">{{priceinput}}</span>

   

  export default {
    
    name: 'Perf-Home',
    components: {
      btnblue,
        // proginputprise


    },
    data() {
      return {

        priceinput:0,
        btnbluetext:'poor',

      }
    },

    methods:{
       priceinputset (val) {
        this.priceinput=val
      }
    },

    computed:{
      btnbltext () {
        return this.btnbluetext.toUpperCase()
      }
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
      height: 25px;
      display: flex;
      padding-bottom: 50px;
    
		}

		&__inputblock-btnblock-item {
      height: 20px;
      width: 35px;
      border-width:5px;
      border-style: solid;
      border-color: red;
      &_btn-blue {
        max-width: 112px;
      }

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