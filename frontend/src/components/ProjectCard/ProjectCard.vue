<template>
  <div class="project__card">
    <h1>{{ project.name }} ({{ project?.year }})</h1>
    <img :src="project.cover" :alt="project.name" loading="lazy" />
    <p class="project__card__type">
      {{ project.projectType }}
    </p>
    <p>{{ project.description }}</p>

    <span @click="setReadMore()">{{
      readMore ? "READ LESS" : "READ MORE"
    }}</span>
    <p v-if="readMore" class="project__card__long_desc">
      {{ project.longDescription }}
    </p>
    <div class="project__card__languages">
      <span v-for="lang of project.languages" :key="lang">
        <v-icon
          :style="{
            color: '#0073b1',
            marginRight: '3px',
            fontSize: 5,
            width: 5,
          }"
        >
          {{ `mdi-language-${lang.toLowerCase()}` }}
        </v-icon>
        <small>{{ lang }}</small>
      </span>
    </div>
    <div class="project__card__bottom">
      <a :href="project.url">
        <v-icon class="project__card__icon"> mdi-github </v-icon>
        Open on Github
      </a>
      <p>{{ project?.year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      readMore: false,
    };
  },
  methods: {
    setReadMore() {
      this.readMore = !this.readMore;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.project__card {
  width: 100%;
  max-width: 400px;
  height: fit-content;
  margin: 10px;
  display: flex;
  flex-direction: column;
  user-select: none;
  user-zoom: none;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  cursor: pointer;
  .project__card__long_desc {
    transition: all 1s;
  }
  p {
    padding: unset !important;
    margin: unset !important;
  }
  span {
    color: #0073b1 !important;
    cursor: pointer;
    margin: 5px 0;
    transition: all 1s;
  }
  .project__card__languages {
    margin-bottom: 5px;
    padding: 0;
    display: flex;
    span {
      color: lightgray;
      padding: 0;
      margin: 0;
      margin-right: 5px;
      small {
        padding: 0;
        margin: 0;
      }
    }
  }
  h1 {
    color: #0073b1;
    font-size: 1rem;
    margin-bottom: 5px;
  }
  img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    align-self: center;
    margin: 5px auto;
    -webkit-user-drag: none;
  }
  .project__card__bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
      color: #42b983;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 1px;
      text-decoration: underline;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      .project__card__icon {
        margin-right: 5px;
      }
    }
  }

  .project__card__type {
    color: #42b983;
    font-weight: 500;
    text-transform: uppercase;
    margin: 5px 0;
  }
}
</style>
