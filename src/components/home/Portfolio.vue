<template>
  <div class="portfolio container">
    <h3 class="heading">Our portfolio</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="gallery">
      <div class="filters">
        <h3>Choose category</h3>
        <div>
          <p id="all">All</p>
          <p>Web design</p>
          <p>Graphic design</p>
          <p>Fashion</p>
          <p>Logo design</p>
          <p>Advertising</p>
        </div>
      </div>
      <div class="images">
        <div>
          <img src="../../assets/images/home/portfolio_img1.jpg">
          <img src="../../assets/images/home/portfolio_img4.jpg">
          <img src="../../assets/images/home/portfolio_img7.jpg">
        </div>

        <div>
          <img src="../../assets/images/home/portfolio_img2.jpg">
          <img src="../../assets/images/home/portfolio_img5.jpg">
          <img src="../../assets/images/home/portfolio_img8.jpg">
        </div>

        <div>
          <img src="../../assets/images/home/portfolio_img3.jpg">
          <img src="../../assets/images/home/portfolio_img6.jpg">
          <img src="../../assets/images/home/portfolio_img9.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topsection',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
  .portfolio {
    display: flex;
    flex-direction: column;
    .heading {
      align-self: center;
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
      align-self: center;
      max-width: 800px;
      text-align: center;
      font-size: 14px;
      line-height: 1.5;
      margin-top: 20px;
    }
    .gallery {
      display: flex;
      justify-content: space-between;
      margin: 90px 0 140px;
      .filters {
        width: 175px;
        margin-right: 50px;
        h3 {
          line-height: 48px;
          margin-bottom: 40px;
        }
        p {
          text-align: left;
          margin: 0 0 0 15px;
          font-size: 14px;
          line-height: 48px;
          font-weight: bold;
          text-transform: uppercase;
          display: inline-block;
          cursor: pointer;
          &#all {
            margin: 0 0 15px;
            line-height: 1;
            padding: 5px 20px;
            background-color: #7bedc7;
            color: #ffffff;
          }
        }
      }
      .images {
        max-width: 840px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-start;
        div {
          max-width: 32%;
          img {
            width: 100%;
            margin-bottom: 1vw;
          }
        }
      }
    }
    @media (max-width: 600px) {
      .gallery {
        flex-direction: column;
        .filters {
          width: 100%;
          margin-bottom: 30px;
          h3 {
            margin-bottom: 20px;
          }
          p {
            &#all {
              margin: 0 0 0 15px;
            }
          }
        }
      }
    }
  }
</style>
