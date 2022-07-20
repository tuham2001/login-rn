import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import userReducer from '../screens/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}
const rootReducer = combineReducers({
  userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  //  redux-thunk
  middleware: [thunk],
  reducer: {
    user: persistedReducer,
  },
})
export const persistor = persistStore(store)

export default store