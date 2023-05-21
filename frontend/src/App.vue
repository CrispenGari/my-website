<template>
  <v-app>
    <v-main>
      <div class="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { baseUrl } from "./constants";

export default {
  name: "App",
  components: {},
  mounted() {
    (async () => {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      if (data?.ip) {
        const { ip } = data;
        await fetch(`${baseUrl}/api/v1/visit`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip,
          }),
          method: "POST",
        });
      }
    })();
  },
  data: () => ({
    //
  }),
};
</script>
