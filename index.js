/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigation from './navigation/appNavigation.tsx';
import App from './App.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
