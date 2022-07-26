import { loginSuccess } from "./userRedux";
import { fork, take } from 'redux-saga/effects'
import Axios from 'axios'

export function* handleLogin() {
  const action = yield take(loginSuccess.type)
  Axios({
    method: 'GET',
    url: 'https://httpbin.org/basic-auth/pro/123123',
    auth: {
      username: action.payload.name,
      password: action.payload.password,
    },
  })
    .then((res) => {
      console.log('Thành công', res)
    })
    .catch((err) => {
      // console.log(err.message)
    })
}

export default function* userSaga() {
  yield fork(handleLogin)
}