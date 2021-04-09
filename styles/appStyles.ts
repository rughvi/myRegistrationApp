import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputView: {
        //flex:1,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingRight:20,
        paddingLeft:20,
        marginTop: 10,
        marginBottom: 10
    },
    textInput:{
        width:'75%'
    },
    continueButton: {
        paddingLeft: 10,
        paddingRight:10,
        justifyContent:'center',
        height: 40,
        backgroundColor: 'green',
        borderRadius: 5,
        width:'40%',
        alignItems:'center',
        margin:10
    },
    cancelButton: {
        paddingLeft: 10,
        paddingRight:10,
        justifyContent:'center',
        height: 40,
        backgroundColor: 'gray',
        borderRadius: 5,
        width:'40%',
        alignItems:'center',
        margin:10
    }
});

export default AppStyles;