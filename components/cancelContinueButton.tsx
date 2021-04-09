import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AppStyles from '../styles/appStyles';

const CancelContinueButton = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={AppStyles.cancelButton} onPress={props.onCancelPress}>
                <Text style={{color:'white'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyles.continueButton} onPress={props.onContinuePress}>
                <Text style={{color:'white'}}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
export default CancelContinueButton;