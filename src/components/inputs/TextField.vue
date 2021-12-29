<template>
  <div>
    <input
      type="text"
      class="rounded-md sm:text-sm py-1 px-2 dark:text-black dark:bg-gray-900 dark:text-white border-2 border-double border-purple-500"
      :placeholder="placeholder"
      v-model="value"
    />&nbsp;{{ unit }}
    <p v-if="error" class="dark:text-red-300 mt-2">
      {{ error }}
    </p>
    <br v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "TextField",
  props: {
    placeholder: { type: String, default: "" },
    modelValue: { default: null },
    unit: { type: String, default: "" },
    error: { type: String, default: "" },
  },
  setup(props, context) {
    const value = ref(props.modelValue);
    watchEffect(() => {
      context.emit("update:modelValue", value.value);
    });
    return { value };
  },
});
</script>
