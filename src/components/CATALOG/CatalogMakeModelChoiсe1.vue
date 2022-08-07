<template >
    <div class="catalog">
        
     
       <div class="catalog__title" 
       @click="visible=!visible"
       >
       
                    <p class="catalog__title-text"
                    
                    >Make,Model</p>HELLO!
       
       </div>

       <div class="catalog__select-wrapper"
        v-if="visible"
       >

            <div class="catalog__select-wrapper-window">
                <div class="col catalog__select-wrapper-window-make-model-box">

                    <div class="catalog__select-wrapper-window-make-model-box-make-part">
                            <template 
                            v-for="(item,index) in uniqMake" :key="index"
                            
                            >
                                <p
                                @click="addValToModelsRightPart(item)"
                                >
                                    {{item}}
                                </p>
                            </template> 
                    </div>

                    <div class="catalog__select-wrapper-window-make-model-box-model-part">
                            <template 
                            v-for="item in uniqModelsRightPart" :key="item"
                            
                            >
                                <div class="catalog__model-cross-btn-block">
                                    <button class="catalog__model-cross-btn-block-btn">
                                        
                                        <div
                                       
                                    
                                        >
                                        <i class="fa-solid fa-xmark "></i>
                                        </div>
                                         

                                        
                                       
                                        
                                        <!-- <i class="fa-solid fa-check " ></i> -->
                                        
                                      
                                    </button>
                                        
                                    <div class="catalog__model-cross-btn-block-models"
                                    @click="funcPassDataToShowModelsBottom(item)"
                                    >
                                    {{item.model}}
                                    </div>

                                </div>
                                  
                            </template>
                    </div>

                </div>
                
                
            </div>
            <div class="catalog__select-wrapper-arrow">
              
            </div>

            

       </div>


       <div class="catalog__total-bottom-show-box"
     
       >

       </div>

   
       
        

      
        
        


        

        

        

       
    </div>
</template>


<script>



const car = (id,make,model,bodytype,transmission,price,year,kilometers,image)=>({id,make,model,bodytype,transmission,price,year,kilometers,image})
const cars = [
    car(0,'Porsche','Panamera','Sedan','Automatic',50000,2012,30000,'../../assets/images/Panamera.jpg'),
    car(1,'Audi','A3','Sedan','Automatic',30000,2010,10000,'../../assets/images/AudiA3.jpg'),
    car(2,'Ford','Mondeo','Sedan','Automatic',20000,2013,19000,'../../assets/images/FordMondeo.jpg'),
    car(3,'Porsche','Porsche-911','Sedan','Automatic',60000,2011,33000,'../../assets/images/Porsche911.jpg'),
    car(4,'Audi','Q7','Hatchback','Automatic',52000,2018,15000,'../../assets/images/AudiQ7.jpg'),
    car(5,'Ford','Electra','Sedan','Automatic',15000,2017,40000,'../../assets/images/FordElectra.jpg')
]



export default {
    name:'V-catalog',
    components: {

      

    },
    data () {
        return {
            
            cars:cars,
            modelsRightPart:' ',
            visible:false,
           
            modelsBottomTotal:[]
            

            
        }
    
    },
    methods:{

        addValToModelsRightPart(val) {
            this.modelsRightPart = val
        },
        funcPassDataToShowModelsBottom(val) {
            
            let  a = []
            let b = this.cars.filter(el=>el.id===val.id)
            a.push(b)
           
            return this.modelsBottomTotal = a
        }


        

        

       
       
       


       
    },

    
    
    computed:{
        
        uniqMake () {
            let a = []
            for (let i = 0; i<this.cars.length; i++) {
                let b = this.cars[i].make
                a.push(b)
            }
            let c = [...new Set(a)]
            return c
            
        },
        uniqModelsRightPart () {
            let  a = []
            let b = this.cars.filter(el=>el.make===this.modelsRightPart)
            a.push(b)
            let c = []
            c = [...new Set(a)]
            return c[0]
        },
        





        
       



        

    },
    
  
    
}
</script>

<style lang="scss">
@import '@/assets/varmix.scss';

.catalog {

		&__title {
		}

		&__title-text {
            
            display: inline-block;
            background: aqua;
		}

		&__select-wrapper {
		}

		&__select-wrapper-window {
		}

		&__select-wrapper-arrow {
		}

        &__calc-li-none {
            display: none;
        }

        &__show-box {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            display: flex;
            flex-wrap: wrap;
        }

        &__select-wrapper-window-make-model-box {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            display: flex;
		}

		&__select-wrapper-window-make-model-box-make-part {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            width: 50%;
		}

		&__select-wrapper-window-make-model-box-model-part {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            width: 50%;
		}
        &__model-cross-btn-block {
            display: flex;
            align-items: center;
        }
        &__model-cross-btn-block-btn {
            border: none;
        }





}



.visible {
    color: black;
}
.invisible {
    color: transparent;
}







    
</style>