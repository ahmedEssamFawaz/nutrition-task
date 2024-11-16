<template>
  <div class="nutrient-section">
    <div v-for="(nutrient, idx) in section.nutrients" :key="nutrient.name">
      <NutrientRow :nutrient="nutrient" />
      <hr v-if="idx + 1 !== section.nutrients.length" />
    </div>

    <div class="custom-divider"></div>
  </div>
</template>

<script>
import NutrientRow from "./NutrientRow.vue";

export default {
  name: "NutrientSection",
  components: { NutrientRow },
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.nutrient-section {
  .custom-divider {
    height: 10px;
    background-color: #000;
  }
}
</style>
