<template>
  <button type="button" :style="style">
    <img style="width: 100%" src="@/assets/fox.svg" />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 50,
    },
  },
  setup(props) {
    const style = computed(() => `width: ${props.width}px;`);
    return { style };
  },
});
</script>
