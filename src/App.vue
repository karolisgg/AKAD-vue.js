<template>
  <div id="app">

  	<header class="container header">
      <h4>Akad.</h4>
      <div class="menu" v-bind:class="{ hidden: !menu_open }">
	      <router-link to="/"><a @click="openMenu">Home</a></router-link>
	      <span>/</span>
	      <router-link to="/services"><a @click="openMenu">Services</a></router-link>
	    </div>
      <div class="hamburger" v-on:click="openMenu">
        <span>____</span>
        <span>__</span>
        <span>___</span>
      </div>
    </header>

    <router-view/>
    <Footer/>
    
    <div class="overlay" v-bind:class="{ hidden: !menu_open }" @click="openMenu"></div>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  export default {
    name: 'App',
    components: {
      Footer
    },
    data () {
			return {
				menu_open: false
			}
		},
    methods: {
    	openMenu() {
    		console.log('click');
    		this.menu_open = !this.menu_open;
    	}
    }
  }
</script>

<style lang="less">
  body {
    font-family: 'Montserrat', sans-serif;
    color: rgb(96,96,110);
    position: relative;
    h2, h3, h4 {
      font-weight: bold;
      text-transform: uppercase;
    }
    h2 {
      font-size: 48px;
    }
    h3 {
      font-size: 30px;
    }
    h4 {
      font-size: 18px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
    z-index: auto;
    .menu {
    	position: relative;
    	top: 40px;
    	z-index: 5;
    	a {
    		color: #ffffff;
    		text-transform: uppercase;
    		font-weight: bold;
    	}
    	span {
    		color: #ffffff;
    		font-weight: bold;
    		margin: 0 10px;
    	}
    }
    .hamburger {
      cursor: pointer;
      span {
        display: block;
        line-height: 0.5;
      }
    }
  }
</style>
