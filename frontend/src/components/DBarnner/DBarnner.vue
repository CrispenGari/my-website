<template>
  <div :class="`barner`">
    <div class="barner__content">
      <div class="barnner__social">
        <a href="https://www.facebook.com/crispen.gari/" target="blank_">
          <i class="pi pi-facebook barnner__social__facebook"></i>
        </a>
        <a
          target="blank_"
          href="https://www.linkedin.com/in/tinashe-crispen-garidzira-34437720b/"
        >
          <i class="pi pi-linkedin barnner__social__linkedin"></i>
        </a>
        <a target="blank_" href="https://x.com/crispengari_">
          <i class="pi pi-twitter barnner__social__x"></i>
        </a>
        <a target="blank_" href="https://www.instagram.com/crispen_gari_/">
          <i class="pi pi-instagram barnner__social__instagram"></i>
        </a>
        <a target="blank_" href="https://github.com/CrispenGari">
          <i class="pi pi-github barnner__social__github"></i>
        </a>
        <a
          target="blank_"
          href="https://scholar.google.com/citations?user=NlqEWgUAAAAJ"
        >
          <i class="pi pi-graduation-cap barnner__social__scholar"></i>
        </a>
      </div>

      <h1>
        Hello, Welcome to Crispen Gari's site.
        <span
          >building brains from scratch using artificial neural networks
          (ann)</span
        >
      </h1>
      <p :style="{ color: color }">
        {{ displayName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DBarnner",
  props: {
    banner: Object,
  },
  computed: {
    color() {
      return this.banner ? this.banner.color : "";
    },
    displayName() {
      return this.banner ? this.banner.displayName : "";
    },
  },
};
</script>
<style lang="scss" scoped>
.barner {
  background-image: url(../../assets/ai.gif);
  background-color: #1d74b7;
  background-blend-mode: lighten;
  width: 100%;
  user-select: none !important;
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
      font-size: 1.2rem;
    }
    .barnner__social__x {
      color: white;
      cursor: pointer;
      font-size: 1.2rem;
    }
    .barnner__social__linkedin {
      color: #0073b1;
      cursor: pointer;
      font-size: 1.2rem;
    }
    .barnner__social__instagram {
      color: #dd0f26;
      cursor: pointer;
      font-size: 1.2rem;
    }
    .barnner__social__github {
      color: white;
      cursor: pointer;
      font-size: 1.2rem;
    }
    .barnner__social__scholar {
      color: #5c95f4;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
  .barner__content {
    background: rgba(0, 0, 0, 0.7);
    flex: 1;
    padding: 10px;
    display: grid;
    place-items: center;
    .banner__home {
      outline: none;
      cursor: pointer;
      text-decoration: none;
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 20px;
      font-weight: 600;
      user-select: none;
    }
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
      align-items: center;
      span {
        color: cornflowerblue !important;
        font-size: 0.7rem;
        margin-top: 20px;
        text-align: center;
      }
    }
    small {
      color: white;
      font-weight: normal;
      font-size: 12px !important;
      letter-spacing: unset;
      text-align: center !important;
      letter-spacing: 2px;
      strong {
        color: white !important;
      }
    }
    p {
      user-select: none;
      font-size: 25px;
      letter-spacing: 2px;
      animation: p-animation 1s ease-out 1s 1 alternate forwards !important;
      text-align: center;
      position: relative;
      font-weight: 700;
      left: -2000px;
    }
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

  @keyframes p-animation {
    from {
      left: -200px;
    }
    to {
      left: 0;
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
    //   display: none !important;
    // }
  }
}
</style>
