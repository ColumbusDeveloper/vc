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
                    @click='inputModelsFromParent(name)'
                    >
                                       
                        <input type="checkbox" v-bind:value="name" 
                        v-model="parentinputmodel"     
      
                        >

                        <label class="make-model__label">{{name}}{{findModels(name)}}</label>
                    
                            <div class="make-model__choice-form-models"
                            v-for="(item,index) in findModelsComp" :key="index"
                            @click='changeStatusOfParentInput(name,item)'
                            >
                                <input type="checkbox" v-bind:value="item" >
                                <label class="make-model__label">{{item}}</label>
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
                varModels:[],
                models:[], 
                carstoshowfromparentinput:[],
                modelstoshowfromparentinput:[],
                varformodelstoshow:[],
                parentinputmodel:[],
                varparentinput:[],
                inputparentcheck:{},


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
                this.$emit('changeovers', this.modelstoshowfromparentinput)
            },
            
           findModels(valCar) {
                this.varModels = valCar        
            },
            changeStatusOfParentInput(val) {
                // console.log(model);
                this.varparentinput.push(val)
                let qtyAdded = this.varparentinput.length
                let b = []
                let a = this.cars.filter(el=>el.make===val)
                a = [...new Set(a)]
                a.forEach(el=>{
                    let c = el.model
                    b.push(c)

                })
                b = [...new Set(b)]
                let qtyTotalMakes = b.length
                if(qtyAdded===qtyTotalMakes) {
                    this.parentinputmodel.push(val)
                    this.varparentinput = []                    
                }

                this.modelstoshowfromparentinput.push(val)

                this.varformodelstoshow = []
                this.carstoshowfromparentinput = []
    
                let h = this.parentinputmodel.reduce(function(target, key) {
                target[key] = true
                return target
                }, {}) 

                this.inputparentcheck = h

                      
            },
            inputModelsFromParent(val) {
               
                this.varformodelstoshow.push(val)
                this.varformodelstoshow = [...new Set(this.varformodelstoshow)]    
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
            varformodelstoshow (val) {
              
                let a = val
                let b = Object.values(a)
                b.forEach(el=>{
                    let a = el
                    let m = this.cars.filter(el=>el.make===a) 
                    m.forEach(el=>{
                        let d = el
                        this.carstoshowfromparentinput.push(d)
                        this.carstoshowfromparentinput = [...new Set(this.carstoshowfromparentinput)]
                    })
                    
                })
 
            },
            carstoshowfromparentinput (val) {
                let a = val
                a.forEach(el=>{
                   let b = el.model
                   this.modelstoshowfromparentinput.push(b)
                   this.modelstoshowfromparentinput = [...new Set(this.modelstoshowfromparentinput)]
                  
                    
                })

         
               
            }
            




          
            

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

		&__choice-form-models {
            padding-left: 13px;
		}

        &__label {
            padding-left: 5px;
        }

        
}






</style>