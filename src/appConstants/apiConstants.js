import { API_PREFIX } from '../config/config'

const ApiConstant = {
    list: {
        getALL: {
            get: `${API_PREFIX}/test/get-all-stores`,
        },
        search:{
            post:`${API_PREFIX}/test/search-store`
        }
    },
    detailStore:{
        detail:{
            get:`${API_PREFIX}/test/get-store?storeId={storeId}`
        },
        product:{
            get:`${API_PREFIX}/test/get-store-products?storeId={storeId}`
        }
    }
}

export default ApiConstant