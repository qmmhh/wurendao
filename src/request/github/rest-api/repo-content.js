import req from '@/request/index'

export const allMds = () => {
    return req.get('https://api.github.com/repos/prprhub/prprhub.github.io.md/contents/md?ref=main')
}