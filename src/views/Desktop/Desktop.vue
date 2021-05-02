<template>
  <div class="desktop">
    <DBarnner :banner="banner" />
    <h1>Desktop Development</h1>
    <div class="desktop__container"></div>
    <Footer />
  </div>
</template>

<script>
import { DBarnner, Footer } from "../../components";
import banners from "../../utils/banners";
export default {
  name: "Desktop",
  components: {
    DBarnner,
    Footer,
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
.desktop {
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
  .desktop__container {
    display: flex;
  }
}
@media only screen and (max-width: 425px) {
  .desktop > h1 {
    font-size: 14px !important;
  }
}
</style>
