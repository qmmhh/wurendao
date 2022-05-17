import req from '@/request/index'
import qs from "qs"

const prefix = '/api'

export const currentUser = () => {
    return req.get(`${prefix}/currentUser`)
}

export const doLogin = (username, password, rememberMe) => {
    return req.post('/api/login', qs.stringify({
        username,
        password,
        rememberMe
    }))
}

export const logout = () => {
    return req.get('/api/logout')
}