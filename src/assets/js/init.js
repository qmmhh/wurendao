import store from '@/store'
import {getConf} from "@/request/conf"

function setIcon(favicon_url) {
    let link = document.createElement('link')
    link.rel = 'icon'
    link.href = favicon_url
    document.getElementsByTagName('head')[0].appendChild(link)
}

export const init = () => {
    getConf().then(res => {
        const conf = res.data

        const site = conf.site
        const me = conf.me

        document.title = site.title
        setIcon(site.faviconUrl)
        store.commit('me/SET_NICKNAME', me.nickname)
        store.commit('me/SET_AVATAR_URL', me.avatarUrl)
    })
}