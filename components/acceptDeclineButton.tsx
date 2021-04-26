import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AppStyles from '../styles/appStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {TnCSelection} from '../enums/tncSelection';

const AcceptDeclineButton = (props) => {
    const declineStyle = (props.termsAndConditions === TnCSelection.Decline )? AppStyles.continueButton : AppStyles.cancelButton;
    const acceptStyle = (props.termsAndConditions === TnCSelection.Accept )? AppStyles.continueButton : AppStyles.cancelButton;
    return(
        <View style={styles.container}>
            <TouchableOpacity style={declineStyle} onPress={props.onCancelPress}>
                <Text style={{color:'white'}}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={acceptStyle} onPress={props.onContinuePress}>
                <Text style={{color:'white'}} >Accept</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    section : {
        flexDirection: 'row'
    }
})
export default AcceptDeclineButton;