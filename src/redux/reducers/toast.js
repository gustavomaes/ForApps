import ACTIONSNAME from 'redux/actionsName';

const initialState = {
  show: false,
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONSNAME.TOAST_OPEN:
      return {
        ...state,
        show: true,
        data: action.data,
      };
    case ACTIONSNAME.TOAST_CLOSE:
      return {
        ...state,
        show: false,
        data: null,
      };
    default:
      return state;
  }
};

export default toastReducer;
