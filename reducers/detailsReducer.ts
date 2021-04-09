
export interface Details {
    email: string;
    phone: string;
    mobile: string;
}

const initialState: Details = {
    email: '',
    phone: '',
    mobile: ''
}

const UPDATEDETAILS: string = 'updatedetails';

export const updateDetails = (value: Details) => {
    return {
        type: UPDATEDETAILS,
        value: value
    }
}

const detailsReducer = (state: Details = initialState, action) => {
    switch (action.type) {
        case UPDATEDETAILS:            
            return <Details>{...action.value};
            break;
        default:
            return state;
    }
}

export default detailsReducer;