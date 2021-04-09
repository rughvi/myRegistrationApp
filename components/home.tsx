import React from 'react';
import {View, SafeAreaView, Text, Button, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import AppStyles from '../styles/appStyles.ts';

const Home = ({navigation}) => {
    return(
        <SafeAreaView style={AppStyles.container}>            
            <Text>Welcome, click 'Start Now' to continue.</Text>
            <TouchableOpacity style={AppStyles.continueButton} onPress={() => navigation.navigate('EmailPhone')}>
                <Text style={{color:'white'}}>Start Now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default Home;