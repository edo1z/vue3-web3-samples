import { defineStore } from "pinia";
import { ethers } from "ethers";
import { useWalletStore } from "@/stores/wallet";

export const useDonateEthStore = defineStore("donateEth", {
  state: () => ({
    amount: 0.0,
    isSending: false,
    sendError: "",
    txResponseHash: "",
    toAddress: "0xFA92e33BcdF08Bfe5Bb4b4bDf0289a35477a7a7a",
  }),
  actions: {
    async sendEth() {
      this.isSending = true;
      this.sendError = "";
      this.txResponseHash = "";
      const eth = this.amount.toString();
      const wei = ethers.utils.parseEther(eth);
      const wallet = useWalletStore();
      const signer = wallet.provider.getSigner();
      const fromAddress = await signer.getAddress();
      try {
        const tx = await signer.sendTransaction({
          to: this.toAddress,
          from: fromAddress,
          value: wei,
        });
        console.log("transactionResponse", tx);
        this.txResponseHash = tx.hash;
      } catch (err: any) {
        this.sendError = err.toString();
        console.log("ERROR: ", this.sendError);
      }
      this.isSending = false;
    },
  },
});
