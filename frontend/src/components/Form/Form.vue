<template>
  <form class="form">
    <ProjectForm v-show="true" />
    <ProjectTech />
  </form>
</template>

<script>
import ProjectForm from "./ProjectForm/ProjectForm.vue";
import ProjectTech from "./ProjectTech/ProjectTech.vue";
export default {
  name: "Form",
  components: {
    ProjectForm,
    ProjectTech,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
