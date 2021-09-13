<template>
  <div class="bar">
    <h1>mostly used programing langauges</h1>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "Bar",
  mounted() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.rect(25, 30, 20, 170);
    ctx.fillStyle = "orage";
    ctx.rect(50, 30, 20, 170);
    ctx.fillStyle = "orage";
    ctx.rect(75, 30, 20, 170);
    ctx.fillStyle = "orage";
    ctx.rect(100, 30, 20, 170);
    ctx.fillStyle = "orange";
    ctx.fill();
  },
};
</script>

<style scoped lang="scss">
.bar {
  padding: 20px;
  display: none;
  #canvas {
    background-color: #f5f5f5;
    width: 100%;
    max-height: 200px;
    padding: 10px;
    border-radius: 5px;
    max-width: 500px;
    margin: 0px auto;
  }
}
</style>
