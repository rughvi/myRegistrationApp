import {inProgress, errorProgress, finishedProgress} from '../reducers/progressReducer';
import {update} from '../reducers/usernamesReducer';

export const getUsernameSuggestions = (originalUsername) => {
    return async (dispatch) => {
        console.log('getUsernameSuggestions internal function');
        dispatch(inProgress());
        try {
            let response = await fetch("/api/usernamesuggestions/abc");
            let json = await response.json();
            dispatch(update(json.usernames));
            dispatch(finishedProgress());
        } catch (error) {
            dispatch(errorProgress());
        }
    }
}