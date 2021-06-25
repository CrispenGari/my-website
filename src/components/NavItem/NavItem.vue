<template>
  <div class="naviterm">
    <router-link
      :to="tech.path"
      class="naviterm__link"
      :style="{ color: tech.color }"
    >
      {{ tech.name }}

      <v-icon :style="{ color: tech.iconColor }">
        {{ tech.icon }}
      </v-icon>
    </router-link>
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
  </div>
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
  margin: 10px;
  position: relative;
  text-decoration: none !important;
  user-select: none;
  user-zoom: none;
  .naviterm__link {
    padding: 10px 0;
    cursor: pointer;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    user-select: none;
    text-decoration: none;
    font-weight: 500;
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
  right: -600px;
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
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
