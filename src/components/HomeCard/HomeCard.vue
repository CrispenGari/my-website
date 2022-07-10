<template>
  <div class="home__card">
    <img :src="data.imgURL" alt="home-card" />
    <h1>{{ data.title }}</h1>
    <p>{{ data.description }}</p>
    <div class="home__card__prices">
      <h3 v-if="data.previousPrice">R {{ data.previousPrice }} p/w</h3>
      <h2 v-if="data.currentPrice">R {{ data.currentPrice }} p/w</h2>
    </div>

    <button
      @click="navigateToEmail"
      :class="
        data.btnTitle.toLowerCase() == 'request'
          ? 'home__card__btn'
          : 'home__card__btn--primary'
      "
    >
      {{ data.btnTitle }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    navigateToEmail() {
      const prop = `${
        this.data.btnTitle.toLowerCase() == "request"
          ? "TUTORSHIP"
          : "PROJECT PROPOSAL"
      } - ${this.data.title}`.replace(/\s/g, "%20");
      this.$router.push(`email/${prop}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.home__card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  user-select: none;
  margin: 10px;
  cursor: pointer;
  transition: all 1s;
  .home__card__prices {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    h2 {
      font-size: 1rem !important;
    }
    h3 {
      text-decoration: line-through red;
      color: gray;
      font-size: 0.7rem !important
    ;
    }
  }

  button {
    color: white;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid transparent;
    background: cornflowerblue;
    transition: all 1s;
    &:hover {
      background: #42b983;
    }
  }
  button.home__card__btn--primary {
    background: #42b983;
    &:hover {
      background: cornflowerblue;
    }
  }
  img {
    width: 100%;
    -webkit-user-drag: none;
    height: 130px;
    object-fit: cover;
  }
  h1 {
    border: unset;
    padding: unset;
    text-align: unset;
    margin: 3px 0;
    text-transform: unset;
  }
  p {
    color: gray;
  }
}
</style>
