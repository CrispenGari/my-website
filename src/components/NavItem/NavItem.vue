<template>
  <router-link :to="tech.path" class="naviterm">
    <h1 :style="{ color: tech.color }">
      {{ tech.name }}

      <v-icon :style="{ color: tech.iconColor }">
        {{ tech.icon }}
      </v-icon>
    </h1>
    <p>
      {{ tech.explanation }}
    </p>
    <div class="navitems__langs">
      <v-icon
        v-for="(lang, i) in tech.languages"
        :key="i"
        :style="{ color: lang.color, marginRight: '10px' }"
      >
        {{ lang.icon }}
      </v-icon>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    tech: Object,
  },
};
</script>

<style lang="scss" scoped>
.naviterm {
  width: 100%;
  padding: 10px;
  max-width: 500px;
  border: 1px solid lightgrey;
  margin: 10px;
  position: relative;
  cursor: pointer;
  text-decoration: none !important;
  h1 {
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    user-select: none;
  }
  p {
    padding-top: 40px;
  }

  transition: all 2s ease;
  background: white;
}
.naviterm:nth-child(odd) {
  animation: navitem-odd-child 2s ease-in 1s 1 alternate forwards;
}
.naviterm:nth-child(even) {
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
.naviterm:hover {
  transform: scale(1.04) rotateY(180deg);
  background: black;
}
.naviterm:hover > h1,
.naviterm:hover > p,
.naviterm:hover > .navitems__langs {
  transform: rotateY(180deg);
  color: white;
}
</style>
