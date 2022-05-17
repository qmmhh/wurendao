import req from '@/request/index'
import qs from "qs"

const prefix = 'https://api.github.com/repos'
//https://api.github.com/repos/prprhub/prprhub.github.io.static/contents/md?ref=main
//https://api.github.com/search/code?q=+in:file+language:md+repo:prprhub/prprhub.github.io.static&page=1&per_page=1

export const search = (q, page, perPage) => {
    return req.get(`https://api.github.com/search/code?q=${q}+in:file+language:md+repo:prprhub/prprhub.github.io.md&page=${page}&per_page=${perPage}`,{
        headers: {
            'Accept': 'application/vnd.github.v3.text-match+json'
        }
    })
}