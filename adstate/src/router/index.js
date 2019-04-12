import Vue from 'vue'
import Router from 'vue-router'
import LoadData from '@/components/LoadData'
import SaveData from '@/components/SaveData'
import ShowData from '@/components/ShowData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadData',
      component: LoadData
    },
    {
      path: '/SaveData',
      name: 'SaveData',
      component: SaveData
    },
    {
      path: '/ShowData',
      name: 'ShowData',
      component: ShowData
    }
  ]
})
