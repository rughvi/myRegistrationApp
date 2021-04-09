import { combineReducers } from 'redux';
import detailsReducer from './detailsReducer';
import progressReducer from './progressReducer';
import usernameReducer from './usernamesReducer';

const AppReducer = combineReducers({
    detailsReducer,
    progressReducer,
    usernameReducer
});

export default AppReducer;