/**
 * Created by cyb on 2019/5/12.
 */
import Vue from 'vue'
const component = {
    props:{
        active:{
            // type: Boolean,
            // required: true,
            validator (value) {
                return typeof value === 'boolean'
            }
        },
        propOne: String
    },
    template:`
       <div>
        <input type="text" v-model="text">
        <span @click="handleChange">{{propOne}}</span>
        <span v-show="active">see me if active</span>
       </div> 
    `,
    data () {
        return  {
            text: 0
        }
    },
    methods: {
        handleChange () {
            this.$emit('change')
        }
    }
}
//Vue.component('CompOne',component)
new Vue({
    components:{
        CompOne: component
    },
    el: '#root',
    data: {
        prop1: 'text1'
    },
    methods: {
        handleChange () {
            this.prop1 += 1
        }
    },
    mounted () {
        console.log(this.$refs.comp1)
    },
    template:`
     <div>
     <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
     <comp-one :active="false"></comp-one>
    </div>
    `
})