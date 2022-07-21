import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import userReducer from './userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
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
  //redux
  // reducer: {
  //   user: rootReducer,
  // },
})
export const persistor = persistStore(store)

export default store