import Axios from 'axios'
import { login, logout } from '../userSlice'

export function loginThunk(user) {
  return function LoginThunk(dispatch, getState) {
    Axios({
      method: 'GET',
      url: 'https://httpbin.org/basic-auth/pro/123123',
      auth: {
        username: user.name,
        password: user.password,
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
export function logoutThunk() {
  return function LogoutThunk(dispatch, getState) {
    dispatch(logout())
  }
}