import Vue from 'vue'
import Router from 'vue-router'
import Magipot from '@/components/magipot'
import Setting from '@/components/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Magipot',
      component: Magipot
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
