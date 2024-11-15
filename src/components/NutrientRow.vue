<template>
  <div
    class="nutrient-row-wrapper d-flex justify-space-between align-center"
    :style="{ paddingLeft: `${nutrient.indentations * 16}px` }"
  >
    <div class="nutrient-info-wrapper">
      <span
        class="nutrient-name"
        :class="{ 'fw-bolder': nutrient.indentations == 0 }"
        >{{ nutrient.name }}</span
      >
      <span class="ps-1"
        >{{ nutrient.value }}{{ nutrient.unit?.name || nutrient.unit }}</span
      >
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
