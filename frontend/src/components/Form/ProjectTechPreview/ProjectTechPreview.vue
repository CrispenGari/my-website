<template>
  <div class="project__tech__preview">
    <h1>
      Tech Preview
    </h1>
    <h2>{{ techTitle }}</h2>
    <p>
      {{ techTheory }}
    </p>
    <h2>Image Preview</h2>
  </div>
</template>

<script>
export default {
  name: "ProjectTechPreview",
  props: {
    techTheory: String,
    techTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.project__tech__preview {
  margin: 10px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    font-weight: 500;
    color: #0074e8;
    text-transform: uppercase;
    margin-bottom: 10px;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding: 10px 0;
    text-align: center;
  }
  h2 {
    color: #0074e8;
    margin-bottom: 10px;
  }
}
.project__tech__preview > p:first-of-type::first-letter {
  color: #1faac7 !important;
  float: left;
  font-size: 5em;
  line-height: 0.5em;
  padding-bottom: 0.05em;
  padding-top: 0.2em;
}
.project__tech__preview > h2:first-of-type {
  color: #3e3e3e;
}
</style>
