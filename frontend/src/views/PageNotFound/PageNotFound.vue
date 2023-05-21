<template>
  <div class="page__not__found">
    <img src="/robot.jpg" alt="logo" />
    <router-link to="/about" class="page__not__found__name"
      >Tinashe Crispen Garidzira</router-link
    >
    <h1>
      <span>4</span>
      <span>0</span>
      <span>4</span>
    </h1>
    <p>Page Not Found.</p>

    <div className="not__found__links">
      <router-link to="/home">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.page__not__found {
  user-select: none;
  user-zoom: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .page__not__found__name {
    margin: 20px 0;
    color: #42b983;
    font-weight: 700;
  }
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    user-zoom: none;
    -webkit-user-drag: none;
    margin-bottom: 10px;
  }
  h1 {
    span {
      font-size: 3rem !important;
    }
    span:last-of-type {
      color: #42b983;
    }
    span:nth-child(2) {
      top: -50px;
      position: relative;
      color: cornflowerblue;
      animation: bounce 1s ease 0s infinite alternate forwards;
    }
  }
  a {
    margin: 0px 10px;
    cursor: pointer;
    font-size: 1rem;
  }
}
@keyframes bounce {
  from {
    top: -50px;
  }
  to {
    top: 0;
  }
}

@media only screen and (max-width: 600px) {
  .page__not__found {
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
