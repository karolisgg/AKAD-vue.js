<template>
  <div class="services">
  	<section class="top">
  		<h2>Our services</h2>
  		<p>Home / Services</p>
  	</section>
  	<Whatwedo/>
  	<Pricing/>			
  </div>
</template>

<script>
	import Whatwedo from '@/components/services/Whatwedo'
	import Pricing from '@/components/services/Pricing'
	export default {
	  name: 'Services',
	  components: {
      Whatwedo,
			Pricing
    }
	}
</script>

<style scoped lang="less">
	.services {
		.top {
			background-image: url('../../assets/images/services/services_bg.jpg');
			padding: 40px 0 150px;
	    background-repeat: no-repeat;
	    background-size: cover;
	    min-height: 500px;
	    text-align: center;
	    h2 {
	    	font-size: 36px;
	    	line-height: 1.5;
	    	margin: 220px auto 25px;
	    }
	    p {
	    	font-size: 14px;
	    	font-weight: bold;
	    	text-transform: uppercase;
	    }
		}
	}
</style>
