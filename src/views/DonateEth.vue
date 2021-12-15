<template>
  <h2 class="text-2xl font-bold mb-5">Donate ETH</h2>
  <TextField type="number" />&nbsp;ETH<br />
  <Button class="mt-5" :disabled="!isConnectedWallet" @click="donate"
    >Donate</Button
  >
  {{ isConnectedWallet ? "CONNECTED" : "NO CONNECT" }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/buttons/Button.vue";
import TextField from "@/components/inputs/TextField.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "DonateEther",
  components: { Button, TextField },
  computed: {
    ...mapGetters("wallet", ["isConnectedWallet"]),
  },
  methods: {
    donate() {
      console.log("donate...");
    },
  },
});
</script>
