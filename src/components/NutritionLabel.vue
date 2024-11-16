<template>
  <div class="nutrition-label-wrapper">
    <h1 class="head-title">{{ $t("Nutrition Facts") }}</h1>
    <hr />
    <div class="serving-info-wrapper mb-2">
      <div class="serving-per-container">
        {{ servingPerContainer }} {{ $t("Serving Per Container") }}
      </div>
      <div class="serving-size">
        <span class="serving-size-title">{{ $t("Serving Size") }}</span>
        <span class="serving-size-value"
          >{{ servingSize }}{{ $t("gram") }}</span
        >
      </div>
    </div>
    <hr class="custom-divider" />

    <div
      class="calories-wrapper d-flex justify-space-between align-end mt-2 mb-3"
    >
      <div class="info-section d-flex flex-column">
        <span class="info-section-amount-title">
          {{ $t("Amount Per Serving") }}
        </span>
        <span class="info-section-calories-title"> {{ $t("Calories") }} </span>
      </div>
      <div class="calories-value">
        <span>{{ calories }}</span>
      </div>
    </div>

    <hr class="custom-divider thiner" />

    <div class="daily-value-wrapper text-end">
      <span>% {{ $t("Daily Value") }} *</span>
    </div>
    <hr />

    <div class="nutrients">
      <NutrientSection
        v-for="section in nutrients"
        :key="section.section"
        :section="section"
      />
    </div>

    <div class="disclaimer">
      <p>
        {{ $t("DailyNote") }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NutrientSection from "./NutrientSection.vue";

export default {
  name: "NutritionLabel",
  components: { NutrientSection },
  computed: {
    ...mapGetters("label", ["getNutritionData"]),
    servingPerContainer() {
      return this.getNutritionData?.amounts?.number_of_servings;
    },
    servingSize() {
      return this.getNutritionData?.amounts?.serving;
    },
    calories() {
      const calories = this.getNutritionData?.serving?.Calories?.value;
      return Math.round(calories);
    },
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
            value: Math.round(nutrient.value || 0),
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
  .serving-info-wrapper {
    .serving-per-container {
      font-size: 1.125rem;
    }
    .serving-size {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 800;
      line-height: 16px;
      &-title {
        font-size: 21px;
      }
      &-value {
        font-size: 21px;
      }
    }
  }
  .calories-wrapper {
    line-height: 16px;
    .info-section {
      font-weight: 800;
      gap: 8px;
      &-amount-title {
        font-size: 18px;
      }
      &-calories-title {
        font-size: 32px;
      }
    }
    .calories-value {
      font-weight: 800;
      font-size: 40px;
    }
  }
  .daily-value-wrapper {
    font-size: 14px;
    font-weight: 900;
  }

  .nutrients {
    margin-top: 0;
  }
  .disclaimer {
    font-size: 11px;
    font-weight: 600;
    p {
      margin: 0;
    }
  }
}
</style>
