window.onload = function () {
    let url = "../conf.json"
    let req = new XMLHttpRequest()
    req.open("get", url)
    req.send(null)
    req.onload = function () {
        if (req.status === 200) {
            const conf = JSON.parse(req.responseText)
            document.title = conf.title
        }
    }
}