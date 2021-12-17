import { defineStore } from "pinia";
import detectEthereumProvider from "@metamask/detect-provider";

export const useWalletStore = defineStore("wallet", {
  state: () => ({
    provider: null as unknown,
  }),
  getters: {
    isConnectedWallet: () => {
      console.log("wallet", window.ethereum);
      return window.ethereum !== undefined;
    },
  },
  actions: {
    async init() {
      const provider = await detectEthereumProvider();
      this.provider = provider;
    },
  },
});
