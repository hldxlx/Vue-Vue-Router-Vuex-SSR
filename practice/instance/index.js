/**
 * Created by cyb on 2019/5/12.
 */
import Vue from 'vue';
const app = new Vue({
    // el:'#root',
    template:'<div>{{text}}</div>',
    data:{
        text:0
    }
})
app.$mount('#root')
setInterval(() => {
    app.text+=1;
    //app.$options.data.text += 1;
    // app.$data.text += 1;
},1000)

// app.$options.render = (h) =>{
//     return h('div',{
//
//     },'new render function')
// }
// console.log(app.$root === app)
//console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// app.$once('test', (a, b) => {
//   console.log(`test emited ${1} ${b}`)
// })

// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// app.$forceUpdate()