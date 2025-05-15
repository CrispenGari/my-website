<template>
  <form class="project__form" @submit.prevent="createProject">
    <h1>CREATE A NEW PROJECT</h1>
    <div class="project__form__input">
      <label for="project-input">Project Name<span>*</span></label>
      <input
        type="text"
        id="project-input"
        placeholder="Project name"
        v-model.trim.lazy="projectName"
      />
      <small>
        <strong>Help:</strong>
        e.g myAwesomeProject
      </small>
    </div>
    <div class="project__form__input">
      <label for="project-input">Project Description<span>*</span></label>
      <input
        type="text"
        id="project-input"
        placeholder="Project description"
        v-model.trim.lazy="projectDescription"
      />
      <small>
        <strong>Help:</strong>
        A single line describing your project.
      </small>
    </div>

    <div class="project__form__input">
      <label for="project-input">Project Summary<span>*</span></label>
      <textarea
        type="text"
        id="project-input"
        placeholder="Project summary"
        v-model.trim.lazy="projectSummary"
      ></textarea>
      <small>
        <strong>Help:</strong>
        Describe your project in summary. Paragraphs are separated by new lines.
      </small>
    </div>
    <div class="project__form__input">
      <label for="project-input">Project Techs<span>*</span></label>
      <input
        v-model.trim.lazy="projectTechs"
        type="text"
        id="project-input"
        placeholder="Project techs used"
      />
      <small>
        <strong>Help:</strong>
        Enter techs used separated by a single space.
      </small>
    </div>
    <div class="project__form__input">
      <label for="project-input">Project Languages<span>*</span></label>
      <input
        v-model.trim.lazy="projectLanguages"
        type="text"
        id="project-input"
        placeholder="Project languages used"
      />
      <small>
        <strong>Help:</strong>
        Enter languages used separated by a single space.
      </small>
    </div>
    <div class="project__form__input">
      <label for="project-input">Project GitHub<span>*</span></label>
      <input
        v-model.trim.lazy="projectGitHubRepo"
        type="text"
        id="project-input"
        placeholder="Project GitHub URL"
      />
      <small>
        <strong>Help:</strong>
        Link to the code on GitHub
      </small>
    </div>

    <div class="project__form__input__preview">
      <label>Project Image Preview<span>*</span></label>
      <label class="project__image__preview__drag" for="image-preview">
        <input
          type="file"
          accept="images/*"
          id="image-preview"
          placeholder="Project GitHub URL"
          hidden
        />
        <p>Drag and drop a file here. Or click to select.</p>
      </label>
    </div>
    <button type="submit">Publish</button>
    <ProjectPreviewVue
      :projectSummary="projectSummary"
      :projectName="projectName"
      :projectDescription="projectDescription"
      :projectGitHubRepo="projectGitHubRepo"
      :languagesUsed="languagesUsed"
      :techsUsed="techsUsed"
    />
  </form>
</template>

<script>
import ProjectPreviewVue from "../ProjectPreview/ProjectPreview.vue";
export default {
  name: "ProjectForm",
  components: {
    ProjectPreviewVue,
  },
  data() {
    return {
      projectName: "",
      projectLanguages: "",
      projectTechs: "",
      projectSummary: "",
      projectDescription: "",
      projectGitHubRepo: "",
    };
  },
  computed: {
    languagesUsed() {
      return this.projectLanguages.split(/\s/);
    },
    techsUsed() {
      return this.projectTechs.split(/\s/);
    },
  },
  methods: {
    createProject() {},
  },
};
</script>

<style lang="scss" scoped>
.project__form {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
  user-select: none;
  h1 {
    width: 100%;
    text-align: center;
    background: white;
    border-bottom: 1px solid lightgrey;
    padding: 10px;
    position: sticky;
    top: 0;
    font-size: 16px;
  }
  button {
    cursor: pointer;
    background: #1faac7;
    color: white;
    margin: 10px auto;
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    font-size: 16px;
    font-weight: 400;
    outline: none;
  }
  .project__form__input {
    display: flex;
    flex-direction: column;
    label {
      margin: 10px 0;
      font-size: 15px;
      font-weight: 400px;
      span {
        color: red;
        font-weight: bold;
        margin-left: 5px;
      }
    }
    small {
      color: #1faac7;
      strong {
        font-size: small;
        color: #0074e8;
      }
    }
    input,
    textarea {
      background: #3e3e3e;
      padding: 10px;
      outline: none;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      //   flex: 1;
    }
    textarea {
      height: 300px !important;
      resize: none;
    }
  }
  .project__form__input__preview {
    margin: 20px 0;
    label {
      margin: 10px 0;
      font-size: 15px;
      font-weight: 400px;
      span {
        color: red;
        margin-left: 2px;
        font-weight: bold;
      }
    }
    .project__image__preview__drag {
      display: flex;
      flex-direction: column;
      border: 2px dashed #0074e8;
      border-radius: 5px;
      height: 300px;
      width: 100%;
      display: grid;
      place-items: center;
      user-zoom: none;
      user-select: none;
      cursor: pointer;
    }
  }
}
.project__image__preview__drag {
  border-right-color: green;
}
form button:hover {
  background-image: linear-gradient(to right, #0074e8, green);
}
</style>
