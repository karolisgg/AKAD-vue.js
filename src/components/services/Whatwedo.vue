<template>
  <div class="what-we-do container">

  	<h3>What we do</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>

    <div class="top-content">
    	<div class="left">
    		<p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    		cillum dolore eu fugiat nulla pariatur.</p>

    		<div class="checkbox">
    			<div>
    				<p>Stunning on all screens</p>
    				<p>Easy to customize</p>
    				<p>Make a difference</p>
    				<p>Imagine and create</p>
    				<p>Unlimited possibilities</p>
    			</div>

    			<div>
    				<p>Remarkable style</p>
    				<p>Captivating presentations</p>
    				<p>Make your portfolio pop</p>
    				<p>Words that matter</p>
    				<p>Satisfied clients</p>
    			</div>
    		</div>
    	</div>
    	<img src="../../assets/images/services/services_img.jpg">
    </div>

    <div class="bottom-content">
    	<div class="benefits">
    		<div class="after"><img src="../../assets/images/services/pulse.png"></div>
    		<h4>Keep pulse going</h4>
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    		tempor.</p>
    	</div>

    	<div class="benefits">
    		<div class="after"><img src="../../assets/images/home/middle_icon1.png"></div>
    		<h4>Pass the limits</h4>
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    		tempor.</p>
    	</div>

    	<div class="benefits">
    		<div class="after"><img src="../../assets/images/services/idea.png"></div>
    		<h4>Great ideas</h4>
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    		tempor.</p>
    	</div>

    	<div class="benefits">
    		<div class="after"><img src="../../assets/images/home/middle_icon4.png"></div>
    		<h4>Awesome support</h4>
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    		tempor.</p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Whatwedo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
	.what-we-do {
		padding: 140px 20px;
		display: flex;
    flex-direction: column;
    align-items: center;
		h3 {
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
    .top-content {
    	display: flex;
    	justify-content: space-between;
    	padding: 90px 0 140px;
    	align-items: flex-start;
    	.left {
    		width: 50%;
    		margin-right: 30px;
    		p {
    			text-align: left;
    			font-size: 14px;
    			line-height: 2;
    			margin: 0;
    			&.text {
    				margin-bottom: 30px;
    			}
    		}
    		.checkbox {
    			display: flex;
    			justify-content: space-between;
    			div {
    				margin: 0 20px 30px 0;
  					p:before {
  						content: url('../../assets/images/services/checkbox.jpg');
  						margin-right: 10px;
  					}
  					&:last-child {
  						margin-right: 40px;
  					}
    			}
    		}
    	}
    	img {
    		width: 48%;
    		object-fit: contain;
    	}
    }
    .bottom-content {
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	.benefits {
    		text-align: center;
    		width: 20%;
    		.after {
    			position: relative;
	    		img {
	    			height: 50px;
	    			margin-bottom: 30px;
	    		}
	    		&::after {
			        content: '';
			        width: 50px;
							height: 20px;
			        background-color: #7bedc7;
			        position: absolute;
			        z-index: -1;
			        left: 50%;
			        bottom: 50%;
			        transform: translate(-32px, 10px);
			      }
	    	}
    		&:nth-child(2n){
  				img {
  					width: 50px;
  					height: auto;
  					margin: 20px 0 40px;
  				}
  			}
  			&:nth-child(4) {
  				img {
  					margin-top: 5px;
  				}
  			}
  			p {
  				line-height: 2;
  			}
    	}
    }
    @media (max-width: 975px) {
    	padding: 80px 20px;
    	.top-content {
    		padding: 50px 0 80px;
    		flex-direction: column;
    		.left {
    			width: 100%;
    			.checkbox {
    				justify-content: space-around;
    			}
    		}
    		img {
    			width: 100%;
    		}
	    }
	  }
	  @media (max-width: 600px) {
	  	.bottom-content {
	  		flex-wrap: wrap;
	  		.benefits {
	  			width: 40%;
	  			&:nth-child(-n+2) {
	  				margin-bottom: 30px;
	  			}
	  		}
	  	}
	  }
	}
</style>
