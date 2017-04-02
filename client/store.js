// Import store from redux
import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import the root reducer
import rootReducer from './reducer/index';

import comments from './data/comments';
import posts from './data/posts';

// default object for data
const defaultState = {
  posts,
  comments
};

// create the store with defualtState & root reducer
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;