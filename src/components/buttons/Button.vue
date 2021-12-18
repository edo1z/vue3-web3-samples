<template>
  <button
    class="rounded-md text-sm px-3 py-2 font-medium mr-1"
    :class="classObj"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classObj = computed(() => {
      if (props.disabled) {
        return { "dark:bg-gray-700": true, "dark:text-gray-400": true };
      } else {
        return { "dark:bg-purple-800": true, "dark:text-white": true };
      }
    });
    return { classObj };
  },
});
</script>
