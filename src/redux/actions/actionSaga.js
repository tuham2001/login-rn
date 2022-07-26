export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccessSaga = user => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};