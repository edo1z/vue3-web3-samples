const state = () => ({});
const mutations = {};
const actions = {};
const getters = {
  isConnectedWallet() {
    console.log("wallet", window.ethereum);
    return window.ethereum !== undefined;
  },
};

const wallet = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

declare global {
  interface Window {
    ethereum: any;
  }
}

export default wallet;
