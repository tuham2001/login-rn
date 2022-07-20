import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer

export function loginThunk(user) {
  return function LoginThunk(dispatch, getState) {
    Axios({
      method: 'GET',
      url: 'https://httpbin.org/basic-auth/pro/123123',
      auth: {
        username: user.name.value,
        password: user.password.value,
      },
    })
      .then((res) => {
        dispatch(login(user))
        console.log('Thành công', res)
      })
      .catch((err) => {
        // console.log(err.message)
      })
    //  maybe custom user
  }
}
// export function logoutThunk(user) {
//   return function LogoutThunk(dispatch, getState) {
//     localStorage.removeItem('access_token')
//     //  maybe custom user
//     dispatch(login(user))
//   }
// }
// => (payload) => {
//   return {
//     type: 'user/login',
//     payload:payload,
//   }
// }

// reducer
// actions : object
// {
//   type:'abc',
//   payload:value
// }
// action creator () => {
//   return {
//     type:'abc',
//     payload:value
//   }
// }
