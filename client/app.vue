<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!--<p>{{count}}</p>-->
        <p>{{fullName}}</p>

        <p>{{counter}}</p>

        <hr/>
        <p>{{textA}}</p>

        <p>{{textC}}</p>
        <!--<Todo></Todo>-->
        <router-link to="/app">app</router-link>
        <!--<router-link :to="{name:'app'}">app</router-link>-->
        <router-link to="/app/123">app/123</router-link>
        <router-link to="/app/555">app/555</router-link>

        <router-link to="/login">login</router-link>
        <router-link to="/login/exact">login exact</router-link>

        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
        <Footer></Footer>
        <!--<router-view name="a"/>
        components:{
            default:Todo,
            a:Logoin
        },//有2个router-view routes.js就用components-->

    </div>
</template>

<script>
    import Header from './layout/header.vue'
    import Footer from './layout/footer.jsx'
//    import Todo from './views/todo/todo.vue'
    import {
        mapState,
        mapGetters,
        mapActions,
        mapMutations
    } from 'vuex'
    export default {
        components: {
            Header,
            Footer
//            ,
//            Todo
        },
        mounted(){
            console.log(this.$route);

            console.log(this.$store,'=======store');
//            let i = 1;

//            this.$store.dispatch('updateCountAsync',{
//                num:5,
//                time:2000
//            })//方式a
            this.updateCountAsync({
                num:5,
                time:2000
            })//方式b

           this.updateText('666');//方式1 对应methods 里面的...mapMutations(['updateCount','updateText'])





//            setInterval(() =>{
//                this.$store.commit('updateCount',{
//                    num:i++,
//                    num2:2
//                })
//            },1000)//方式a

//               setInterval(() =>{
//                this.updateCount({
//                    num:i++,
//                    num2:2
//                })
//            },1000)//方式b
        },
        methods:{
            ...mapActions(['updateCountAsync']),
            ...mapMutations(['updateCount','updateText'])
        },
        computed:{
//            textA(){
//                return this.$store.state.a.text
//            },//方法one

//            ...mapState(['count']),//方式2
//            ...mapState({
//                counter:'count'
//            }),//方式3
            ...mapState({
                counter:(state) => state.count,
                textA:state => state.a.text,//方法two
                textC:state => state.c.text
            }),//方式4
//            count(){
//                return this.$store.state.count
//            },//方式1
            ...mapGetters([
                'fullName'
            ])
//            ,
//            fullName(){
//                return this.$store.getters.fullName
//            }
        }
    }
</script>

<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity 0.2
        z-index -1
    }

</style>
