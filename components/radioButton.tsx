import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle as faCircleS } from '@fortawesome/free-solid-svg-icons';
import {faCircle as faCircleR} from '@fortawesome/free-regular-svg-icons';

const RadioButton = (props) => {
    return(
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>
            <Text style={styles.text}>{props?.title}</Text>
            <FontAwesomeIcon style={styles.icon} icon={ props.isChecked? faCircleS : faCircleR } />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        //flex:1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    text:{
        margin: 10
    },
    icon: {
        margin: 10
    }
});

export default RadioButton;