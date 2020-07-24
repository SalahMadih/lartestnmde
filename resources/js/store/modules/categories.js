import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    categories: []
}

// getters
export const getters = {
    categories : status => status.categories
}

// mutations
export const mutations = {

    [types.FETCH_CATEGORIES_SUCCESS](state, { categories }) {
        state.categories = categories
    },

    [types.FETCH_CATEGORIES_FAILURE](state) {
        state.categories = null

    },
    
}

// actions
export const actions = {

    async fetchCategories({ commit }) {
        try {
            const { data } = await axios.get('/api/categories');

            commit(types.FETCH_CATEGORIES_SUCCESS, { categories: data })
        
        } catch (e) {

            commit(types.FETCH_CATEGORIES_FAILURE)
        }
    },

}
