import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import TextInputView from './textInputView';
import CancelContinueButton from './cancelContinueButton';
import { faCoffee, faEnvelope, faPhoneAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import AppStyles from '../styles/appStyles';
import {updateEmailPhone, Details} from '../reducers/detailsReducer.ts';

const EmailPhone = ({navigation, props}) => {
    const details: Details = useSelector(state => state.detailsReducer);
    const dispatch = useDispatch();
    const onContinue = () => {
        //todo : validate
        dispatch(updateEmailPhone(details));
        navigation.navigate('UsernameSuggestion');
    }

    return(
        <SafeAreaView style={AppStyles.container} >
            <TextInputView placeholder="Email" faicon={ faEnvelope } onTextChanged={text => details.email = text} keyboardType="email-address"></TextInputView>
            <TextInputView placeholder="Phone" faicon={ faPhoneAlt } onTextChanged={text => details.phone = text} keyboardType="phone-pad"></TextInputView>
            <TextInputView placeholder="Mobile" faicon={ faMobileAlt } onTextChanged={text => details.mobile = text} keyboardType="phone-pad"></TextInputView>
            <CancelContinueButton onCancelPress={() => navigation.navigate('Home')} onContinuePress={() => onContinue()}></CancelContinueButton>
        </SafeAreaView>
    );
};
export default EmailPhone;