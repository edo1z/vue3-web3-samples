<template>
  <h2 class="text-2xl font-bold mb-5">Donate ETH</h2>
  <TextField
    type="number"
    v-model="donateAmount"
    :error="inputError"
    unit="ETH"
  />
  <Button class="mt-5" :disabled="!isButtonEnabled" @click="sendEth">
    Donate
  </Button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Button from "@/components/buttons/Button.vue";
import TextField from "@/components/inputs/TextField.vue";
import { useWalletStore } from "@/stores/wallet";
import { useDonateEthStore } from "@/stores/donateEth";

export default defineComponent({
  name: "DonateEther",
  components: { Button, TextField },
  setup() {
    // wallet
    const wallet = useWalletStore();
    const isButtonEnabled = computed(() => {
      return wallet.currentAccount;
    });

    // donate amount
    const donate = useDonateEthStore();
    const donateAmount = computed({
      get: () => donate.amount,
      set: (val) => (donate.amount = val),
    });

    // sendEth
    const inputError = ref("");
    const sendEth = async () => {
      if (donateAmount.value <= 0) {
        inputError.value = "Please enter a number greater than 0. ";
      } else {
        inputError.value = "";
        await donate.sendEth();
      }
    };
    return {
      wallet,
      isButtonEnabled,
      donateAmount,
      inputError,
      sendEth,
      donate,
    };
  },
});
</script>
