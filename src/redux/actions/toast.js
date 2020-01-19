import ACTIONSNAME from 'redux/actionsName';

export function toastOpen(data) {
  return {
    type: ACTIONSNAME.TOAST_OPEN,
    data,
  };
}

export function toastClose() {
  return {
    type: ACTIONSNAME.TOAST_CLOSE,
  };
}
