import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { bookReducer } from './bookReducer';
import { loginReducer } from './loginReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['book']
};

const reducer = combineReducers({
  app: appReducer,
  book: bookReducer,
  login: loginReducer,
});
export const rootReducer = persistReducer(persistConfig, reducer);
