<template>
  <div>
    <v-navigation-drawer absolute permanent right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Nutrient Selection</v-list-item-title>
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
                {{ nutrient.name }}
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
  },
};
</script>

<style lang="scss" scoped></style>
