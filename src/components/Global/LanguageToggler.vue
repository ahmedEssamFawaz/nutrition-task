<template>
  <div>
    <v-btn @click="changeLanguage" text
      >{{ getLanguageText }}
      <v-icon small class="ps-1">mdi-web</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped></style>
