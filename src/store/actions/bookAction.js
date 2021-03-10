import { getBooks } from '../../services/api';
import {
  GET_BOOK_DATA,
  GET_BOOK_ERROR,
  SWITCH_GRID,
} from '../actionTypes';

export const getBooksAction = () => {
  return async (dispatch) => {
    try {
      const response = await getBooks();
      dispatch({ type: GET_BOOK_DATA, payload: response });
    } catch (e) {
      dispatch({
        type: GET_BOOK_ERROR,
        payload: e,
      });
    }
  };
};

export const switchGridAction = () => {
  return { type: SWITCH_GRID };
};

