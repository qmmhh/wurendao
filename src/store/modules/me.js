const state = () => ({
    nickname: null,
    avatarUrl: null
})

const getters = {}

const actions = {}

const mutations = {
    SET_NICKNAME(state, value) {
        state.nickname = value
    },
    SET_AVATAR_URL(state, value) {
        state.avatarUrl = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}