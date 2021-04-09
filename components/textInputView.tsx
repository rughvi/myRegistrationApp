import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AppStyles from '../styles/appStyles';

const TextInputView = (props) => {
    return(
        <View style={AppStyles.textInputView}>
            <TextInput style={AppStyles.textInput} placeholder={props.placeholder} onChangeText={props.onTextChanged} keyboardType={props.keyboardType}></TextInput>
            <FontAwesomeIcon icon={ props.faicon } />
        </View>
    )
};

TextInputView.propTypes = {
    placeholder: PropTypes.string,
    faicon: PropTypes.object,
    onTextChanged: PropTypes.func
}

export default TextInputView;