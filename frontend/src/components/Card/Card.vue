<script>
import image from "../../assets/images/me.jpg";
import { Code } from "../../components";
import BarView from "../../components/Bar/Bar.vue";
export default {
  name: "Card",
  data() {
    return {
      image,
    };
  },
  components: {
    Code,
    BarView,
  },
  methods: {
    navigateToAbout() {
      this.$router.push({ path: "/about" });
    },
  },
};
</script>
<template>
  <div class="card">
    <div class="card__left">
      <img
        src="/81836eff-d.jpeg"
        alt=""
        loading="lazy"
        @click="navigateToAbout"
      />
    </div>
    <div class="card__right">
      <h1 @click="navigateToAbout">Tinashe Crispen Garidzira</h1>
      <h2>
        <span>Artificial Inteligence</span>,<span> Web Development</span>,<span>
          Mobile Development</span
        >
        and <span>Desktop Development</span>
      </h2>
      <p>
        Creator of <b>initialiseur</b>, a Nodejs backend application
        initializer. A Graphql and Artificial Intelligence enthusiast. A
        software developer with {{ new Date().getFullYear() - 2019 }} + years of
        coding experience. Mainly focusing with Artificial Intelligence in
        Natural Language Processing <b>(NLP)</b>, Computer Vision
        <b>(CV)</b> and Audio Processing <b>(AP)</b>. Good with both supervised
        and unsupervised Machine Learning task for basic machine leaning task
        such as regression, classification and clustering.
      </p>
      <div>
        <img src="/robot.jpg" alt="robotic" />
        <p>
          Fascinated with humanoid robotics. I've worked with successful
          projects in Deep Leaning using modern Deep Leaning technologies. I've
          build successfully Machine Leaning/Deep Leaning APIs using the python
          programing language for both, Audio Processing, Natural Language
          processing and Computer Vision.
        </p>
      </div>
      <p>
        I'm also a huge fan of Full-Stack web, mobile and desktop development.
        I've built successful projects in the field of web development using
        modern javascript frameworks like React, Vue and Webpack. Enjoy backend
        development using <b>TypeScript/JavaScript</b>, <b>Python</b> and
        <b>Java</b> and working with ORM databases.
      </p>
      <BarView />
      <div class="codes">
        <Code />
        <Code />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 20px 50px;

  .card__left {
    img {
      width: 200px;
      height: 200px;
      overflow: hidden;
      -webkit-user-drag: none;
      user-zoom: none;
      user-select: none;
      border-radius: 200px;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .card__right {
    flex: 1;
    margin-left: 20px;
    user-select: none;
    div {
      width: 100%;
      img {
        margin: 5px auto;
        width: 200px;
        -webkit-user-drag: none !important;
        user-select: none;
      }
    }
    .codes {
      display: flex;
      align-items: flex-start;
    }
    h1 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 10px;
      cursor: pointer;
      width: fit-content;
      &:hover {
        text-decoration: underline cornflowerblue;
      }
    }
    h2 {
      span {
        color: cornflowerblue;
      }
      color: cornflowerblue;
      margin: 20px 0;
    }
    p {
      margin-top: 5px !important;
      padding: 0 !important;
      strong {
        background: #f5f5f5;
        width: fit-content;
        height: fit-content;
        font-weight: 500;
        font-size: 0.8rem;
        font-family: "Courier New", Courier, monospace;
        color: cornflowerblue;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .card {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .card__left {
      img {
        width: 200px;
        height: 200px;
        border-radius: unset !important;
        // border-radius: 50%;
      }
    }
    .card__right {
      h1 {
        text-align: center !important
        ;
        width: 100%;
      }
    }
  }
}
@media only screen and (max-width: 1000px) {
  .codes {
    flex-direction: column;
  }
}
@media only screen and (max-width: 600px) {
  .card__right {
    div {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      img {
        width: 150px;
        flex: 1;
      }
      p {
        margin-left: 10px;
        flex: 1;
      }
    }
  }
}
</style>
