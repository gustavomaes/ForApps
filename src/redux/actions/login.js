import AsyncStorage from '@react-native-community/async-storage';
import client, { endpoints } from 'utils/api';
import ACTIONSNAME from 'redux/actionsName';

export function loginReset() {
  return {
    type: ACTIONSNAME.LOGIN_RESET,
  };
}

export function loginRequest() {
  return {
    type: ACTIONSNAME.LOGIN_REQUEST,
  };
}

export function loginSuccess() {
  return {
    type: ACTIONSNAME.LOGIN_SUCCESS,
  };
}

export function loginFailure(error) {
  return {
    type: ACTIONSNAME.LOGIN_FAILURE,
    error,
  };
}

export function loginAction(data) {
  return async dispatch => {
    dispatch(loginRequest());
    return client
      .post(endpoints.login, data)
      .then(result => {
        console.log('loginAction result> ', result.data);
        AsyncStorage.setItem('token', result.data.token);
        dispatch(loginSuccess());
      })
      .catch(error => {
        console.log(error.response);
        dispatch(
          loginFailure(
            error.response.error
              ? error.response.error
              : 'Ocorreu um erro inesperado. Tente novamente.'
          )
        );
      });
  };
}
