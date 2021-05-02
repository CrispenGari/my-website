<template>
  <div class="datascience">
    <DBarnner :banner="banner" />
    <h1>Data Science</h1>
    <div class="datasince__container"></div>
    <Footer />
  </div>
</template>

<script>
import { DBarnner, Footer } from "../../components";
import banners from "../../utils/banners";
export default {
  name: "DataScience",
  data() {
    return {
      banner: null,
    };
  },
  components: {
    DBarnner,
    Footer,
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
.datascience {
  .datascience__container {
    display: flex;
  }
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
}
@media only screen and (max-width: 425px) {
  .datascience > h1 {
    font-size: 14px !important;
  }
}
</style>
