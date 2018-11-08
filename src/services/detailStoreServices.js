import ApiConstant from '../appConstants/apiConstants'

const getDetailStore = (payload) => {
    const { storeId } = payload
    return fetch(ApiConstant.detailStore.detail.get.replace('{storeId}', storeId), {
        method: 'get',
    })
        .then(response => response.json())
        .then(json => {
            return json
        }).catch(err => err)
}

const getDetailStoreProduct = (payload) => {
    const { storeId } = payload
    return fetch(ApiConstant.detailStore.product.get.replace('{storeId}', storeId), {
        method: 'get',
    })
        .then(response => response.json())
        .then(json => {
            return json
        }).catch(err => err)
}

export {
    getDetailStore,
    getDetailStoreProduct,
}