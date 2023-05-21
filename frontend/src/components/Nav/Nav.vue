<template>
  <div class="nav">
    <v-icon class="nav__icon">
      mdi-menu-open
    </v-icon>
  </div>
</template>

<script>
export default { name: "Nav" };
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  z-index: 20;
  top: 20%;
  left: 10px;
  cursor: pointer;
  color: white;
  .nav__icon {
    color: white;
    font-size: 30px;
    position: relative;
    animation: nav-animanition-barger 2s ease-out 2s infinite alternate-reverse;
  }
}
@keyframes nav-animanition-barger {
  0% {
    left: 0;
  }
  100% {
    left: 40px;
  }
}
</style>
