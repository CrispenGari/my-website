<template>
  <div class="cookie__policy">
    <p>
      Privacy & Cookies: This site uses cookies. By continuing to use this
      website, you agree to their use. To find out more, including how to
      control cookies, see here:
      <a href="https://automattic.com/cookies/"> Cookie Policy </a>
    </p>
    <button @click="acceptCookiesAndClose()">Close and accept</button>
  </div>
</template>

<script>
export default {
  methods: {
    acceptCookiesAndClose() {
      this.$store.commit("acceptCookies");
    },
  },
};
</script>

<style scoped lang="scss">
.cookie__policy {
  position: sticky;

  bottom: 20px;
  background: white;
  z-index: 10px;
  margin: 0 20px;
  padding: 10px;
  border: 1px solid cornflowerblue;
  border-radius: 5px;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  display: none;
  p {
    flex: 1;
  }
  button {
    background: cornflowerblue;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: white;
    transition: all 1s;
    margin-left: 5px;
    &:hover {
      background: #42b983;
    }
  }
}
@media only screen and (max-width: 725px) {
  .cookie__policy {
    margin: unset !important;
    border-radius: unset;
    p {
      font-size: 0.8rem !important;
    }
    button {
      font-size: 0.8rem !important;
    }
  }
}
</style>
