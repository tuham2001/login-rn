export const GET_LOGIN = 'GET_LOGIN';

export const loginSuccessSaga = user => {
  return {
    type: GET_LOGIN,
    user,
  };
};