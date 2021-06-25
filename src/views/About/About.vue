<template>
  <div class="about">
    <Header />
    <DBarnner :banner="banner" />
    <h1>About Me</h1>
    <div class="about__container">
      <AboutContent
        v-for="about in abouts.filter((ab) => ab.id === 1)"
        :key="about.id"
        :about="about"
      />
      <div class="about__container__right">
        <AboutContent
          v-for="about in abouts.filter((ab) => ab.id !== 1)"
          :key="about.id"
          :about="about"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { DBarnner, Footer, AboutContent, Header } from "../../components";
import banners from "../../utils/banners";
import abouts from "../../utils/about";
export default {
  name: "About",
  components: {
    DBarnner,
    Header,
    Footer,
    AboutContent,
  },
  data() {
    return {
      banner: null,
      abouts: abouts,
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
.about {
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

  .about__container {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    flex-wrap: wrap;
  }
  .about__container__right {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 425px) {
  .about > h1 {
    font-size: 15px !important;
  }
}
</style>
