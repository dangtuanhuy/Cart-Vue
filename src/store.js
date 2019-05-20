import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Item 1', image: '//imgur.com/MGFCJEy', price: 666 },
      { invId: 2, name: 'Item 2', image: '//placehold.it/200', price: 999 },
      { invId: 3, name: 'Item 3', image: '//placehold.it/200', price: 966 },
      { invId: 4, name: 'Item 4', image: '//placehold.it/200', price: 299 },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});
