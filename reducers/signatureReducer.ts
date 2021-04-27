export interface Signature {
    data: string
}

const initialState: Signature = {
    data: ''
}

const UPDATESIGNATURE: string = 'updatesignature';

export const updateSignature = (data: string) => {
    return {
        type: UPDATESIGNATURE,
        value: data
    }
}

const signatureReducer = (state: Signature = initialState, action) => {
    switch(action.type){        
        case UPDATESIGNATURE:
            return {...state, data: action.value};
        break;
        default:
            return state;
        break;
    }
}

export default signatureReducer;