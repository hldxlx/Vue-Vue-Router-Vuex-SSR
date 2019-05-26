// import Todo from '../views/todo/todo.vue'
// import Logoin from '../views/login/login.vue'
export default [
    {
        path:'/',
        redirect:'/app'
    },
    {
        // path:'/app',
        path:'/app/:id',//  /app/xxx
        props:true,//方式1
        // props:{
        //     id:'456'
        // },//方式2
        // props:(route) => ({id:route.query.b}),//方式3
        component: () => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue'),//异步路由的配置（不知为何加上这句代码就报红）
        name:'app',
        meta: {
            title: 'this is app',
            description: 'asdasd'
        },
        beforeEnter (to, from, next) {
            console.log('app route before enter')
            next()
        }
        // ,
        // children:[
        //     {
        //         path:'test',
        //         component:Logoin
        //     }
        // ]
    },
    {
        path:'/login',
            component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
    },
    {
        path:'/login/exact',
            component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
    }
]
