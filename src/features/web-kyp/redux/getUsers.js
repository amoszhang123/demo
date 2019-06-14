// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da
import axios from 'axios';
import {
  WEB_KYP_GET_USERS,
  EXAMPLES_FETCH_USER_LIST_SUCCESS,
  EXAMPLES_FETCH_USER_LIST_FAILURE,
} from './constants';

export function getUsers(args) {
  // console.log(args)
  return dispatch =>{
    // optionally you can have getState as the second argument
    dispatch({
      type: WEB_KYP_GET_USERS,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const doRequest = axios.get('http://10.2.128.171/accounts'+args);

      doRequest.then(
        res => {
          dispatch({
            type: EXAMPLES_FETCH_USER_LIST_SUCCESS,
            data: res.data,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        err => {
          dispatch({
            type: EXAMPLES_FETCH_USER_LIST_FAILURE,
            data: { error: err },
          });
          reject(err);
        }
      );
    });
    return promise;
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case WEB_KYP_GET_USERS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
