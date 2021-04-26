import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import AppStyles from '../styles/appStyles';

const Summary = ({navigation}) => {
    const details = useSelector(state => state.detailsReducer);
    const editDetails = () => {
        navigation.navigate('EmailPhone', {fromSummary: true});
    };

    const editUsername = () => {
        navigation.navigate('UsernameSuggestion', {fromSummary: true});
    };

    const editTCs = () => {
        navigation.navigate('TermsAndConditions', {fromSummary: true});
    };

    const onSubmit = () => {

    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>                
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeader}>Email Phone</Text>
                    <TouchableOpacity onPress={editDetails}>                    
                        <FontAwesomeIcon icon={ faPen } />
                    </TouchableOpacity>
                </View>                
                <Text></Text>
                <Text style={styles.key}>Email</Text>
                <Text style={styles.value}>{details.email}</Text>
                <Text></Text>
                <Text style={styles.key}>Phone</Text>
                <Text style={styles.value}>{details.phone}</Text>
                <Text></Text>
                <Text style={styles.key}>Mobile</Text>
                <Text style={styles.value}>{details.mobile}</Text>
            </View>
            <View style={styles.section}>                
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeader}>Username</Text>
                    <TouchableOpacity onPress={editUsername}>                    
                        <FontAwesomeIcon icon={ faPen } />
                    </TouchableOpacity>
                </View>
                {/* <Text style={styles.key}>Preferred</Text> */}
                <Text style={styles.value}>{details.username.name}</Text>
            </View>
            <View style={styles.section}>                
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeader}>T&Cs</Text>
                    <TouchableOpacity onPress={editTCs}>                    
                        <FontAwesomeIcon icon={ faPen } />
                    </TouchableOpacity>
                </View>
                {/* <Text style={styles.key}>Accepted</Text> */}
                <Text style={styles.value}>{details.termsAndConditions}</Text>
            </View>
            <TouchableOpacity style={[AppStyles.continueButton, styles.submitButton]} onPress={() => onSubmit()}>
                <Text style={{color:'white'}}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
    },
    section: {
        width:'90%',
        justifyContent:'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        paddingRight:20,
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20,
        marginLeft:10,
        marginRight:10,
        marginTop: 10,
        marginBottom: 10
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        fontWeight: "bold",
        fontSize:20
    },
    key: {
        color:'gray'
    },
    value: {
        fontWeight: "bold"
    },
    editButton: {
        position: 'relative',
        left:     0,
        top:      0,
    },
    submitButton: {
        //flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems:'center'
    }
})
export default Summary;