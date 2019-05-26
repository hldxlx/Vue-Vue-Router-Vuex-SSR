import Router from 'vue-router'
import routes from './routes'
const router = new Router({
    routes
})
export default () => {
    return new Router({
        routes,
        // base: '/base/',
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        },
        // fallback: true,
        // parseQuery (query) {
        //
        // },
        // stringifyQuery (obj) {
        //
        // }

    })
}
