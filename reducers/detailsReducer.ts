import {TnCSelection} from '../enums/tncSelection';

export interface Details {
    email: string;
    phone: string;
    mobile: string;
    username: SuggestedUsername;
    termsAndConditions: TnCSelection;
}

const initialState: Details = {
    email: '',
    phone: '',
    mobile: '',
    username: <SuggestedUsername>{id: -1, name:''},
    termsAndConditions: TnCSelection.None
}

const UPDATEEMAILPHONE: string = 'updateemailphone';
const UPDATEUSERNAME: string = 'updateusername';
const UPDATETERMSANDCONDITIONS: string = 'updatetermsandconditions';

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

export const updateTermsAndConditions = (value: TnCSelection) => {
    return {
        type: UPDATETERMSANDCONDITIONS,
        value: value
    }
}

const detailsReducer = (state: Details = initialState, action) => {
    switch (action.type) {
        case UPDATEEMAILPHONE:            
            return <Details>{...state, ...action.value};
            break;
        case UPDATEUSERNAME:            
            return <Details>{...state, username: action.value};
            break;
        case UPDATETERMSANDCONDITIONS:
            console.log('UPDATETERMSANDCONDITIONS - ' + action.value);
            return <Details>{...state, termsAndConditions: action.value};
            break;
        default:
            return state;
    }
}

export default detailsReducer;