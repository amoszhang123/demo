// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  WEB_KYP_CREATE_ORDER,
} from './constants';

export function createOrder() {
  return {
    type: WEB_KYP_CREATE_ORDER,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case WEB_KYP_CREATE_ORDER:
      return {
        ...state,
      };

    default:
      return state;
  }
}
