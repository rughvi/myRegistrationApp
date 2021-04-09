import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AppStyles from '../styles/appStyles';

const Summary = () => {
    const details = useSelector(state => state.detailsReducer);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Details</Text>
                <Text></Text>
                <Text style={styles.key}>Email</Text>
                <Text style={styles.value}>{details.email}</Text>
                <Text></Text>
                <Text style={styles.key}>Phone</Text>
                <Text style={styles.value}>{details.phone}</Text>
                <Text></Text>
                <Text style={styles.key}>Mobile</Text>
                <Text style={styles.value}>{details.mobile}</Text>
                <Text style={styles.key}>Username</Text>
                <Text style={styles.value}>{details.username.name}</Text>
            </View>
            <View style={styles.section}>
                <Text>{details.email}</Text>
                <Text>{details.phone}</Text>
                <Text>{details.mobile}</Text>
            </View>
            <View style={styles.section}>
                <Text>{details.email}</Text>
                <Text>{details.phone}</Text>
                <Text>{details.mobile}</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    section: {
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
        fontWeight: "bold",
        fontSize:20,
    },
    key: {
        color:'gray'
    },
    value: {
        fontWeight: "bold"
    }
})
export default Summary;