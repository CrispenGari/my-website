<template>
  <div class="barner">
    <div class="barner__content">
      <div class="barnner__social">
        <a href="https://www.facebook.com/crispengari">
          <v-icon class="barnner__social__facebook">
            mdi-facebook
          </v-icon>
        </a>
        <a href="https://www.linkedin.com/in/crispen-gari-34437720b/">
          <v-icon class="barnner__social__linkedin">
            mdi-linkedin
          </v-icon>
        </a>
        <a href="https://twitter.com/crispengari">
          <v-icon class="barnner__social__twitter">
            mdi-twitter
          </v-icon>
        </a>
        <a href="https://www.instagram.com/crispengari/">
          <v-icon class="barnner__social__instagram">
            mdi-instagram
          </v-icon>
        </a>
        <a href="https://github.com/CrispenGari">
          <v-icon class="barnner__social__github">
            mdi-github
          </v-icon>
        </a>
      </div>

      <h1>
        Hello, Welcome to Crispen Gari's site.
        <small
          >Everything should be made as simple as possible, but not simpler —
          ALBERT EINSTEIN</small
        >
      </h1>
      <p>
        <span> Data Science, </span><span> Web Development, </span
        ><span> Mobile Development</span> <span>and</span
        ><span>
          Desktop Development
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Barner",
};
</script>

<style lang="scss" scoped>
.barner {
  background: url(../../assets/ai.gif);
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  .barnner__social {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    display: flex;
    align-items: center;
    a {
      text-decoration: none !important;
      margin: 5px;
    }
    .barnner__social__facebook {
      color: #2ba5da;
      cursor: pointer;
      font-size: 30px;
    }
    .barnner__social__twitter {
      color: #2ba5da;
      cursor: pointer;
      font-size: 30px;
    }
    .barnner__social__linkedin {
      color: #0073b1;
      cursor: pointer;
      font-size: 30px;
    }
    .barnner__social__instagram {
      color: #dd0f26;
      cursor: pointer;
      font-size: 30px;
    }
    .barnner__social__github {
      color: #24292e;
      cursor: pointer;
      font-size: 30px;
    }
  }
  .barner__content {
    background: rgba(0, 0, 0, 0.7);
    flex: 1;
    padding: 10px;
    display: grid;
    place-items: center;
    h1 {
      color: white;
      letter-spacing: 2px;
      font-size: 25px;
      font-weight: 500;
      text-align: center;
      position: relative;
      top: -200px;
      margin-bottom: 10px !important;
      user-select: none;
      display: flex;
      flex-direction: column;
      small {
        color: white;
        font-weight: normal;
        font-size: 12px !important;
        letter-spacing: unset;
      }
    }
    p {
      span {
        color: white;
        user-select: none;
        font-size: 18px;
        letter-spacing: 2px;
      }
      text-align: center;
    }
  }
  p > span:nth-child(1) {
    color: #1d74b7 !important;
  }
  p > span:nth-child(2) {
    color: #42b983 !important;
  }
  p > span:nth-child(3) {
    color: #8731d2 !important;
  }
  p > span:nth-child(5) {
    color: #0074e8 !important;
  }
  .barner__content > h1 {
    animation: header-animation 1.5s ease-out 1s 1 alternate forwards;
  }
  @keyframes header-animation {
    from {
      top: -200px;
    }
    to {
      top: 40px;
    }
  }
  .barner__content > p {
    padding: 10px;
    margin-top: 10px;
    position: relative;
  }

  p > span:nth-child(1) {
    color: #1d74b7 !important;
    position: relative;
    animation: span1-animation 1.5s ease-out 1s 1 alternate forwards;
  }
  @keyframes span1-animation {
    from {
      left: -200px;
    }
    to {
      left: 0;
    }
  }
  p > span:nth-child(2) {
    color: #42b983 !important;
    position: relative;
    animation: span2-animation 1.5s ease-out 1s 1 alternate forwards;
  }
  @keyframes span2-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  p > span:nth-child(3) {
    color: #8731d2 !important;
    position: relative;
    animation: span3-animation 1.5s ease-out 1s 1 alternate forwards;
  }
  @keyframes span3-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  p > span:nth-child(4) {
    position: relative;
    animation: span4-animation 1.5s ease-out 1s 1 alternate forwards;
  }
  @keyframes span4-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  p > span:nth-child(5) {
    color: #0074e8 !important;
    position: relative;
    animation: span5-animation 1.5s ease-out 1s 1 alternate forwards;
  }
  @keyframes span5-animation {
    from {
      right: -200px;
    }
    to {
      right: 0;
    }
  }
  .barner__content > h1 > small {
    animation: small-animation 10s ease-out 1s 1 alternate forwards !important;
  }
  @keyframes small-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 1000px) {
    .barner__content > h1 > small {
      display: none !important;
    }
  }
}
</style>
