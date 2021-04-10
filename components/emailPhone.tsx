import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import Toast from 'react-native-toast-message';
import TextInputView from './textInputView';
import CancelContinueButton from './cancelContinueButton';
import { faCoffee, faEnvelope, faPhoneAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import AppStyles from '../styles/appStyles';
import {updateEmailPhone, Details} from '../reducers/detailsReducer.ts';

const EmailPhone = ({navigation, props}) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const details: Details = useSelector(state => state.detailsReducer);

    useEffect(() => {
        setEmail(details.email);
        setPhone(details.phone);
        setMobile(details.mobile);
    }, []);

    
    const dispatch = useDispatch();
    const onContinue = () => {
        if(email === '' ){
            displayToast('error', '', 'Email is empty');
            return;
        }

        if(phone === ''){
            displayToast('error', '', 'Phone is empty');
            return;
        }

        if(mobile === ''){
            displayToast('error', '', 'Mobile is empty');
            return;
        }
        details.email = email;
        details.phone = phone;
        details.mobile = mobile;
        dispatch(updateEmailPhone(details));
        navigation.navigate('UsernameSuggestion');
    };

    const displayToast = (type:string, message1: string, message2: string) => {
        Toast.show({
            type: type,
            text1: message1,
            text2: message2,
            position: 'bottom',
            bottomOffset: 100
        });
    }

    return(
        <SafeAreaView style={AppStyles.container} >
            <TextInputView value={email} placeholder="Email" faicon={ faEnvelope } onTextChanged={setEmail} keyboardType="email-address"></TextInputView>
            <TextInputView value={phone} placeholder="Phone" faicon={ faPhoneAlt } onTextChanged={setPhone} keyboardType="phone-pad"></TextInputView>
            <TextInputView value={mobile} placeholder="Mobile" faicon={ faMobileAlt } onTextChanged={setMobile} keyboardType="phone-pad"></TextInputView>
            <CancelContinueButton onCancelPress={() => navigation.navigate('Home')} onContinuePress={() => onContinue()}></CancelContinueButton>
        </SafeAreaView>
    );
};
export default EmailPhone;