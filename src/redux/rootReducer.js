import { combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop.reducer'
import directoryReducer from './directory/directory.reducer'
import userReducer from './user/user.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'directory', 'shop']
}

const rootreducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootreducer)