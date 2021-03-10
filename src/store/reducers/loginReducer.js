import {LOGIN_SUCCESS, LOGIN_ERROR} from '../actionTypes';

const initialState = {
  userData: {userName: '', isLoggedIn: false},
  error: null,
  isLoading: false,
};

export const loginReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: {userName: payload, isLoggedIn: true},
        error: null,
      };
    case LOGIN_ERROR:
      return {...state, name: null, error: payload, isLoading: false};
    default:
      return state;
  }
};
