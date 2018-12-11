<template>
  <div class="middle-section container">
    <h3>Why choose us</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="flex-container">
      <div class="grid-container">
        <div>
          <img src="../../assets/images/home/middle_icon1.png">
          <h4>Unlimited options</h4>
          <p>Branding</p>
          <p>Design & copywriting</p>
          <p>Concept development</p>
          <p>User experience</p>
        </div>

        <div>
          <img src="../../assets/images/home/middle_icon2.png">
          <h4>Design & development</h4>
          <p>Information architecture</p>
          <p>Interface design</p>
          <p>Product design</p>
          <p>Integrated ad companies</p>
        </div>

        <div>
          <img src="../../assets/images/home/middle_icon3.png">
          <h4>E-commerce</h4>
          <p>Prototyping</p>
          <p>Technical consulting</p>
          <p>Web applications</p>
          <p>Quality testing</p>
        </div>

        <div>
          <img src="../../assets/images/home/middle_icon4.png">
          <h4>Customizable design</h4>
          <p>Information architecture</p>
          <p>Interface design</p>
          <p>Product design</p>
          <p>Integrated ad companies</p>
        </div>
      </div>
      <img src="../../assets/images/home/middle_img.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Middlesection',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
  .middle-section {
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
      margin-top: 20px;
    }
    .flex-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 100px 0 140px;
      .grid-container {
        width: 100%;
        max-width: 600px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 30px;
        div {
          img {
            margin-left: 0;
            margin-bottom: 15px;
          }
          h4 {
            margin-bottom: 20px;
          }
          p {
            text-align: left;
            text-transform: uppercase;
            margin-top: 0;
            font-size: 14px;
            line-height: 30px;
            color: rgb(153,153,153);
          }
          &:first-child {
            img {
              margin: 10px 0 19px;
            }
          }
          &:last-child {
            img {
              margin-bottom: 19px;
            }
          }
        }
      }
      img {
        margin-left: 30px;
        max-width: 40%;
        object-fit: contain;
        align-self: flex-start;
      }
      @media (max-width: 890px) {
        margin: 50px 0;
        .grid-container {
          margin: 0 auto;
          max-width: 550px;
          grid-gap: 50px;
        }
        img {
          display: none;
        }
      }
      @media (max-width: 550px) {
        .grid-container {
          margin: 0 auto;
          max-width: 230px;
          grid-gap: 30px;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
        }
      }
    }
  }
</style>
