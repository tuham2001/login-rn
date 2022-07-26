import { loginSuccess } from "./userRedux";
import { put, takeEvery } from 'redux-saga/effects'
import Axios from 'axios'
import { loginSuccessSaga, LOGIN_SUCCESS } from '../actions/actionSaga'

function* handleLogin(action) {
  yield put({ type: loginSuccess, action })

  Axios({
    method: 'GET',
    url: 'https://httpbin.org/basic-auth/pro/123123',
    auth: {
      username: action.user.name,
      password: action.user.password,
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
    })

}

export default function* userSaga() {
  yield takeEvery(LOGIN_SUCCESS, handleLogin)
}