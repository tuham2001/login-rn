import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from '../screens/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  //  redux-thunk
  middleware: [thunk],
  reducer: {
    user: persistedReducer,
  },
})
export const persistor = persistStore(store)

export default store
