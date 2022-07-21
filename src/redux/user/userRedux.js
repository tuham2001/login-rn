import Axios from 'axios'
import { login, logout } from '../userSlice'

export const loginRedux = (user) => {
  return dispatch => {
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
  }
}
export const logoutRedux = (user) => {
  return dispatch => {
    dispatch(logout())
  }
}