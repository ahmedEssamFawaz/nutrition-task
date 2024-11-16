<template>
  <div class="serving-info-wrapper mb-2">
    <div class="serving-per-container">
      {{ servingPerContainer }} {{ $t("Serving Per Container") }}
    </div>
    <div class="serving-size">
      <span class="serving-size-title">{{ $t("Serving Size") }}</span>
      <span class="serving-size-value">{{ servingSize }}{{ $t("gram") }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ServingPerContainerComponent",
  computed: {
    ...mapGetters("label", ["getNutritionData"]),

    servingPerContainer() {
      return this.getNutritionData?.amounts?.number_of_servings;
    },
    servingSize() {
      return this.getNutritionData?.amounts?.serving;
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
