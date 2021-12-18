<template>
  <h2 class="text-2xl font-bold mb-5">Donate ETH</h2>
  <TextField type="number" v-model="amount" :error="inputError" unit="ETH" />
  <Button class="mt-5" :disabled="!isButtonEnabled" @click="donate">
    Donate
  </Button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Button from "@/components/buttons/Button.vue";
import TextField from "@/components/inputs/TextField.vue";
import { useWalletStore } from "@/stores/wallet";

export default defineComponent({
  name: "DonateEther",
  components: { Button, TextField },
  setup() {
    const wallet = useWalletStore();
    const isButtonEnabled = computed(() => {
      return wallet.currentAccount;
    });
    return { wallet, isButtonEnabled };
  },
  data: () => ({
    amount: 0.0,
    inputError: "",
  }),
  methods: {
    donate() {
      if (this.amount <= 0) {
        this.inputError = "Please enter a number greater than 0. ";
      } else {
        this.inputError = "";
        console.log("donate...");
      }
    },
  },
});
</script>
