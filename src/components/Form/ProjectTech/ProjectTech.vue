<template>
  <form class="project__tech">
    <h1>Post a New Tech</h1>
    <div class="project__tech__input">
      <label for="project-input">Tech Title<span>*</span></label>
      <input
        type="text"
        id="project-input"
        placeholder="Tech title"
        v-model.trim.lazy="techTitle"
      />
      <small>
        <strong>Help:</strong>
        e.g Webpack
      </small>
    </div>
    <div class="project__tech__input">
      <label for="project-input">Tech theory<span>*</span></label>
      <textarea
        type="text"
        id="project-input"
        placeholder="Tech theory"
        v-model.trim.lazy="techTheory"
      ></textarea>
      <small>
        <strong>Help:</strong>
        Describe a tech in theory. Paragraphs are surperated by new lines.
      </small>
    </div>

    <div class="project__tech__input__preview">
      <label>Project Image Preview<span>?</span></label>
      <label class="project__image__preview__drag" for="image-preview">
        <input
          type="file"
          accept="images/*"
          id="image-preview"
          placeholder="Project GitHub URL"
          hidden
        />
        <p>
          Drag and drop a file here. Or click to select.
        </p>
      </label>
    </div>
    <button type="submit">
      Publish
    </button>
    <ProjectTechPreview :techTitle="techTitle" :techTheory="techTheory" />
  </form>
</template>

<script>
import ProjectTechPreview from "../ProjectTechPreview/ProjectTechPreview";
export default {
  name: "ProjectTech",
  components: {
    ProjectTechPreview,
  },
  data() {
    return {
      techTheory: "",
      techTitle: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.project__tech {
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
  .project__tech__input {
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
    }
    textarea {
      height: 300px !important;
      resize: none;
    }
  }
  .project__tech__input__preview {
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
}
form button:hover {
  background-image: linear-gradient(to right, #0074e8, green);
}
</style>
