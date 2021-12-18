<template>
  <input
    type="text"
    class="rounded-md sm:text-sm py-1 px-2 dark:text-black dark:bg-gray-900 dark:text-white border-2 border-double border-purple-500"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextField",
  props: {
    placeholder: { default: "" },
  },
});
</script>
