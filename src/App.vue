<template>
  <Menu />
  <div class="pt-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <WalletStatus />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWalletStore } from "@/stores/wallet";
import Menu from "@/layouts/Menu.vue";
import WalletStatus from "@/components/wallet/WalletStatus.vue";

export default defineComponent({
  components: { Menu, WalletStatus },
  setup() {
    const wallet = useWalletStore();
    return { wallet };
  },
  async created() {
    await this.wallet.init();
  },
});
</script>
