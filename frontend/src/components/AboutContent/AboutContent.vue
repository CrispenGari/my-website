<template>
  <div :class="about.id !== 1 ? 'aboutcontent' : 'aboutcontent-first'">
    <h1 :style="{ color: about.id !== 1 ? about.color : '#42b983' }">
      {{ about.title }}
      <v-icon :style="{ color: about.iconColor }">{{ about.icon }} </v-icon>
    </h1>
    <p>{{ about.content }}</p>
  </div>
</template>

<script>
export default {
  name: "About Content",
  props: {
    about: Object,
  },
};
</script>

<style lang="scss" scoped>
.aboutcontent,
.aboutcontent-first {
  width: 100%;
  max-width: 500px;
  margin: 10px;
  position: relative;
  background: white;
  transition: all 1s ease-in;
  right: -600px;
  h1 {
    padding: 10px 0;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    user-select: none;
    text-transform: uppercase;
  }
  p {
    padding: 40px 0;
  }
}
.aboutcontent-first {
  right: unset !important;
  animation: first-child-animation 1.5s ease-in 1s 1 alternate forwards;
  opacity: 0.5;
}
.aboutcontent {
  animation: navitem-child-odinary 1.5s ease-in 1s 1 alternate forwards;
}
@keyframes navitem-child-odinary {
  //
  from {
    right: -600px;
  }
  to {
    right: 0;
  }
}
@keyframes first-child-animation {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
