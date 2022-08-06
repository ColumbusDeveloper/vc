<template >
    <div class="catalog">
        
     
       <div class="catalog__title" 
       v-on:click="changeStr">
       <p class="catalog__title-text"
        v-on:click="addToMainVarCars"
       >Make,Model</p></div>
       <div class="catalog__select-wrapper"
       v-if="isWrapperOpen"
       >
            <div class="catalog__select-wrapper-window">
                <div class="col catalog__select-wrapper-window-make-model-box">

                    <div class="catalog__select-wrapper-window-make-model-box-make-part">
                            <template 
                            v-for="uniqMakeName in uniqMakeNames" :key="uniqMakeName">
                                <p
                                v-on:click="addToVar(uniqMakeName)"
                                >{{ uniqMakeName }}</p>
                            </template> 
                    </div>

                    <div class="catalog__select-wrapper-window-make-model-box-model-part">
                            <template v-for="(item,index) in FilteredList" :key="index" >
                                <div class="catalog__model-cross-btn-block">
                                    <button class="catalog__model-cross-btn-block-btn">
                                        
                                    
                                        <i class="fa-solid fa-xmark "
                                        v-if="isCross[0]===index"
                                        
                                        >
                                        </i> 

                                        <i class="fa-solid fa-xmark "
                                        v-if="isCross[1]===index"
                                        
                                        >
                                        </i> 
                                       
                                        
                                        <!-- <i class="fa-solid fa-check " ></i> -->
                                        
                                      
                                    </button>
                                        
                                    <span 
                                    @click="addToFilteredModelListRo(item.model,index)" 
                                    >{{item.model}}</span>

                                </div>
                                  
                            </template>
                    </div>

                </div>
                
                
            </div>
            <div class="catalog__select-wrapper-arrow">

            </div>

            

       </div>

   
       <div class="catalog__show-box">
            <vcatalogshowbox 
            :carmodel="UniqFilteredModelListRo"
            />
       </div>
        

      
        
        


        

        

        

       
    </div>
</template>


<script>



const car = (id,make,model,bodytype,transmission,price,year,kilometers,image)=>({id,make,model,bodytype,transmission,price,year,kilometers,image})
const cars = [
    car(1,'Porsche','Panamera','Sedan','Automatic',50000,2012,30000,'../../assets/images/Panamera.jpg'),
    car(2,'Audi','A3','Sedan','Automatic',30000,2010,10000,'../../assets/images/AudiA3.jpg'),
    car(3,'Ford','Mondeo','Sedan','Automatic',20000,2013,19000,'../../assets/images/FordMondeo.jpg'),
    car(4,'Porsche','Porsche-911','Sedan','Automatic',60000,2011,33000,'../../assets/images/Porsche911.jpg'),
    car(5,'Audi','Q7','Hatchback','Automatic',52000,2018,15000,'../../assets/images/AudiQ7.jpg'),
    car(6,'Ford','Electra','Sedan','Automatic',15000,2017,40000,'../../assets/images/FordElectra.jpg')
]

import vcatalogshowbox from './CatalogMakeModelChoiceItem.vue'

export default {
    name:'V-catalog',
    components: {
     vcatalogshowbox,
      

    },
    data () {
        return {
            isModelOpen:false,
            isWrapperOpen:false,
            cars:[],
            make:' ',
            model:[],
            FilteredModelListRo:[],
            bodytype:' ',
            transmission:' ',
            price:' ',
            year:' ',
            kilometers:' ',
            isbtnmodel:' ',
            isCross:[],
            
            

            
        }
    
    },
    methods:{

        addToVar(uniqMakeName) {
            
            this.make = uniqMakeName
            this.isCross=[]
        },
        addToMainVarCars () {
            
            this.cars=cars
        },
        changeStr () {
            this.make=2
            this.isWrapperOpen=!this.isWrapperOpen
        },
        addToFilteredModelListRo(val,value){
            this.FilteredModelListRo.push(val)
            this.isbtnmodel = val
            this.isCross.push(value) 
            
        },
       
       

       
       

       
    },

    
    
    computed:{
        FilteredList(){
            let a = this.make;
            return this.cars.filter(function (elem) {
                if(a==='') return true;
                else return elem.make.indexOf(a) > -1;
            })
        },
        uniqMakeNames () {
            const a = []
            for (let i = 0; i<cars.length; i++){
                const b = cars[i].make
                a.push(b)
            }
            return [... new Set(a)]
        },
        UniqFilteredModelListRo () {
            const a = []
            for (let i = 0; i<this.FilteredModelListRo.length; i++){
                const b = this.FilteredModelListRo[i]
                a.push(b)
            }
            return [... new Set(a)]
        },

        indModelBtn () {
            return this.cars.filter(elem => {
                const b = elem.model.indexOf(this.isbtnmodel) >-1
              
                console.log(b);
                return b
            })
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

.invisible {
    opacity: 0;
}

.visible {
    opacity: 1;
}







    
</style>