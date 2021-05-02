<template>
  <div class="datascience">
    <DBarnner :banner="banner" />
    <div class="datasince__container">
      <h1>Data Science</h1>
      <div class="datasince__container__items"></div>
    </div>
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
.datasince__container {
  display: flex;
  flex-direction: column;
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
  .datasince__container__items {
    padding: 10px;
  }
}
</style>
