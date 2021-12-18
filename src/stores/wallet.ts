import { defineStore } from "pinia";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

export const useWalletStore = defineStore("wallet", {
  state: () => ({
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    ethereum: null as any,
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    provider: null as any,
    notInstalled: true,
  }),
  actions: {
    async init() {
      const provider = await detectEthereumProvider();
      if (!provider || !window.ethereum || provider !== window.ethereum) {
        this.notInstalled = true;
      } else {
        this.notInstalled = false;
        this.ethereum = window.ethereum;
        this.provider = new ethers.providers.Web3Provider(this.ethereum);
      }
    },
    async getCurrentAccount() {
      const accounts = await this.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("accounts", accounts);
    },
  },
});
