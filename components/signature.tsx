import React, {useRef} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SignatureCapture from 'react-native-signature-capture';
import AppStyles from '../styles/appStyles.ts';
import CancelContinueButton from '../components/cancelContinueButton';
import {updateSignature} from '../reducers/signatureReducer.ts';

const Signature = ({navigation, props, route}) => {
    const details = useSelector(state => state.detailsReducer);
    const dispatch = useDispatch();
    const signRef = useRef();

    const onContinue = () => {
        signRef.current.saveImage();
        navigation.navigate('Summary');
    }

    const onSaveEvent = (result) => {
        console.log(result);
        dispatch(updateSignature(result));
    }

    return(
        <SafeAreaView style={AppStyles.container}>
            <Text>{'\n'} Please sign below {'\n'}</Text>
            <SignatureCapture
                    ref={signRef}
                    style={[styles.signature]}
                    onSaveEvent={onSaveEvent}
                    //onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    backgroundColor="#ffffff"
                    strokeColor="#000000"
                    minStrokeWidth={4}
                    maxStrokeWidth={4}
                    viewMode={"portrait"}/>
            <CancelContinueButton onCancelPress={() => navigation.navigate('TermsAndConditions')} onContinuePress={() => onContinue()}></CancelContinueButton>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
        width:'100%', 
        // height:'100%',
        // margin: 5
    }
})
export default Signature;