import {
  GET_BOOK_DATA,
  GET_BOOK_ERROR,
  SWITCH_GRID,
} from '../actionTypes';

const initialState = { data: [], numColumn: 1, error: null };

export const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOK_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case GET_BOOK_ERROR:
      return { ...state, data: null, error: payload };
    case SWITCH_GRID:
      return { ...state, numColumn: state.numColumn === 1 ? 2 : 1 };
    default:
      return state;
  }
};

