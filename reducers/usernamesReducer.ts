export interface SuggestedUsername {
    id: number;
    name: string;
}

const initialState: SuggestedUsername[] = [];

const UPDATEUSERNAMESUGGESTIONS: string = 'updateusernamesuggestions';
const RESET: string = 'reset';

export const update = (usernames: SuggestedUsername[]) => {
    return {
        type: UPDATEUSERNAMESUGGESTIONS,
        usernameSuggestions: usernames
    };
}

export const reset = () => {
    return {
        type: RESET
    }
}

const usernameReducer = (state: SuggestedUsername[] = initialState, action) => {
    switch(action.type){
        case UPDATEUSERNAMESUGGESTIONS:
            return <SuggestedUsername[]>action.usernameSuggestions;
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