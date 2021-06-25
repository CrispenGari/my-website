<template>
  <div class="projects">
    <Header />
    <DBarnner :banner="banner" />
    <h1>Projects</h1>
    <div class="projects__container">
      <h1>No Techs Provided Yet</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import { DBarnner, Footer, Header } from "../../components";
import banners from "../../utils/banners";
export default {
  name: "Projects",
  components: {
    DBarnner,
    Footer,
    Header,
  },
  data() {
    return {
      banner: null,
    };
  },
  mounted() {
    this.banner = banners.filter(
      (banner) =>
        String(this.$router.currentRoute.path).split("/")[1] === banner.name
    )[0];
  },
};
</script>

<style lang="scss" scoped>
.projects {
  h1 {
    width: 100%;
    border-bottom: 1px solid lightgrey;
    font-size: 20px;
    letter-spacing: 2px;
    user-select: none;
    text-align: center;
    padding: 10px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .projects__container {
    display: grid;
    place-items: center;
    height: 40vh;
    h1 {
      align-items: center;
      border-bottom: none;
      font-family: "Source Code Pro", Consolas, "Liberation Mono", Menlo,
        Courier, monospace !important;
    }
  }
}
@media only screen and (max-width: 425px) {
  .projects > h1 {
    font-size: 14px !important;
  }
}
</style>
