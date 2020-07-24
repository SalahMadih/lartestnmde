import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    products: []
}

// getters
export const getters = {
    products: status => status.products
}

// mutations
export const mutations = {

    [types.FETCH_PRODCUTS_SUCCESS](state, { products }) {
        state.products = products
    },

    [types.FETCH_PRODCUTS_FAILURE](state) {
        state.products = null

    },

}

// actions
export const actions = {

    async fetchProducts({ commit }) {
        try {

            const { data } = await axios.get('/api/products');
            commit(types.FETCH_PRODCUTS_SUCCESS, { products: data })

        } catch (e) {
            commit(types.FETCH_PRODCUTS_FAILURE)
        }
    },


    async fetchCategoryProducts({ commit }, payload) {
        try {
            const { data } = await axios.get(`/api/categoriesProducts/${payload}`);
            commit(types.FETCH_PRODCUTS_SUCCESS, { products: data })

        } catch (e) {
            commit(types.FETCH_PRODCUTS_FAILURE)
        }
    }

}
