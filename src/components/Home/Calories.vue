<template>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CaloriesComponent",
  computed: {
    ...mapGetters("label", ["getNutritionData"]),

    calories() {
      const calories = this.getNutritionData?.serving?.Calories?.value;
      return Math.round(calories);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
