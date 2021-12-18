<template>
  <FoxButton v-if="wallet.currentAccount" width="35" />
  <button
    type="button"
    class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    @click="connectWallet"
    v-else
  >
    <LoginIcon class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWalletStore } from "@/stores/wallet";
import { LoginIcon } from "@heroicons/vue/outline";
import FoxButton from "@/components/buttons/FoxButton.vue";

export default defineComponent({
  components: { LoginIcon, FoxButton },
  setup() {
    const wallet = useWalletStore();
    const connectWallet = () => {
      wallet.getCurrentAccount();
      console.log("connect wallet");
    };
    return { wallet, connectWallet };
  },
});
</script>
