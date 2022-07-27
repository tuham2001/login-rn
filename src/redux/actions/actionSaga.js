export const GET_LOGIN = 'GET_LOGIN';

export const loginSaga = (user) => {
  return {
    type: GET_LOGIN,
    user
  };
};