import React from 'react';
import {SafeAreaView, View, Text, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ProgressState} from '../reducers/progressReducer.ts';
import { getUsernameSuggestions } from '../thunkActions/username.ts';
import { SuggestedUsernames } from '../reducers/usernamesReducer.ts';
import { Details } from '../reducers/detailsReducer.ts';
import AppStyles from '../styles/appStyles.ts';
import CancelContinueButton from './cancelContinueButton';

const UsernameSuggestion = ({navigation, props}) => {
    const progress: ProgressState = useSelector(state => state.progressReducer);
    const details:Details = useSelector(state => state.detailsReducer);
    const usernameSuggestions: SuggestedUsernames[] = useSelector(state => state.usernameReducer)
    const dispatch = useDispatch();
    let [usernames, setUsernames] = React.useState([])

    React.useEffect(() => {
        dispatch(getUsernameSuggestions(''));
    }, []);

    const usernamesView = usernameSuggestions.map(u => {
        return <Text key={u.id}>{u.name}</Text>
    });

    const onContinue = () => {
        navigation.navigate('Summary')
    }

    return (        
        <View style={AppStyles.container}>
            {!progress.inProgress && usernamesView}
            {progress.inProgress && <ActivityIndicator></ActivityIndicator>}
            {!progress.inProgress && <CancelContinueButton onCancelPress={() => navigation.navigate('EmailPhone')} onContinuePress={() => onContinue()}></CancelContinueButton>}
        </View>        
    )
}

export default UsernameSuggestion;