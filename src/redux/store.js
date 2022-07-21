import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import userReducer from './user/userRedux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
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
  //redux
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  //   }
  // }),
  reducer: {
    user: persistedReducer,
  },

})
export const persistor = persistStore(store)

export default store