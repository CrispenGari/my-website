<template>
  <div class="tech">
    <h1>{{ tech.name }}</h1>
    <p>
      Natural language processing (NLP) is a subfield of linguistics, computer
      science, and artificial intelligence concerned with the interactions
      between computers and human language, in particular how to program
      computers to process and analyze large amounts of natural language data.
    </p>
    <p>
      Building NLP applications using different technologies such as TextBlob,
      Spacy, NLTK, etc.
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
}
@keyframes tech-animation {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
