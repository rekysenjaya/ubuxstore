import ApiConstant from '../appConstants/apiConstants'

const getList = () => {
    return fetch(ApiConstant.list.getALL.get, {
        method: 'get',
    })
        .then(response => response.json())
        .then(json => {
            return json
        }).catch(err => err)
}

const searchList = (body) => {
    return fetch(ApiConstant.list.search.post, {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => {
            return json
        }).catch(err => err)
}

export {
    getList,
    searchList,
}