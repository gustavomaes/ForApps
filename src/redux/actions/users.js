import client, { endpoints } from 'utils/api';
import ACTIONSNAME from 'redux/actionsName';

export function usersReset() {
  return {
    type: ACTIONSNAME.USERS_RESET,
  };
}

export function usersRequest(page) {
  return {
    type: ACTIONSNAME.USERS_REQUEST,
    page,
  };
}

export function usersSuccess(data, page) {
  return {
    type: ACTIONSNAME.USERS_SUCCESS,
    data,
    page,
  };
}

export function usersFailure(error) {
  return {
    type: ACTIONSNAME.USERS_FAILURE,
    error,
  };
}

export function usersAction(page) {
  return async dispatch => {
    dispatch(usersRequest(page));
    return client
      .get(`${endpoints.users}?page=${page}`)
      .then(result => {
        console.log('usersAction result> ', result.data);
        dispatch(usersSuccess(result.data, page));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(
          usersFailure(
            error.response.error
              ? error.response.error
              : 'Ocorreu um erro inesperado. Tente novamente.'
          )
        );
      });
  };
}
