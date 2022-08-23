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
        @click="passToParentComp()"
      
        >
            <div class="make-model__form-show-box">
                
                    <div class="make-model__choice-form"
                    v-for="(value, name, index) in makesobject" :key="index" 
                    
                    >
                        <div
                        @click="parentInputClick(name)"
                        >
                        <span class="make-model__form-show-parent-name">
                        <i class="fa-solid fa-xmark activeNone" :class="{activeCrossModel:this.statusofparent.includes(name)}"></i>
                        <i class="fa-solid fa-check activeNone" :class="{activeCrossModel:!this.statusofparent.includes(name)}"></i>
                        {{name}}{{findModels(name)}}</span>
                        </div>          
                        

                        
                    
                            <div class="make-model__choice-form-models"
                            v-for="(model,index) in findModelsComp" :key="index"
                            >
                                <div
                                @click="daughterInputClick(model,index)"
                                >
                                <span class="make-model__form-show-parent-name">
                                <i class="fa-solid fa-xmark activeNone" :class="{activeCross:this.statusofdaughter.includes(model)}"></i>
                                <i class="fa-solid fa-check activeNone" :class="{activeCross:!this.statusofdaughter.includes(model)}"></i>
                                {{model}}</span>
                                </div>
                                





                                
                               
                            </div>
                        {{statusofparent}} {{id}} 
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
                varModels:[],
                models:[], 
                statusofparent:[],
                statusofdaughter:[],
               


                makesobject: {
                Porsche: 'Porsche',
                Audi: 'Audi',
                Ford: 'Ford'
                },
                
            }

        },
        methods: {
            
            getStarted() {
                
                for (let i = 0; i<this.cars.length; i++) {
                let a = this.cars[i].make
                let b = this.cars[i].model
                this.models.push(b)
                this.models = [...new Set(this.models)]  
                this.originalMakes.push(a)
                this.originalMakes = [...new Set(this.originalMakes)]        
                }
               
            },
            passToParentComp() {
                this.$emit('changeovers', this.id)
             
            },
            
           findModels(valCar) {
                this.varModels = valCar        
            },
            daughterInputClick(model) {
      
                let a = this.cars.filter(el=>el.model.indexOf(model)>-1)
                
                
                a.forEach(el=>{
                    let a = el.id
                  
                    if(!this.id.includes(a)) {
                       this.id.push(a)
                       this.statusofdaughter.push(model)     
                       this.id = [...new Set(this.id)]
                    } else if (this.id.includes(a)) {
                        let c = this.statusofdaughter.findIndex(el=>el===model)
                        this.statusofdaughter.splice(c,1)
                        let m = this.id.findIndex(el=>el===a)
                        this.id.splice(m,1)
                      
                    }
   
                })

                this.id = [...new Set(this.id)]

            },
            parentInputClick(make) {

                let a = this.cars.filter(el=>el.make.indexOf(make)>-1)
                let c = this.statusofparent
                let q = Object.values(c)
                let m = q.filter(item => item===make).length
                console.log(m);
                if(m===0) {
                    a.forEach(el=>{
                        let b = el.id
                        if(!this.id.includes(b)){
                            this.id.push(b)
                            this.statusofparent.push(make)
                        } else if (this.id.includes(b)) {
                            let m = this.id.findIndex(el=>el===b)
                            this.id.splice(m,1)
                        }                                          
                    })   
                    this.id = [...new Set(this.id)]
                    this.statusofparent = [...new Set(this.statusofparent)]
                } else {
                    a.forEach(el=>{
                        let d = el.id
                        let m = this.id.findIndex(el=>el===d)
                        this.id.splice(m,1)
                    })
                    let g = this.statusofparent.findIndex(el=>el===make)
                    this.statusofparent.splice(g,1)
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
            

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   .make-model {
    display: flex;
    flex-direction: column;

		&__btn-arrow-box {
            display: flex;
		}

		&__nameBtn {
		}

		&__arrow-box {
		}

		&__arrow-Up {
		}

		&__arrow-Down {
		}

		&__form {
		}

		&__form-show-box {
		}

		&__choice-form {
		}

        &__form-show-parent-name {
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






</style>