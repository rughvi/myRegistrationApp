import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import AcceptDeclineButton from './acceptDeclineButton.tsx';
import {Details} from '../reducers/detailsReducer.ts';
import {updateTermsAndConditions} from '../reducers/detailsReducer.ts';
import {TnCSelection} from '../enums/tncSelection';

const TermsAndConditions = ({navigation, props, route}) => {
    const details:Details = useSelector(state => state.detailsReducer)
    const dispatch = useDispatch();
    const onAccept = () => {
        dispatch(updateTermsAndConditions(TnCSelection.Accept));
        navigation.navigate('Summary');
    };

    const onDecline = () => {
        dispatch(updateTermsAndConditions(TnCSelection.Decline));
        navigation.navigate('Summary');
    };

    return (
        <SafeAreaView style={styles.container}>
            <WebView style={styles.section}
            source = {{ uri:
         'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint' }}>
            </WebView>
            <AcceptDeclineButton termsAndConditions={details.termsAndConditions} cancelTitle='Decline' continueTitle='Accept' 
                onCancelPress={() => onDecline()} 
                onContinuePress={() => onAccept()}></AcceptDeclineButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    section: {
        flex:1
    }
})
export default TermsAndConditions;