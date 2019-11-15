import { combineReducers } from 'redux';
import categories from './categories';
import questions from './questions';
import app from './app';
import history from './history';

export default combineReducers({
  categories,
  questions,
  app,
  history
});
