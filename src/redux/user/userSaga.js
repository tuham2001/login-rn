import { loginSuccess } from "./userRedux";
import { fork, take } from 'redux-saga/effects'
import Axios from 'axios'

function* handleLogin(payload) {
  Axios({
    method: 'GET',
    url: 'https://httpbin.org/basic-auth/pro/123123',
    auth: {
      username: payload.name,
      password: payload.password,
    },
  })
    .then((res) => {
      console.log('Thành công', res)
    })
    .catch((err) => {
      // console.log(err.message)
    })
}

function* watchLoginFlow() {
  const action = yield take(loginSuccess.type)
  yield fork(handleLogin, action.payload)
}

export default function* userSaga() {
  yield fork(watchLoginFlow)
}