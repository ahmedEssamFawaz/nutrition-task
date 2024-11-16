<template>
  <v-app>
    <navigation-drawer />

    <language-toggler />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/Global/NavigationDrawer.vue";
import LanguageToggler from "@/components/Global/LanguageToggler.vue";
export default {
  components: { NavigationDrawer, LanguageToggler },
  name: "App",
};
</script>
