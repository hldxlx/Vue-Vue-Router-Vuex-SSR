import Vue from 'vue'
const component = {
    parent:parent,
    props:{
        active:Boolean,
        propOne: String
    },
    template:`
       <div>
        <input type="text" v-model="text">
        <span>{{propOne}}</span>
        <span>see me if active</span>
       </div> 
    `,
    data () {
        return  {
            text: 0
        }
    },
    mounted(){
        console.log('comp mounted')
    },
    methods: {
        handleChange () {
            this.$emit('change')
        }
    }
}

const parent = new Vue({
    name: 'parent'
})

const componet2 = {
    extends: component,
    data () {
        return {
            text: 111
        }
    },
    mounted () {
        this.$parent.text = '12345'
        console.log(this.$parent.$options.name,'111111111111')
    }
}

// const compVue = Vue.extend(component)
// new compVue({
//     el:'#root',
//     propsData: {
//         propOne: 'xxx'
//     },
//     data: {
//         text: '123'
//     },
//     mounted(){
//             console.log('instance mounted')
//     }
// })
new Vue({
    parent:parent,
    name: 'Root',
    el: '#root',
    mounted () {
        console.log(this.$parent.$options.name,'22222222')
    },
    components: {
        Comp: componet2
    },
    data: {
        text: 23333
    },
    template: `
    <div>
     <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})