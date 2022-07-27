import { loginSuccess } from "./userRedux";
import { put, takeEvery, call } from 'redux-saga/effects'
import Axios from 'axios'
import { GET_LOGIN } from '../actions/actionSaga'

function* getLogin(action) {
  const { name, password } = action.user

  function getApi() {
    return Axios({
      method: 'GET',
      url: 'https://httpbin.org/basic-auth/pro/123123',
      auth: {
        username: name,
        password: password,
      },
    })
  }
  try {
    const response = yield call(getApi);
    response.data = action.user
    yield put({ type: loginSuccess, payload: response.data })
  }
  catch (error) {
    yield put({ type: loginSuccess, error })
  }


}

export default function* userSaga() {
  yield takeEvery(GET_LOGIN, getLogin)
}