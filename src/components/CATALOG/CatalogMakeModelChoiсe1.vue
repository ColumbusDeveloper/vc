<template >
    <div class="catalog">
        
     
       <div class="catalog__title" 
       
       
       >
       
                    <p class="catalog__title-text"
                    
                    >Make, Model</p> 

                    <div class="catalog__arrow-box">
                        <span class="catalog__title-arrow catalog__title-arrow-up"
                        v-if="arrowUpVisible"
                        @click="delItemsFromArrForUniqMakeComputed"
                        ><i class="fa-solid fa-chevron-up"></i></span>

                        <span class="catalog__title-arrow catalog__title-arrow-down"
                        v-if="arrowDownVisible"
                        @click="addItemsToArrForUniqMakeComputed"
                        ><i class="fa-solid fa-chevron-down"></i></span>
                    </div>

                    

                    
       
       </div>

       <div class="catalog__select-wrapper"
     
       >

            <div class="catalog__select-wrapper-window">
                <div class="col catalog__select-wrapper-window-make-model-box">

                    <div class="catalog__select-wrapper-window-make-model-box-make-part">
                            <template 
                            v-for="(item,index) in uniqMake" :key="index"
                            
                            >
                                
                                <div class="catalog__uniqmake-models-box">

                                    <i class="fa-solid fa-xmark catalog__icon-cross"
                                    @click="delMake(item)"
                                    ></i>

                                    <p
                                    @click="addValToModelsRightPart(item)"
                                    >
                                        {{item}}
                                    </p>


                                </div>
                              
                                
                            </template> 
                    </div>

                    <div class="catalog__select-wrapper-window-make-model-box-model-part">
                            <template 
                            v-for="item in modelsRightPartUniq" :key="item"
                            
                            >
                                <div class="catalog__model-cross-btn-block">
                                    <button class="catalog__model-cross-btn-block-btn">
                                        
                                        <div
                                       
                                    
                                        >
                                        <i class="fa-solid fa-xmark "
                                        @click="delItemsFromModelsBottomRight(item)"
                                        ></i>
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


       <div class=" col catalog__total-bottom-show-box">
                <p v-for="(item,index) in modelsBottomTotal" :key="index"

                > <i class="fa-solid fa-xmark catalog__icon-cross"
                @click="delFromUniqModelsBottomArr(index)"
                >
                </i>  {{item.model}},</p>
       
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
            
            cars:[],
            arrForUniqMakeComputed:[],
            modelsRightPartUniq:[],
            arrowDownVisible:true,
            arrowUpVisible:false,
            modelsBottomTotal:[],    
        }
    
    },
    methods:{

        addItemsToArrForUniqMakeComputed () {
            this.cars = cars
            for(let i = 0; i<this.cars.length; i++) {
                this.arrForUniqMakeComputed.push(this.cars[i])
            }
            this.arrowDownVisible = false
            this.arrowUpVisible = true
             
        },

        addValToModelsRightPart(val) {
           let a = this.cars.filter(el=>el.make===val)
           for (let i = 0; i<a.length; i++) {
            this.modelsRightPartUniq.push(a[i])
            this.modelsRightPartUniq = [...new Set(this.modelsRightPartUniq)]
           }
           
        },
        delItemsFromArrForUniqMakeComputed () {
            this.modelsBottomTotal = []
            this.modelsRightPartUniq = []
            this.arrForUniqMakeComputed = []
            this.arrowDownVisible = true
            this.arrowUpVisible = false
        },
        funcPassDataToShowModelsBottom(val) {
            this.modelsBottomTotal.push(this.cars.filter(el=>el.id===val.id)[0])  
        },
        delFromUniqModelsBottomArr(val) {
            this.modelsBottomTotal.splice(val,1)
        },
        delMake(ItemOfUniqMake) {
            let a = []
            a = this.arrForUniqMakeComputed.filter(el=>el.make===ItemOfUniqMake)
            for(let i = 0; i<a.length; i++) {
                let b = a[i].make
                let c = this.arrForUniqMakeComputed.findIndex(el=>el.make===b)
                this.arrForUniqMakeComputed.splice(c,1) 
                   
            }
            let aa = []
            aa = this.modelsRightPartUniq.filter(el=>el.make===ItemOfUniqMake)
            for(let i = 0; i<aa.length; i++) {
                let bb = aa[i].make
                let cc = this.modelsRightPartUniq.findIndex(el=>el.make===bb)
                this.modelsRightPartUniq.splice(cc,1) 
                   
            }
            let aaa = []
            aaa = this.modelsBottomTotal.filter(el=>el.make===ItemOfUniqMake)
            for(let i = 0; i<aaa.length; i++) {
                let bbb = aaa[i].make
                let ccc = this.modelsBottomTotal.findIndex(el=>el.make===bbb)
                this.modelsBottomTotal.splice(ccc,1) 
                   
            }
            if (this.arrForUniqMakeComputed.length <= 0) {
                    this.arrowDownVisible = true
                    this.arrowUpVisible = false
            }
            
            
        },
        delItemsFromModelsBottomRight(valItem) {
            let a = this.modelsBottomTotal.findIndex(el=>el.model===valItem.model)
            this.modelsBottomTotal.splice(a,1)
            let b = this.modelsRightPartUniq.findIndex(el=>el.model===valItem.model)
            this.modelsRightPartUniq.splice(b,1)
        
        }

        
        
    },

       
    computed:{
        
        uniqMake () {
            let a = []
            for (let i = 0; i<this.arrForUniqMakeComputed.length; i++) {
                let b = this.arrForUniqMakeComputed[i].make
                a.push(b)
            }
            let c = [...new Set(a)]
            return c
            
        },
       
        
    
    },
    
  
    
}
</script>

<style lang="scss">
@import '@/assets/varmix.scss';

.catalog {
    p{
        margin: 0;
    }

		&__title {
            width: 100%;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
		}

		&__title-text {
            
            display: inline-block;
            background: aqua;
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
            p{
                display: flex;
                align-items: center;
            }
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
        &__total-bottom-show-box {
            display: flex;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            p {
                margin: 0;
                display: flex;
                align-items: center;
            }
        }
        &__icon-cross{
            padding-left: 5px;
            padding-right: 5px;
            cursor: pointer;
            &:hover {
                color: red;
                font-size: 30px;
            }
        }
        &__arrow-box {
            height: 30px;
            width: 30px;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            position: relative;
        }
        &__title-arrow {
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            
        }
        &__uniqmake-models-box {
            display: flex;
            align-items: center;
        }





}











    
</style>