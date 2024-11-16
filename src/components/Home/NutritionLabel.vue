<template>
  <div class="nutrition-label-wrapper">
    <h1 class="head-title">{{ $t("Nutrition Facts") }}</h1>
    <hr class="mt-2" />
    <serving-per-container />
    <hr class="custom-divider" />

    <calories />

    <hr class="custom-divider thiner" />

    <div class="daily-value-wrapper text-end">
      <span>% {{ $t("Daily Value") }} *</span>
    </div>
    <hr />

    <NutrientSection
      v-for="section in nutrients"
      :key="section.section"
      :section="section"
    />

    <disclaimer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Calories from "./Calories.vue";
import Disclaimer from "./Disclaimer.vue";
import NutrientSection from "./NutrientSection.vue";
import ServingPerContainer from "./ServingPerContainer.vue";

export default {
  name: "NutritionLabel",
  components: { NutrientSection, Disclaimer, Calories, ServingPerContainer },
  computed: {
    ...mapGetters("label", ["getNutritionData"]),

    nutrients() {
      const nutrients = this.getNutritionData?.serving || {};

      const groupedNutrients = Object.values(nutrients)
        .filter((nutrient) => nutrient.enabled === 1)
        .reduce((sections, nutrient) => {
          const sectionKey = nutrient.section;
          if (!sections[sectionKey]) {
            sections[sectionKey] = [];
          }
          sections[sectionKey].push({
            ...nutrient,
            value: Math.round(nutrient.value),
            unit: nutrient.unit || "g",
            daily_value: this.getDailyValue(nutrient.name),
          });
          return sections;
        }, {});

      return Object.keys(groupedNutrients).map((sectionKey) => ({
        section: sectionKey,
        nutrients: groupedNutrients[sectionKey].sort(
          (a, b) => a.order - b.order
        ),
      }));
    },
  },
  created() {
    this.fetchNutritionData();
  },
  methods: {
    ...mapActions("label", ["fetchNutritionData"]),
    getDailyValue(nutrientName) {
      const dailyValues = this.getNutritionData?.daily_value || {};
      if (
        dailyValues[nutrientName] !== undefined &&
        dailyValues[nutrientName] !== null
      ) {
        return Math.round(dailyValues[nutrientName]);
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.nutrition-label-wrapper {
  max-width: 315px;
  margin: 10px auto;
  border: 1px solid #000;
  padding: 0.625rem;

  hr {
    border: none;
    border-top: 1px solid #000;

    &.custom-divider {
      background-color: #000;
      height: 16px;
      margin-top: 5px;

      &.thiner {
        height: 8px;
      }
    }
  }

  .head-title {
    font-size: 2.5625rem;
    font-weight: 800;
    line-height: 40px;
  }

  .daily-value-wrapper {
    font-size: 14px;
    font-weight: 900;
  }
}
</style>
