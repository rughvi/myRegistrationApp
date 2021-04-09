export interface ProgressState {
    inProgress: boolean;
    message: string;
}

const initialState: ProgressState = <ProgressState> {
    inProgress: false,
    message: 'abc'
};

const INPROGRESS: string = 'inprogress';
const FINISHEDPROGRESS: string = 'finishedprogress';
const ERRORPROGRESS: string = 'errorprogress';

export const inProgress = () => {
    return {
        type: INPROGRESS,
        message:''
    };
}

export const finishedProgress = () => {
    return {
        type: FINISHEDPROGRESS,
        message:''
    };
}

export const errorProgress = (message) => {
    return {
        type: ERRORPROGRESS,
        message: message
    };
}

const progressReducer = (state: ProgressState = initialState, action): ProgressState => {
    switch(action.type){
        case INPROGRESS:
            return <ProgressState>{ inProgress : true, message: ''};
        break;
        case FINISHEDPROGRESS:
            return <ProgressState>{ inProgress: false, message: ''};
        break;
        case ERRORPROGRESS:
            return <ProgressState>{ inProgress: false, message: action.message};
        break;
        default:
            return state;
        break;
    }
}

export default progressReducer;