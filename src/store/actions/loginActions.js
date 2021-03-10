import {LOGIN_SUCCESS, LOGIN_ERROR} from '../actionTypes';
import {loginUser} from '../../services/api';
import {navigate} from '../../navigation/NavigationService';
import Toast from 'react-native-toast-message';
import {isEmpty} from 'lodash';

export const loginAction = (name,password) => {
  return async (dispatch) => {
    try {
      if (isEmpty(name)) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Enter name to continue.',
        });
      }else if(isEmpty(password)){
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Enter password to continue.',
        });
      }
      else{
        const response = await loginUser({name,password});
        Toast.show({
          text1: 'Login Success',
          position: 'bottom',
        });
        dispatch({type: LOGIN_SUCCESS, payload: response.data.name});
        navigate('DashBoardNavigator', {
          screen: 'HomeScreen',
        });
      }
    } catch (e) {
      dispatch({
        type: LOGIN_ERROR,
        payload: e,
      });
    }
  };
};


