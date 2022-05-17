import {doLogin, currentUser, logout} from "@/request/auth"
import Message from "vue-m-message"
import router from '@/router'

const state = () => ({
    user: null
})

const getters = {}

const actions = {}

const mutations = {
    resetCurrUser(state) {
        currentUser().then(res => {
            if (res.data.success) {
                state.user = res.data.data
            } else {
                console.error('获取用户失败', res.data.message)
            }
        }).catch(e => console.error(e))
    },
    login(state, {username, password, rememberMe}) {
        doLogin(username, password, rememberMe)
            .then(res => {
                if (res.data.success) {
                    state.user = res.data.data
                    router.back()
                } else {
                    Message.error(res.data.message)
                }
            })
            .catch(e => Message.error(e.toString()))
    },
    logout(state) {
        logout().then(res => {
            if (res.data.success) {
                state.user = null
            } else {
                Message.error(res.data.message)
            }
        }).catch(e => console.error(e.toString()))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}