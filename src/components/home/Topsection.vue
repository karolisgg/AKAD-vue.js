<template>
  <div class="top-section">

    <section class="heading">
      <h4>We're</h4>
      <h2>Creative agency</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>
    </section>
    <div class="container">
      <img src="@/assets/images/home/top_img.jpg">
      <div class="history">
        <h3>History of agency</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        <button>Read more</button>
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
  .top-section {
    padding: 40px 0 140px;
    background-image: url('../../assets/images/home/top_bg.jpg');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 830px;
    min-height: 1000px;
    .heading {
      max-width: 560px;
      margin: 160px auto 115px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h4 {
        padding: 10px 20px;
        background-color: #7bedc7;
      }
      h2 {
        padding: 20px 30px;
        border: 10px solid rgb(96,96,110);
        margin-bottom: 30px;
        line-height: 1.2;
      }
      p {
        font-size: 16px;
        text-align: center;
        line-height: 1.5;
      }
    }
    div {
      &.container {
        display: flex;
        justify-content: space-between;
        img {
          align-self: flex-start;
          object-fit: contain;
          width: 40%;
          margin-right: 30px;
        }
        .history {
          margin-top: 20px;
          width: 50%;
          display: flex;
          flex-direction: column;
          h3 {
            position: relative;
            &::after {
              content: '';
              width: 67px;
              height: 21px;
              background-color: #7bedc7;
              position: absolute;
              z-index: -1;
              left: 0;
              bottom: -7px;
            }
          }
          p {
            font-size: 16px;
            line-height: 1.9;
            margin: 20px 0;
          }
          button {
            background-color: #7bedc7;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            padding: 15px 40px;
            align-self: flex-end;
          }
        }
      }
    }
    @media (max-width: 850px) {
      background-size: auto;
      padding-bottom: 80px;
      div {
        &.container {
          flex-direction: column;
          align-items: center;
          img {
            margin: 0 auto 50px;
            max-width: 550px;
            width: 100%;
          }
          .history {
            text-align: center;
            max-width: 550px;
            width: 100%;
            h3 {
              max-width: 340px;
              align-self: center;
            }
            button {
              align-self: center;
            }
          }
        }
      }
    }
    @media (max-width: 550px) {
      .heading {
        h2 {
          padding: 20px 0;
        }
      }
    }
  }
</style>
