import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Services from '../components/Services'

import Web from '@/components/Dropdown_folder/Web'
import Design from '@/components/Dropdown_folder/Design'
import Videos from '@/components/Dropdown_folder/Videos'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/services/web',
      name: 'Web',
      component: Web
    },
    {
      path: '/services/design',
      name: Design,
      component: Design
    },
    {
      path: '/services/videos',
      name: 'Videos',
      component: Videos
    }
  ]
})

