<template>
  <div class="code">
    console.log("Hello, world")
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.code {
  padding: 20px;
  width: 100%;
  max-width: 500px;
  background-color: #1d1f21;
  border-radius: 5px;
  display: none;
}

.code:first-of-type {
  margin-right: 5px;
}
@media only screen and (max-width: 1000px) {
  .code:first-of-type {
    margin-right: unset;
    margin-bottom: 5px;
  }
}
</style>
