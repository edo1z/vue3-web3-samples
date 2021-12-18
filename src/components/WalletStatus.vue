<template>
  <div v-if="wallet.notInstalled" class="mb-5 text-red-300">
    Not connected to MetaMask.<br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWalletStore } from "@/stores/wallet";

export default defineComponent({
  setup() {
    const wallet = useWalletStore();
    return { wallet };
  },
});
</script>
