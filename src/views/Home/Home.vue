<template>
  <div class="home">
    <Barner />
    <h1>Technologies</h1>
    <div class="home__container">
      <NavItem v-for="tech in techs" :key="tech.id" :tech="tech" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { Barner, NavItem, Footer } from "../../components";
import techs from "../../utils";
export default {
  name: "Home",
  components: {
    Barner,
    NavItem,
    Footer,
  },
  data() {
    return {
      techs,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  h1 {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid lightgray;
    text-align: center;
    letter-spacing: 2px;
    font-size: 20px;
    text-transform: uppercase;
    user-select: none;
  }
  .home__container {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-evenly;
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
      color: #24292e;
      cursor: pointer;
      font-size: 30px;
    }
  }
}
</style>
