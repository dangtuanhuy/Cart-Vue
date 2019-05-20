import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Angular T-shirt', image: 'https://i.imgur.com/GUX8m9q.jpg', price: 666 },
      { invId: 2, name: 'Angular T-shirt', image: 'https://i.imgur.com/GUX8m9q.jpg', price: 999 },
      { invId: 3, name: 'Angular T-shirt', image: 'https://i.imgur.com/GUX8m9q.jpg', price: 966 },
      { invId: 4, name: 'Angular T-shirt', image: 'https://i.imgur.com/GUX8m9q.jpg', price: 299 },
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
