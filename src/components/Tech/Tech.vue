<template>
  <div class="tech">
    <h1>{{ tech.name }}</h1>
    <p>
      {{ tech.definition }}
    </p>
    <div class="tech__image" v-if="tech.image">
      <img :src="tech.image" alt="tech-barner" loading="lazy" />
    </div>

    <p>
      {{ tech.usage }}
    </p>
    <p>
      <v-icon
        v-for="(lang, i) in tech.languages"
        :key="i"
        :style="{ color: '#0073b1', margin: '10px' }"
      >
        {{ `mdi-language-${lang}` }}
      </v-icon>
    </p>
  </div>
</template>

<script>
export default { name: "Tech", props: { tech: Object } };
</script>

<style lang="scss" scoped>
.tech {
  width: 100%;
  max-width: 500px;
  margin: 10px;
  h1 {
    font-size: 16px;
    letter-spacing: 2px;
    opacity: 0.5;
    animation: tech-animation 2s ease-in 1s 1 alternate forwards;
    user-select: none;
  }
  p {
    animation: tech-animation 2s ease-in 1s 1 alternate forwards;
    opacity: 0.5;
    user-select: none;
  }
  .tech__image {
    position: relative !important;

    img {
      width: 100%;
      border-radius: 5px;
      -webkit-user-drag: none;
    }
  }
}
@keyframes tech-animation {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
p:first-of-type::first-letter {
  color: #1faac7 !important;
  float: left;
  font-size: 5em;
  line-height: 0.5em;
  padding-bottom: 0.05em;
  padding-top: 0.2em;
}
</style>
