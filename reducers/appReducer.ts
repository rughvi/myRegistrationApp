import { combineReducers } from 'redux';
import detailsReducer from './detailsReducer';
import progressReducer from './progressReducer';
import usernameReducer from './usernamesReducer';
import signatureReducer from './signatureReducer';

const AppReducer = combineReducers({
    detailsReducer,
    progressReducer,
    usernameReducer,
    signatureReducer
});

export default AppReducer;