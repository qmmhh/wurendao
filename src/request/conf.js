import req from '@/request/index'

export const getConf = () => {
    return req.get('./conf.json')
}