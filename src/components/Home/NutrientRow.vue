<template>
  <div
    class="nutrient-row-wrapper d-flex justify-space-between align-center"
    :style="{ paddingInlineStart: `${nutrient.indentations * 16}px` }"
  >
    <div class="nutrient-info-wrapper">
      <span
        class="nutrient-name"
        :class="{ 'fw-bolder': nutrient.indentations == 0 }"
        >{{ getNutrientName }}</span
      >
      <span class="ps-1">{{ nutrient.value }}{{ getNutrientUnit }}</span>
    </div>
    <div v-if="nutrient.daily_value !== null" class="fw-bolder">
      <span>{{ nutrient.daily_value }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutrientRow",
  props: {
    nutrient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getNutrientName() {
      if (this.$i18n.locale == "ar") {
        return this.nutrient?.name_ar || this.nutrient.name;
      }
      return this.nutrient.name;
    },
    getNutrientUnit() {
      if (this.$i18n.locale == "ar") {
        return this.nutrient.unit?.name_ar || "جم";
      }
      return this.nutrient.unit?.name || this.nutrient?.unit;
    },
  },
};
</script>

<style lang="scss" scoped>
.nutrient-row-wrapper {
  font-size: 14px;
  font-weight: 500;
  .fw-bolder {
    font-weight: 900;
  }
}
</style>
