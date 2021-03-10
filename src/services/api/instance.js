import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import bookData from '../../assets/mocks/BookData';
import { GET_BOOKS, LOGIN_USER } from './Paths';

const instance = axios.create({
  baseURL: 'https://fakeapi.com',
});
const mock = new MockAdapter(instance, { delayResponse: 1000 });

mock.onGet(GET_BOOKS).reply(200, bookData);
export default instance;

mock.onGet(LOGIN_USER).reply((config) => {
  return [200, { name: config.params.name }];
});
