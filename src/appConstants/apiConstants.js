import { API_PREFIX } from '../config/config'

const ApiConstant = {
    list: {
        getALL: {
            get: `${API_PREFIX}/test/get-all-stores`,
        },
        search:{
            post:`${API_PREFIX}/test/search-store`
        }
    }
}

export default ApiConstant