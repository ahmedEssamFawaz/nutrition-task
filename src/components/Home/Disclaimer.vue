<template>
  <div class="disclaimer">
    <p>
      {{ $t("DailyNote") }}
    </p>
  </div>
</template>

<script>
export default {
  name: "DisclaimerComponent",
};
</script>

<style lang="scss" scoped>
.disclaimer {
  font-size: 11px;
  font-weight: 600;
  p {
    margin: 0;
  }
}
</style>
