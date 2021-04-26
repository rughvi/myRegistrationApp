import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import EmailPhone from '../components/emailPhone';
import Summary from '../components/summary';
import UsernameSuggestion from '../components/usernameSuggestion';
import TermsAndConditions from '../components/termsAndConditions';

const Stack = createStackNavigator();

const AppNavigation = () => {     
  return (      
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome'}} />
                <Stack.Screen name="EmailPhone" component={EmailPhone} options={{ title: 'Details'}} />                
                <Stack.Screen name="UsernameSuggestion" component={UsernameSuggestion} options = {{ title: 'Username Suggestion'}} />
                <Stack.Screen name="Summary" component={Summary} options = {{ title: 'Summary'}} />
                <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options = {{ title: 'T&Cs'}} />
            </Stack.Navigator>
        </NavigationContainer>          
  );
};

export default AppNavigation;