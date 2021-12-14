<template>
  <h2 class="text-2xl font-bold mb-5">Donate Ether</h2>
  <TextField /><br />
  <Button class="mt-5">Donate</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/buttons/Button.vue";
import TextField from "@/components/inputs/TextField.vue";

export default defineComponent({
  name: "DonateEther",
  components: { Button, TextField },
});
</script>
