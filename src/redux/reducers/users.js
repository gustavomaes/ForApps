import ACTIONSNAME from 'redux/actionsName';

const initialState = {
  isLoading: false,
  isRefreshing: false,
  error: false,
  success: false,
  errorMessage: null,
  data: null,
  nextPage: 1,
  perPage: null,
  total: null,
  totalPages: null,
};

const usersReducer = (state = initialState, action) => {
  let newState;
  let isRefreshing = false;
  let newData = state.data;

  switch (action.type) {
    case ACTIONSNAME.USERS_RESET:
      newState = {
        ...state,
        isLoading: false,
        isRefreshing: false,
        error: false,
        success: false,
        errorMessage: null,
      };
      return newState;
    case ACTIONSNAME.USERS_REQUEST:
      if (action.page === 1) {
        isRefreshing = true;
      }
      newState = {
        ...state,
        isLoading: true,
        success: false,
        isRefreshing,
      };
      return newState;
    case ACTIONSNAME.USERS_SUCCESS:
      if (action.page === 1) {
        newData = action.data.data;
      } else {
        newData = newData.concat(action.data.data);
      }
      console.log('newData> ', newData);

      newState = {
        ...state,
        isLoading: false,
        isRefreshing: false,
        error: false,
        success: true,
        errorMessage: null,
        nextPage: action.data.page + 1,
        perPage: action.data.per_page,
        total: action.data.total,
        totalPages: action.data.total_pages,
        data: newData,
      };
      return newState;
    case ACTIONSNAME.USERS_FAILURE:
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

export default usersReducer;
