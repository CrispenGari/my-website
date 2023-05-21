<template>
  <div class="prompt">
    <p>
      "Building <span>brains</span> from scratch using <span>Artificial</span>
      <span>Neural</span> <span>Networks.</span>"
    </p>
  </div>
</template>

<script>
export default {
  name: "Prompt",
};
</script>

<style scoped lang="scss">
.prompt {
  width: "100%";
  z-index: 10;
  background-color: white;
  padding: 20px;
  justify-content: center;
  display: flex;
  user-select: none;
  max-width: 700px;
  margin: 0 auto;
  p {
    font-size: 1rem;
    font-weight: 500;
    align-items: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    flex-wrap: wrap;
    span {
      color: royalblue;
      width: fit-content;
      height: fit-content;
      margin: 0 5px;
      padding: 0 5px;
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 5px;
      background-color: #f5f5f5;
      font-family: "Courier New", Courier, monospace;
    }
  }
}
</style>
