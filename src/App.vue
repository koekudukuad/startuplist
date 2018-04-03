<BootstrapCss/>
<Fontawesome/>
<BukusakuCss/>
<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<BootstrapJs/>

<script>
import BootstrapCss from './assets/css/bootstrap.min.css'
import Fontawesome from './assets/css/fontawesome-all.min.css'
import BukusakuCss from './assets/css/bukusaku.css'
import Navbar from './components/Navbar'

export default {
  name: 'BukuSaku',
  components: {
    BootstrapCss,
    Fontawesome,
    BukusakuCss,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*  margin-top: 60px;*/
}
</style>
