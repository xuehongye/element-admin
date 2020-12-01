import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from '../views/ListArticle'
import CreateArticle from '../views/CreateArticle'
import editArticle from '../views/editArticle'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/articles/index'
        },
        {
            path: '/articles/index',
            name: 'list-article',
            component: ListArticle
        },
        {
            path: '/articles/create',
            name: 'create-article',
            component: CreateArticle
        },
        {
            path: '/articles/:id/edit',
            name: 'edit-article',
            component: editArticle
        }
    ]
})