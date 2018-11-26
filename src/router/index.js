import Vue from 'vue'
import Router from 'vue-router'
import Magipot from '@/components/magipot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Magipot',
      component: Magipot
    }
  ]
})
