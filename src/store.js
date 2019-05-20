import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Angular T-shirt', image: 'https://i.imgur.com/GUX8m9q.jpg', price: 666 },
      { invId: 2, name: 'Vue T-shirt', image: 'https://i.imgur.com/TriMZO9.jpg', price: 999 },
      { invId: 3, name: 'React T-shirt', image: 'https://i.imgur.com/Bh7hynu.jpg', price: 966 },
      { invId: 4, name: 'Aurelia T-shirt', image: 'https://i.imgur.com/PJt6yv8.jpg', price: 299 },
      { invId: 5, name: 'Kara', image: 'https://i.imgur.com/OCNAMa1.jpg', price: 999 },
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
