import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginRedux: (state, action) => {
      if (action.payload.name === 'pro' && action.payload.password === '123123') {
        state.user = action.payload
        Axios({
          method: 'GET',
          url: 'https://httpbin.org/basic-auth/pro/123123',
          auth: {
            username: state.user.name,
            password: state.user.password,
          },
        })
          .then((res) => {
            console.log('Thành công', res)
          })
          .catch((err) => {
            console.log(err.message)
          })
      }
    },
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout, loginRedux } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer