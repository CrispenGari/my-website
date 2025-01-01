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
        <span>Researcher</span>, <span>Artificial Intelligence</span>,<span>
          Web Development</span
        >,<span> Mobile Development</span> and <span>Desktop Development</span>
      </h2>
      <p>
        Tinashe Crispen Garidzira, aka Crispen Gari, is a software developer and
        AI researcher specializing in machine learning and deep learning. He is
        the creator of <b>dataloom.py</b> and <b>helperfns</b>, tools designed
        for developers and Software Developers and AI practitioners. With
        {{ new Date().getFullYear() - 2019 }}+ years of coding experience, he
        focuses on Artificial Intelligence in Natural Language Processing
        (<b>NLP</b>), Computer Vision (<b>CV</b>), and Audio Processing
        (<b>AP</b>). Tinashe has published significant work in the fields of
        deep learning and software development. He enjoys working with React
        Native, React.js, and TypeScript, building frameworks, and tutoring
        students online. His technical expertise includes Python,
        TypeScript/JavaScript, C++, and Java. A fan of PyTorch and Expo, he
        excels in supervised tasks like classification and regression, as well
        as unsupervised and semi-supervised machine learning. He also leverages
        datasets from Kaggle and Hugging Face to develop innovative machine
        learning models.
      </p>
      <div>
        <img src="/robot.jpg" alt="robotic" />
        <p>
          Fascinated by humanoid robotics, I have successfully worked on
          projects leveraging modern deep learning technologies. I have built
          robust machine learning and deep learning APIs using Python for
          applications in audio processing, natural language processing, and
          computer vision.
        </p>
      </div>
      <p>
        I am a passionate Full-Stack developer with expertise in web, mobile,
        and desktop development. I have successfully built projects using modern
        JavaScript frameworks like React, Vue, and Webpack. I enjoy backend
        development with <b>TypeScript/JavaScript</b>, <b>Python</b>, and
        <b>Java</b>, as well as working with ORM databases. Additionally, I
        created an Object Relational Mapping (ORM) library for Python called
        <b>dataloom</b>.
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
