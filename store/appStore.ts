import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '../reducers/appReducer';

const AppStore = createStore(AppReducer, applyMiddleware(thunk));

export default AppStore;