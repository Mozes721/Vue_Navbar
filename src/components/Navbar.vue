<template>
    <nav id="vue">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/about">About</router-link></div>
        <div class="menu-item"><router-link to="/contacts">Contact</router-link></div>
        <Services title="Services" :items="services"/> 
    </nav>
</template>

<script>
import Services from '../components/Services'
import Web from '@/components/Dropdown_folder/Web'
import Design from '@/components/Dropdown_folder/Design'
import Videos from '@/components/Dropdown_folder/Videos'


export default {
  name: 'navbar',
  components: {
    Services
  },
  data () {
    return {
      services: [
        {
          path: '/web',
          name: 'Web',
          components: Web
        },
        {
          path: '/design',
          name: 'Design',
          components: Design
        },
        {
          path: '/videos',
          name: 'Videos',
          components: Videos
        }
      ],
      mode: 'history'
    }
  }
}

</script>
<style>

nav {
  width: 100vw;
  background-color: #0d0d0e;
  display: flex;
  align-items: center;
  justify-content: center;

}
nav .menu-item {
  color: #FFF;
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #0d0d0e;
  border-bottom-color: #bb3030;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

</style>
