export interface SuggestedUsernames {
    id: number;
    name: string;
}

const initialState: SuggestedUsernames[] = [];

const UPDATE: string = 'update';
const RESET: string = 'reset';

export const update = (usernames: SuggestedUsernames[]) => {
    return {
        type: UPDATE,
        usernameSuggestions: usernames
    };
}

export const reset = () => {
    return {
        type: RESET
    }
}

const usernameReducer = (state: SuggestedUsernames[] = initialState, action) => {
    switch(action.type){
        case UPDATE:
            return <SuggestedUsernames[]>action.usernameSuggestions;
        break;
        case RESET:
            return initialState;
        break;
        default:
            return state;
        break;
    }
}

export default usernameReducer;