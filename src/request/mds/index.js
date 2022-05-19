import req from '@/request/index'
const mdDirPath = './md'

export const getMdFileNames = () => {
    return req.get(mdDirPath)
}

export const getMdContent = (mdFileName) => {
    return req.get(`${mdDirPath}/${mdFileName}`)
}