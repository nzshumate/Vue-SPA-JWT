
import Vue from 'vue';
import Router from 'vue-router';
import Signin from '@/components/Signin';
import Signup from '@/components/Signup';
import List from '@/components/todos/List';
import Movies from '@/components/movies/Movies';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/todos',
      name: 'List',
      component: List
    },
    {
      path: '/movies',
      name: 'List',
      component: Movies
    }
  ]
})
