import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurantName: 'Cafe with A Vue',
    shoppingCart: 0,
    simpleMenu: [
      {
        name: 'Crossiant',
        image: {
          source: '/images/crossiant.jpg',
          alt: 'A crossiant'
        },
        inStock: true,
        quantity: 1,
        price: 2.99
      },
      {
        name: 'French Baguette',
        image: {
          source: '/images/french-baguette.jpeg',
          alt: 'Four French Baguettes'
        },
        inStock: true,
        quantity: 1,
        price: 3.99
      },
      {
        name: 'Éclair',
        image: {
          source: '/images/eclair.jpg',
          alt: 'Chocolate Éclair'
        },
        inStock: false,
        quantity: 1,
        price: 4.99
      }
    ]
  },
  getters: {
    copyright: state => {
      const currentYear = new Date().getFullYear()
      return `Copyright ${state.restaurantName} ${currentYear}`
    }
  },
  mutations: {
    INCREASE_SHOPPING_CART(state, amount = 1) {
      state.shoppingCart += Number(amount)
    },

    DECREASE_SHOPPING_CART(state, amount=1) {
      state.shoppingCart -= Number(amount)
    }
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      if(amount >= 0) {
        commit('INCREASE_SHOPPING_CART', amount)
      } else {
        commit('DECREASE_SHOPPING_CART', -amount)
      }
    }
  },
  modules: {}
})
