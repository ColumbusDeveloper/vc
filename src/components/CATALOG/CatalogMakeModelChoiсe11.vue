<template>
    <div class="make-model"
   
    >
        

        <div class="make-model__btn-arrow-box">
            <div class="make-model__nameBtn" @click="form=!form,getStarted()" >Make, Model</div>
            <div class="make-model__arrow-box" @click="form=!form,getStarted()">
                <div class="make-model__arrow-Up"><i class="fa-solid fa-angle-up" v-if="form"></i></div>
                <div class="make-model__arrow-Down"><i class="fa-solid fa-angle-down" v-if="form===false"></i></div>
            </div>
        </div>

        

        <div class="make-model__form"
        v-if="form" 
        @click="passToParentComp(),idGenerator()"
      
        >
            <div class="make-model__form-show-box">
                
                    <div class="make-model__choice-form"
                    v-for="(value, name, index) in makesobject" :key="index" 
                    
                    >
                        <div
                        @click="parentInputClick(name),addToMainCars(name)"

                        >
                        <span class="make-model__form-show-parent-name">
                        <i class="fa-solid fa-check activeNone active make-model__icon" :class="{activeCrossModel:this.statusofparent.includes(name)}"></i>
                        <i class="fa-solid fa-xmark activeNone make-model__icon" :class="{activeCrossModel:!this.statusofparent.includes(name)}"></i>
                        {{name}}{{findModels(name)}}</span>
                        </div>  
                        
                        
                                   
                            <div class="make-model__choice-form-models"
                            v-for="(model,index) in findModelsComp" :key="index"
                            >
                                <div
                                @click="daughterInputClick(model,name)"
                                >
                                <span class="make-model__form-show-parent-name make-model__form-show-daughter-name">
                                <i class="fa-solid fa-check activeNone active make-model__icon" :class="{activeCross:this.statusofdaughter.includes(model)}"></i>
                                <i class="fa-solid fa-xmark activeNone make-model__icon" :class="{activeCross:!this.statusofdaughter.includes(model)}"></i>
                                {{model}}</span>
                                </div>

                                
                                                              
                            </div>
                        
                    </div>
                    
        
            </div>
            <div class="make-model__final-show-box" >
                <div class="make-model__final-show-box-item"
                 v-for="car in toShowTotalMakeModelCatalog" :key="car"
                >
                    <i class="fa-solid fa-xmark make-model__icon"
                    @click="deleteFromMain(car.id)"
                    ></i>
                    <div class="make-model__final-show-box-item-single-car">
                        {{car.name}} {{car.model}} year-{{car.year}} price-{{car.price}}
                    </div>
                </div>
            </div>
                
        </div>

    </div>

</template>


<script>


    

    

    export default {
        name: 'Makemodel-select',
        props:['catalogpropscars'],
        components: {
       
        },
        data() {
            return {

                cars: this.catalogpropscars,
                form: false,
                originalMakes:[],
                makes:[],
                id:[],
                vartocalcid:[],
                varModels:[],
                models:[], 
                statusofparent:[],
                idparentgenerator:[],
                iddaughtergenerator:[],
                statusofdaughter:[],
                varstatusofdaughter:[],
                deletefrommain:[],
                var:[],


                makesobject: {
                Porsche: 'Porsche',
                Audi: 'Audi',
                Ford: 'Ford'
                },
                
            }

        },
        methods: {

            deleteFromMain(val) {
                this.$emit('deletefrommain', val)   
            },
            addToMainCars(name){
                this.$emit('addtomaincars', name)   
            },
            
            getStarted() {
                
                for (let i = 0; i<this.cars.length; i++) {
                let a = this.cars[i].make
                let b = this.cars[i].model
                this.models.push(b)
                this.models = [...new Set(this.models)]  
                this.originalMakes.push(a)
                this.originalMakes = [...new Set(this.originalMakes)] 
                this.statusofparent=[]
                this.statusofdaughter=[]     
                }
               
            },
            passToParentComp() {
                this.$emit('changeovers', this.id)   
            },
            
           findModels(valCar) {
                this.varModels = valCar 
              
            },
            
            parentInputClick(make) {  
                
                if(!this.statusofparent.includes(make)) {
                    let x = []
                    x.unshift(make)    
                    let values = x      
                    values.forEach(el=>{
                        let s = el
                        this.v = s
                        let w = []
                        let f = this.cars.filter(el=>el.make===s)
                        f.forEach(el=>{
                            let z = el
                            w.push(z)
                        })
                        w.forEach(el=>{
                            let k = el.model
                            let l = el.make
                            let o = el.id
                            this.statusofdaughter.push(k)
                            this.statusofdaughter = [...new Set(this.statusofdaughter)]
                            this.statusofparent.push(l)
                            this.statusofparent = [...new Set(this.statusofparent)] 
                            this.idparentgenerator.push(o)
                            this.idparentgenerator = [...new Set(this.idparentgenerator)]
                        })                   
                    })           
                } else if (this.statusofparent.includes(make)) {
                    let c=this.varstatusofdaughter.indexOf(make)
                    if (c>-1) {
                        this.varstatusofdaughter.splice(c,1)
                    }
                    let v = []
                    let j = []
                    let i = []
                    v.unshift(make) 
                    let g = v[0]
                    let d = this.statusofparent.indexOf(g)
                    this.statusofparent.splice(d,1) 
                    let r = this.cars.filter(el=>el.make===g)
                    r.forEach(el=>{
                        let q = el.model
                        let x = el.id
                        j.push(q)
                        i.push(x)
                    })
                    j.forEach(el=>{
                        let w = el
                        let s = this.statusofdaughter.indexOf(w)
                        let n = []
                        n.push(s)
                        n=[...new Set(n)]
                        if(n>-1) {
                            this.statusofdaughter.splice(n,1)
                        }                 
                    })
                    i.forEach(el=>{
                        let w = el
                        let s = this.idparentgenerator.indexOf(w)
                        let n = []
                        n.push(s)
                        n=[...new Set(n)]
                        if(n>-1) {
                            this.idparentgenerator.splice(n,1)
                        }                 
                    })
                }               
            },

            daughterInputClick(model,make) {
                let v = []
                v.unshift(model) 
                let m = v[0]

                let q = []
                q.unshift(make)
                let w = q[0]

                

                if(!this.statusofdaughter.includes(m)&&this.statusofparent.includes(w)) {
                    this.statusofdaughter.push(m)
                    this.varstatusofdaughter.push(w)
                    this.varstatusofdaughter=[...new Set(this.varstatusofdaughter)]
                }else if (this.statusofdaughter.includes(m)) {
                    let s = this.statusofdaughter.indexOf(m)
                    if(s>-1) {
                        this.statusofdaughter.splice(s,1)
                    }
                    
                }
                
            
            },
            
            
                                               
        },
        created(){     
            for (let i = 0; i<this.cars.length; i++) {
            let a = this.cars[i].make
            let b = this.cars[i].model
            this.models.push(b)
            this.models = [...new Set(this.models)]  
            this.originalMakes.push(a)
            this.originalMakes = [...new Set(this.originalMakes)]  
            this.makes.push(a)
            this.makes = [...new Set(this.makes)]           
            }                
        },
        
        watch: {
            catalogpropscars (val) {
                this.cars=val
            },
          
            statusid (val) {
                this.id = val
            },    
            
        },


        computed: {
           findModelsComp () { 
                let m = []         
                let a = this.varModels  
                let b = this.cars.filter(el=>el.make.indexOf(a)>-1)
                b.forEach(el=>{
                    let s = el.model
                    m.push(s)
                })
                m = [...new Set(m)]
                return m
            },
            statusid () {
                let a = []
                this.statusofdaughter.forEach(el=>{
                    let b = el
                    let c = this.cars.filter(el=>el.model.indexOf(b)>-1)
                    c.forEach(el=>{           
                        let q = el.id
                        a.push(q)                          
                    })   
                })
                return a 
            },
            toShowTotalMakeModelCatalog () {
                let g = []
                
                for(let i = 0; i<this.id.length; i++) {
                    let a = this.id[i]
                    for(let i = 0; i<this.cars.length; i++) {
                        if(this.cars[i].id===a) {
                            g.push(this.cars[i])
                        }
                    }
                    
                   
                }
                
             
              
                return g
            }
        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   .make-model {
    display: flex;
    flex-direction: column;
    width: 300px;

		&__btn-arrow-box {
            display: flex;
         
            justify-content: space-between;
		}

		&__nameBtn {
            cursor: pointer;
		}

		&__arrow-box {
		}

		&__arrow-Up {
            cursor: pointer;
		}

		&__arrow-Down {
            cursor: pointer;
		}

		&__form {
		}

		&__form-show-box {
            padding-top: 10px;
		}

		&__choice-form {
		}

        &__form-show-parent-name {
            display: flex;
            align-items: center;
            font-weight: 700;
            cursor: pointer;
        }
        &__form-show-daughter-name {
            margin-left: 14px;
            font-weight: 400;
        }
        &__icon {
            width: 20px;
        }
        &__final-show-box {
            margin-top: 15px;
            border-width:1px;
            border-style: solid;
            border-color: #41456B;
            border-radius: 5px;
            width: 100%;
            box-shadow: 0 0 8px 0 #41456B ;
            min-height: 30px;
            padding: 5px;
        }
        &__final-show-box-item {
            display: flex;
            align-items: center;
        }


        
}
.activeNone {
    display: none;
    
}
.activeCross {
    display: block;
    
    
}
.activeCrossModel {
    display: block;
}
.active {
    color: red;
    font-weight: 900;
}






</style>