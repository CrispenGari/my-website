<script>
import image from "../../assets/images/me.jpg";
export default {
  name: "Card",
  data() {
    return {
      image,
    };
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
      <img :src="image" alt="" loading="lazy" @click="navigateToAbout" />
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
        Interested in Open Computer Vision and Natural Language Processing. Also
        a huge fan of Web Development with popular web frameworks such as React,
        Vue and Webpack. I'm currently working with <strong>TensorFlow</strong>,
        <strong>Pytorch</strong> and <strong>React Native</strong>. On my spair
        time especially weekend I contribute to my social application
        <strong>Likeme</strong>.
      </p>
      <p>
        My goal is that by the end of <strong>2021</strong> I will be more
        focusing on concurrent programing with <strong>Elixir</strong> and build
        my own web framework using <strong>Webpack</strong>,
        <strong>Babel</strong> and <strong>TypeScript</strong>
      </p>
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
    .card__left {
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  }
}
</style>
