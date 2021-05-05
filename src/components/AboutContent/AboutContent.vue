<template>
  <div class="aboutcontent">
    <h1 :style="{ color: about.color }">
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
.aboutcontent {
  width: 100%;
  max-width: 500px;
  border: 1px solid lightgrey;
  margin: 10px;
  position: relative;
  cursor: pointer;
  background: white;
  transition: all 1s ease-in;
  h1 {
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    user-select: none;
    text-transform: uppercase;
  }
  p {
    padding: 40px 10px 10px 10px;
  }
}
.aboutcontent:nth-child(odd) {
  animation: navitem-odd-child 2s ease-in 1s 1 alternate forwards;
}
.aboutcontent:nth-child(even) {
  animation: navitem-even-child 2s ease-in 1s 1 alternate forwards;
}
@keyframes navitem-even-child {
  from {
    right: -600px;
  }
  to {
    right: 0;
  }
}
@keyframes navitem-odd-child {
  from {
    left: -600px;
  }
  to {
    left: 0;
  }
}
.aboutcontent:hover {
  transform: scale(1.04) rotateY(180deg);
  background: black;
}
.aboutcontent:hover > h1,
.aboutcontent:hover > p,
.aboutcontent:hover > .navitems__langs {
  transform: rotateY(180deg);
  color: white;
}
</style>
