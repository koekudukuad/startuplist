import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    }
  ]
})
/* eslint-disable no-new */
