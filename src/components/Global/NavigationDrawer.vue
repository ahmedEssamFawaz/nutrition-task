<template>
  <div>
    <v-navigation-drawer
      absolute
      permanent
      :right="!$vuetify.rtl"
      :left="$vuetify.rtl"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{
              $t("Nutrient Selection")
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="nutrient in getNutritionData.serving"
          :key="nutrient.id"
        >
          <v-list-item-content class="pa-0">
            <div class="d-flex justify-space-between align-center">
              <div>
                {{ getNutrientName(nutrient) }}
              </div>
              <div>
                <v-checkbox
                  :true-value="1"
                  :false-value="0"
                  v-model="nutrient.enabled"
                ></v-checkbox>
              </div>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",

  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },
  computed: {
    ...mapGetters("label", ["getNutritionData"]),
    getNutrientName() {
      return (nutrient) => {
        if (this.$i18n.locale === "ar") {
          return nutrient.name_ar;
        }
        return nutrient.name;
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
