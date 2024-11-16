<template>
  <v-app>
    <navigation-drawer />
    <div>
      <v-btn @click="changeLanguage" text>{{ getLanguageText }}</v-btn>
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/Global/NavigationDrawer.vue";
export default {
  components: { NavigationDrawer },
  name: "App",
  computed: {
    getLanguageText() {
      if (this.$i18n.locale == "en") {
        return "العربية";
      }
      return "English";
    },
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "ar";
        this.$vuetify.rtl = true;
        return;
      }
      this.$i18n.locale = "en";
      this.$vuetify.rtl = false;
    },
  },
};
</script>
