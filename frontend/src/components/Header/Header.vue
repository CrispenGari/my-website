<template>
  <div class="header">
    <div class="header__content__navs">
      <router-link
        active-class="header__nav__active"
        to="/home"
        class="header__nav"
      >
        Home
      </router-link>
    </div>
    <div class="header__navs__left">
      <router-link
        active-class="header__nav__active"
        to="/about"
        class="header__nav"
      >
        About
      </router-link>
      <router-link
        active-class="header__nav__active"
        to="/projects"
        class="header__nav"
      >
        Projects
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header__nav__active {
  color: #42b983 !important;
}
.header {
  user-select: none;
  display: flex;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  border-bottom: 1px solid lightgrey;
  justify-content: space-between;
  .header__content__navs {
    outline: none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      margin-right: 10px;
    }
    .header__nav {
      white-space: nowrap;
    }
  }
  .header__navs__left {
    .header__nav {
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      margin-right: 10px;
    }
  }
}
.header__navs__left > .header__nav:last-of-type {
  color: black;
}
@media only screen and (max-width: 600px) {
  .header__nav {
    font-size: 13px !important;
  }
  .header {
    padding: 10px;
  }
  .header__content__navs > .header__nav {
    display: none !important;
  }
  .header__content__navs > .header__nav:last-of-type,
  .header__content__navs > .header__nav:nth-last-of-type(2) {
    display: flex !important;
  }
}

@media only screen and (max-width: 1000px) {
  .header__nav {
    font-size: 15px !important;
  }
  .header {
    padding: 20px 10px;
  }
}
</style>
