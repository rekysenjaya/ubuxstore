/* class combines all th existing reducers in the app
 */
import * as listReducer from './listReducer'
import * as detailStoreReducer from './detailStoreReducer'
import * as detailStoreProductReducer from './detailStoreProductReducer'

export default Object.assign(listReducer, detailStoreReducer, detailStoreProductReducer);
