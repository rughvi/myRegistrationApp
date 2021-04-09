
export interface Details {
    email: string;
    phone: string;
    mobile: string;
    username: SuggestedUsername;
}

const initialState: Details = {
    email: '',
    phone: '',
    mobile: '',
    username: <SuggestedUsername>{id: -1, name:''}
}

const UPDATEEMAILPHONE: string = 'updateemailphone';
const UPDATEUSERNAME: string = 'updateusername';

export const updateEmailPhone = (value: Details) => {
    return {
        type: UPDATEEMAILPHONE,
        value: value
    }
}

export const updateUsername = (value: SuggestedUsername) => {
    return {
        type: UPDATEUSERNAME,
        value: value
    }
}

const detailsReducer = (state: Details = initialState, action) => {
    switch (action.type) {
        case UPDATEEMAILPHONE:            
            return <Details>{...state, ...action.value};
            break;
        case UPDATEUSERNAME:
            console.log('UPDATEUSERNAME' + action.value.name);
            return <Details>{...state, username: action.value};
            break;
        default:
            return state;
    }
}

export default detailsReducer;