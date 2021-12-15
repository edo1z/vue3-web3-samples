<template>
  <ul>
    <li>
      <router-link to="donate_eth"> Donate ETH </router-link>
    </li>
    <li>
      <router-link to="send_eth"> Send ETH to someone </router-link>
    </li>
    <li>
      <router-link to="buy_nft_with_eth"> Buy NFT with ETH </router-link>
    </li>
    <li>
      <router-link to="get_airdrop_jpyz"> Get a JPYZ airdrop </router-link>
    </li>
    <li>
      <router-link to="buy_nft_with_jpyz"> Buy NFTs with JPYZ </router-link>
    </li>
    <li>
      <router-link to="buy_lottery"> Buy lottery tickets </router-link>
    </li>
    <li>
      <router-link to="bid_on_auction">
        Bid on NFT auctions with JPYZ
      </router-link>
    </li>
    <li>
      <router-link to="airdrop_nft">
        Apply for the limited 100 NFT airdrops
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
