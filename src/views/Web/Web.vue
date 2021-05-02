<template>
  <div class="web">
    <DBarnner :banner="banner" />
    <h1>Web Development</h1>
    <div class="web__container"></div>
    <Footer />
  </div>
</template>

<script>
import { DBarnner, Footer } from "../../components";
import banners from "../../utils/banners";
export default {
  name: "Web",
  components: { DBarnner, Footer },
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
    display: flex;
    flex-direction: column;
    .web__container__items {
      padding: 10px;
    }
  }
}
@media only screen and (max-width: 425px) {
  .web > h1 {
    font-size: 14px !important;
  }
}
</style>
