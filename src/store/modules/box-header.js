const state = () => ({
    isOpenSearchDialog: null
})

const getters = {
}

const actions = {
}

const mutations = {
    TOGGLE_IS_OPEN_SEARCH_DIALOG(state) {
        state.isOpenSearchDialog = !state.isOpenSearchDialog
    },
    UPDATE_IS_OPEN_SEARCH_DIALOG(state, value) {
        state.isOpenSearchDialog = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}