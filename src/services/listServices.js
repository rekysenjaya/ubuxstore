import ApiConstant from '../appConstants/apiConstants'

const getList = () => {
    return fetch(ApiConstant.list.get, {
        method: 'get',
    })
        .then(response => response.json())
        .then(json => {
            return json
        })
}

export {
    getList,
}