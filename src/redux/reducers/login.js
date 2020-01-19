import ACTIONSNAME from 'redux/actionsName';

const initialState = {
  isLoading: false,
  error: false,
  success: false,
  errorMessage: null,
};

const loginReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ACTIONSNAME.LOGIN_RESET:
      newState = {
        ...state,
        isLoading: false,
        error: false,
        success: false,
        errorMessage: null,
      };
      return newState;
    case ACTIONSNAME.LOGIN_REQUEST:
      newState = {
        ...state,
        isLoading: true,
        success: false,
      };
      return newState;
    case ACTIONSNAME.LOGIN_SUCCESS:
      newState = {
        ...state,
        isLoading: false,
        error: false,
        success: true,
        errorMessage: null,
      };
      return newState;
    case ACTIONSNAME.LOGIN_FAILURE:
      newState = {
        ...state,
        isLoading: false,
        error: true,
        success: false,
        errorMessage: action.error,
      };
      return newState;
    default:
      return state;
  }
};

export default loginReducer;
