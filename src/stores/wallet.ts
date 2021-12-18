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
    currentAccount: null as string | null,
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
      try {
        const accounts: string[] = await this.ethereum.request({
          method: "eth_requestAccounts",
        });
        this.currentAccount = accounts[0];
        console.log("accounts", accounts);
      } catch (err) {
        console.log("ERROR: getCurrentAccount()", err);
      }
    },
  },
});
