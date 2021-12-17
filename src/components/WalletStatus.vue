<template>
  <div v-if="notInstalled">Please install MetaMask Wallet.</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWalletStore } from "@/stores/wallet";

export default defineComponent({
  setup() {
    const wallet = useWalletStore();
    const notInstalled = wallet.notInstalled;
    return { wallet, notInstalled };
  },
});
</script>
