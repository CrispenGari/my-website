<template>
  <div class="datascience">
    <DBarnner :banner="banner" />
    <h1>Data Science</h1>
    <div class="datasience__container">
      <Tech
        v-for="tech in datascience.filter(
          (tech) => tech.category === 'library'
        )"
        :key="tech.id"
        :tech="tech"
      />
    </div>
    <h1>Applications</h1>
    <div class="datasience__container">
      <Tech
        v-for="tech in datascience.filter(
          (tech) => tech.category !== 'library'
        )"
        :key="tech.id"
        :tech="tech"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import { DBarnner, Footer, Tech } from "../../components";
import banners from "../../utils/banners";
import datascience from "../../utils/datascience";
export default {
  name: "DataScience",
  data() {
    return {
      banner: null,
      datascience: datascience,
    };
  },
  components: {
    DBarnner,
    Footer,
    Tech,
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
  .datasience__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
