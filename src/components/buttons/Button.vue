<template>
  <button
    class="dark:bg-purple-500 dark:text-black rounded-md text-sm px-3 py-2 font-medium mr-1"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
});
</script>
