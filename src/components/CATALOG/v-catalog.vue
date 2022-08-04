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
                <template 
                v-for="uniqMakeName in uniqMakeNames" :key="uniqMakeName">
                     <p
                     v-on:click="addToVar(uniqMakeName)"
                     >{{ uniqMakeName }}</p>
                </template> 
                <template v-for="item in FilteredList" :key="item" >
                     <!-- <li  class="catalog__calc-li-none">{{FilteredModelListRo.push(item.model)}}</li>   -->
                        <li @click="addToFilteredModelListRo(item.model)" >{{item.model}}</li>
                 
                    
                </template>
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

import vcatalogshowbox from './v-catalog-show-box.vue'

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
            
            

            
        }
    
    },
    methods:{

        addToVar(uniqMakeName) {
            
            this.make = uniqMakeName
        },
        addToMainVarCars () {
            
            this.cars=cars
        },
        changeStr () {
            this.make=2
            this.isWrapperOpen=!this.isWrapperOpen
        },
        addToFilteredModelListRo(val){
            this.FilteredModelListRo.push(val)
        }
       
       

       
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
        }

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
            min-height: 100px;
            display: flex;
        }
}




    
</style>