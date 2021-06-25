<template>
  <div class="project__preview">
    <h1>
      {{ projectName }}
    </h1>
    <h2>Description</h2>
    <p>
      {{ projectDescription }}
    </p>
    <h2>Summary</h2>
    <p>
      {{ projectSummary }}
    </p>
    <h2>Techs</h2>
    <p v-if="techsUsed">
      <span v-for="(tech, index) of techsUsed" :key="index">{{ tech }}</span>
    </p>

    <h2 v-if="languagesUsed">Languages</h2>
    <p v-if="languagesUsed">
      <span v-for="(lang, index) in languagesUsed" :key="index">{{
        lang
      }}</span>
    </p>
    <h2>Git Repository</h2>
    <input
      v-model.trim="projectGitHubRepo"
      type="text"
      placeholder="GitHub Repository URL"
    />
    <h2>Image Preview</h2>
  </div>
</template>
<script>
export default {
  name: "ProjectPreview",
  props: {
    projectName: String,
    projectSummary: String,
    projectDescription: String,
    projectGitHubRepo: String,
    languagesUsed: Array,
    techsUsed: Array,
  },
};
</script>

<style lang="scss" scoped>
.project__preview {
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
  }
  h2 {
    color: #0074e8;
    margin-bottom: 10px;
  }
  input {
    margin-bottom: 20px;
    background: #3e3e3e;
    color: white;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    border: none;
  }
  p {
    span {
      width: fit-content;
      padding: 2px 20px;
      background: #3e3e3e;
      color: white;
      border-radius: 999px;
      margin-right: 5px;
      cursor: pointer;
      font-size: 13px;
    }
  }
}
</style>
