<template>
  <div class="barner">
    <div class="barner__content">
      <div class="barnner__social">
        <a href="https://www.facebook.com/crispen.gari/">
          <v-icon class="barnner__social__facebook">
            mdi-facebook
          </v-icon>
        </a>
        <a href="https://www.linkedin.com/in/crispen-gari-34437720b/">
          <v-icon class="barnner__social__linkedin">
            mdi-linkedin
          </v-icon>
        </a>
        <a href="https://twitter.com/crispengari_">
          <v-icon class="barnner__social__twitter">
            mdi-twitter
          </v-icon>
        </a>
        <a href="https://www.instagram.com/crispen_gari_/">
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
        <span
          >building brains from scratch using artificial neural networks
          (ann)</span
        >
      </h1>
      <p>
        <span> Data Science, </span><span> Web Development, </span
        ><span> Mobile Development</span> <span>and</span
        ><span>
          Desktop Development
        </span>
      </p>
      <h1>
        Software Development, Tutorship, Software Consultant, Data Analysis and
        Artificial Intelligence.
      </h1>
      <p>
        Learn Step by Step from ZERO to HERO how to create/build softwares with
        Crispen.
      </p>
    </div>
    <div class="barner__visitors">
      <h1>{{ visitors }} visitor(s)</h1>
    </div>
  </div>
</template>

<script>
import { baseUrl } from "../../constants";

export default {
  name: "Barner",
  components: {},
  mounted() {
    (async () => {
      const res = await fetch(`${baseUrl}/api/v1/visitors`, {});
      const data = await res.json();
      if (data?.visitors) {
        this.visitors = data.visitors;
      }
    })();
  },

  data() {
    return { visitors: 0 };
  },
};
</script>

<style lang="scss" scoped>
.barner {
  background-image: url(../../assets/ai.gif);
  background-color: #1d74b7;
  background-blend-mode: lighten;
  width: 100%;
  height: 55vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none !important;

  .barner__visitors {
    position: absolute;
    width: fit-content;
    bottom: 10px;
    padding: 5px 20px;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    h1 {
      color: white;
      font-weight: 500;
    }
  }
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
      color: white;
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
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      position: relative;
      top: -200px;
      margin-bottom: 10px !important;
      user-select: none;
      display: flex;
      flex-direction: column;
      span {
        color: cornflowerblue !important;
        font-size: 0.7rem;
        margin-top: 20px;
        text-align: center;
      }
    }
    p {
      color: cornflowerblue !important;
    }
    small {
      color: white;
      font-weight: normal;
      font-size: 12px !important;
      letter-spacing: unset;
      letter-spacing: 2px;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      strong {
        color: white;
        letter-spacing: 2px;
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
  .barner__content > small {
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
  @media only screen and (max-width: 725px) {
    .barner__content > h1 {
      font-size: 15px !important;
    }
    .barner__content > p > span {
      font-size: 12px !important;
    }
    .barner__content > small {
      display: none !important;
    }
    .barner__visitors {
      h1 {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .barner__content > h1 {
      font-size: 15px !important;
    }
    .barner__content > p > span {
      font-size: 12px !important;
    }
  }
  @media (orientation: landscape) {
    // .barner__content > small {
    //   display: inline-flex !important;
    // }
  }
}
</style>
