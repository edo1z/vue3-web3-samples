<template>
  <h2 class="text-2xl font-bold mb-5">Donate ETH</h2>
  <TextField type="number" />&nbsp;ETH<br />
  <Button class="mt-5" :disabled="true" @click="donate">Donate</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/buttons/Button.vue";
import TextField from "@/components/inputs/TextField.vue";
// import { useWalletStore } from "@/stores/wallet";

export default defineComponent({
  name: "DonateEther",
  components: { Button, TextField },
  setup() {
    // const wallet = useWalletStore();
  },
  methods: {
    donate() {
      console.log("donate...");
    },
  },
});
</script>
