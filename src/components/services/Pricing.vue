<template>
  <div class="pricing">

  	<h3 class="heading">Pricing plans</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>

    <div class="container">
    	<div>
    		<h3>Basic</h3>
    		<h5>$35.99 Monthly</h5>
    		<p>Lorem ipsum dolor sit amet</p>
    		<p>Consectetur adipisicing elit</p>
    		<p>Sed do eiusmod tempor</p>
    		<p>Ut enim ad minim veniam</p>
    		<p>Duis aute irure dolor</p>
    		<p>Excepteur sint occaecat</p>
    		<button>Get started</button>
    	</div>

    	<div>
    		<h3>Advanced</h3>
    		<h5>$55.99 Monthly</h5>
    		<p>Lorem ipsum dolor sit amet</p>
    		<p>Consectetur adipisicing elit</p>
    		<p>Sed do eiusmod tempor</p>
    		<p>Ut enim ad minim veniam</p>
    		<p>Duis aute irure dolor</p>
    		<p>Excepteur sint occaecat</p>
    		<button>Get started</button>
    	</div>

    	<div>
    		<h3>Smart</h3>
    		<h5>$75.99 Monthly</h5>
    		<p>Lorem ipsum dolor sit amet</p>
    		<p>Consectetur adipisicing elit</p>
    		<p>Sed do eiusmod tempor</p>
    		<p>Ut enim ad minim veniam</p>
    		<p>Duis aute irure dolor</p>
    		<p>Excepteur sint occaecat</p>
    		<button>Get started</button>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
	.pricing {
		padding: 0 20px 140px;
		display: flex;
    flex-direction: column;
    align-items: center;
		.heading {
      position: relative;
      display: inline;
      &::after {
        content: '';
        width: 67px;
        height: 21px;
        background-color: #7bedc7;
        position: absolute;
        z-index: -1;
        left: 3px;
        bottom: -7px;
      }
    }
    p {
      max-width: 800px;
      text-align: center;
      font-size: 14px;
      line-height: 1.5;
      margin: 20px auto 0;
    }
    .container {
    	width: 100%;
    	padding-top: 100px;
    	display: flex;
    	justify-content: space-between;
    	div {
    		width: 31%;
    		border-top: 5px solid #7bedc7;
    		padding: 30px 30px 40px;
    		position: relative;
    		h5 {
    			margin: 15px 0 45px;
    			font-size: 14px;
    			line-height: 1.5;
    			font-weight: bold;
    			text-transform: uppercase;
    			background-color: #7bedc7;
    			padding: 10px 20px;
    			color: #ffffff;
    			max-width: 165px;
    		}
    		p {
    			text-align: left;
    			&:before {
						content: url('../../assets/images/services/checkbox.jpg');
						margin-right: 10px;
					}
					&::first-child {
					}
    		}
    		button {
    			margin-top: 50px;
    			line-height: 1.5;
    			background-color: #7bedc7;
    			text-transform: uppercase;
    			padding: 15px 15px;
    			color: #ffffff;
    			max-width: 135px;
    		}
    		&:before {
    			content: '';
				  width: 0; 
				  height: 0; 
				  border-left: 15px solid transparent;
				  border-right: 15px solid transparent; 
				  border-bottom:15px solid #7bedc7; 
				  transform: rotate(45deg);
				  position: absolute;
				  top: -7px;
				  right: -10px;
    		}
    		&:hover {
    			box-shadow: 0 0 50px 20px #e0e0e0;
    		}
    	}
    }
    @media (max-width: 850px) {
    	padding-bottom: 60px;
    	.container {
    		flex-wrap: wrap;
    		padding-top: 50px;
    		div {
    			width: 40%;
    			min-width: 300px;
    			margin: 0 auto 30px;
    			justify-content: center;
    		}
    	}
    }
    @media (max-width: 400px) {
    	.container {
    		div {
    			width: 100%;
    			min-width: 100px;
    		}
    	}
    }
	}
</style>
