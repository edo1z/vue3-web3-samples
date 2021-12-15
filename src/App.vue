<template>
  <Menu />
  <div class="pt-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/layouts/Menu.vue";

export default defineComponent({
  components: { Menu },
});
</script>
