import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AppStyles from '../styles/appStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CancelContinueButton = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={props.isCheck? (props.checked? AppStyles.cancelButton: AppStyles.continueButton):AppStyles.cancelButton} onPress={props.onCancelPress}>
                <Text style={{color:'white'}}>{props.cancelTitle??'Cancel'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={props.isCheck? (props.checked? AppStyles.continueButton: AppStyles.cancelButton) : AppStyles.continueButton} onPress={props.onContinuePress}>
                <Text style={{color:'white'}} >{props.continueTitle??'Continue'}</Text>
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
export default CancelContinueButton;