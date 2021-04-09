import React from 'react';
import {SafeAreaView, View, Text, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ProgressState} from '../reducers/progressReducer.ts';
import { getUsernameSuggestions } from '../thunkActions/username.ts';
import { SuggestedUsername } from '../reducers/usernamesReducer.ts';
import { Details, updateUsername } from '../reducers/detailsReducer.ts';
import AppStyles from '../styles/appStyles.ts';
import CancelContinueButton from './cancelContinueButton';
import RadioButton from './radioButton';

const UsernameSuggestion = ({navigation, props}) => {
    const progress: ProgressState = useSelector(state => state.progressReducer);
    const details:Details = useSelector(state => state.detailsReducer);
    const usernameSuggestions: SuggestedUsername[] = useSelector(state => state.usernameReducer)
    const dispatch = useDispatch();
    let [usernames, setUsernames] = React.useState([])

    React.useEffect(() => {
        console.log('useEffect');
        dispatch(getUsernameSuggestions(''));
    }, []);

    const usernamesView = usernameSuggestions.map(u => {
        return (<View style={styles.listItem} key={u.id}>
                    <RadioButton title={u.name} value={u.id} isChecked={details.username.name === u.name} onSelect={() => onSelectUsername(u)} ></RadioButton>
                </View>)
    });

    const onSelectUsername = (username: SuggestedUsername) => {
        console.log(username);
        dispatch(updateUsername(username));
    }

    const onContinue = () => {
        navigation.navigate('Summary')
    }

    return (        
        <View style={AppStyles.container}>
            <Text>Please choose a username from below</Text>
            {!progress.inProgress && usernamesView}
            {progress.inProgress && <ActivityIndicator></ActivityIndicator>}
            {!progress.inProgress && <CancelContinueButton onCancelPress={() => navigation.navigate('EmailPhone')} onContinuePress={() => onContinue()}></CancelContinueButton>}
        </View>        
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
    }
});

export default UsernameSuggestion;