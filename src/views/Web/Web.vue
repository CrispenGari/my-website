<template>
  <div class="web">
    <DBarnner :banner="banner" />
    <h1>Web Development</h1>
    <div class="web__container">
      <Tech v-for="tech in web" :key="tech.id" :tech="tech" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { DBarnner, Footer, Tech } from "../../components";
import banners from "../../utils/banners";
import web from "../../utils/web";
export default {
  name: "Web",
  components: { DBarnner, Footer, Tech },
  data() {
    return {
      banner: null,
      web: web,
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
.web {
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
  .web__container {
    display: grid;
    place-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    h1 {
      align-items: center;
      border-bottom: none;
      font-family: "Source Code Pro", Consolas, "Liberation Mono", Menlo,
        Courier, monospace !important;
    }
  }
}
@media only screen and (max-width: 425px) {
  .web > h1 {
    font-size: 14px !important;
  }
}
</style>
