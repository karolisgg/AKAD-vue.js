<template>
	<div class="footer">
		<section class="green-section">
			<div class="container content">
				<div class="left-content">
					<h3>You think we're cool? Let's work together</h3>
					<button>Get in touch</button>
				</div>
				<div class="right-content">
					<template v-if="!valid">
						<h3>Stay informed with our newsletter</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
						<form 
							method="POST" 
							@submit="checkEmail" 
							novalidate="true"
						>
							<input type="email" name="email" placeholder="Your email" v-model="email">
							<input type="submit" name="submit" value="SEND" v-on:click="send = true">
						</form>
						<p v-if="!email && send">This field is required</p>
						<p v-if="email && send && !valid">Enter a valid email address</p>
					</template>
					<p class="subscribe" v-if="valid">Thank you for subscribing!</p>
				</div>
			</div>
		</section>
		<div class="container nav-bar">
			<nav>
				<a href="#">Home</a>
				<span>- &nbsp; <a href="#">About us</a></span>
				<span>- &nbsp; <a href="#">Services</a></span>
				<span>- &nbsp; <a href="#">Portfolio</a></span>
				<span>- &nbsp; <a href="#">Blog</a></span>
				<span>- &nbsp; <a href="#">Contact us</a></span>
			</nav>
			<div class="copyright">
				<p>Created by akhouad 2016. All Rights Reserved</p>
				<div class="social-links">
					<img src="../assets/images/home/social_media.jpg">
					<img src="../assets/images/home/social_media1.jpg">
					<img src="../assets/images/home/social_media2.jpg">
					<img src="../assets/images/home/social_media3.jpg">
					<img src="../assets/images/home/social_media4.jpg">
					<img src="../assets/images/home/social_media5.jpg">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Footer',
	data () {
		return {
			send  : false,
			email : null,
			valid : false
		}
	},
	methods: {
		checkEmail: function(e) {
			e.preventDefault();
			if (this.email) {
		    var re = /\S+@\S+\.\S+/;
		    this.valid = re.test(this.email);
		    if (this.valid) {
					axios.post('/user', {
			    email: this.email
				  })
				  .then(function (response) {
				    console.log(response);
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
				}
		    return this.valid;
		  }
		  return false;
		}
	}
}
</script>

<style scoped lang="less">
	.footer {
		.green-section {
			background-color: #7beec7;
			padding: 50px 0;
			.content {
				display: flex;
				justify-content: space-between;
				.left-content {
					width: 45%;
					h3 {
						line-height: 48px;
						color: #ffffff;
						margin-bottom: 20px;
					}
					button {
						padding: 15px 30px;
						font-size: 14px;
						font-weight: bold;
						text-transform: uppercase;
						color: #7beec7;
						background-color: #ffffff;
					}
				}
				.right-content {
					width: 48%;
					background-color: #ffffff;
					padding: 15px 20px;
					h3 {
						font-size: 24px;
						line-height: 36px;
					}
					p {
						font-size: 14px;
						line-height: 1.5;
						color: rgb(153,153,153);
						padding: 10px 0 20px;
						&.subscribe {
							font-size: 18px;
							font-weight: bold;
							text-transform: uppercase;
							text-align: center;
							margin-top: 45px;
						}
					}
					form {
						display: flex;
						input:first-child {
							padding: 20px;
							text-transform: uppercase;
							font-size: 12px;
							font-weight: bold;
							color: rgb(96,96,110);
							width: 375px;
							height: 50px;
							background-color: #ffffff;
							border: 1px solid rgba(0,0,0,0.1);
							&::placeholder {
								color: rgb(205,205,205);
							}
						}
						input:last-child {
							width: 135px;
							min-width: 100px;
							height: 50px;
							background-color: #7bedc7;
							color: #ffffff;
							font-size: 14px;
							font-weight: bold;
						}
					}
				}
			}
		}
		.nav-bar {
			padding: 40px 20px;
			display: flex;
			justify-content: space-between;
			nav {
				display: flex;
				flex-wrap: wrap;
				a {
					text-transform: uppercase;
					font-size: 12px;
					line-height: 2;
					color: rgb(154,154,154);
					margin: 0 15px;
					&:first-child {
						margin-left: 0;
					}
				}
			}
			.copyright {
				font-size: 12px;
				line-height: 2;
				color: rgb(154,154,154);
				text-transform: uppercase;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				margin-left: 20px;
				.social-links {
					width: 100%;
					max-width: 185px;
					height: 25px;
					margin-top: 20px;
				}
			}
		}
		@media (max-width: 750px) {
			.green-section {
				.content {
					flex-direction: column;
					.left-content {
						width: 100%;
						margin-bottom: 30px;
					}
					.right-content {
						width: 100%;
						form {
							width: 100%;
							input:first-child {
								width: 100%;
							}
						}
					}
				}
			}
		}
	}
</style>
