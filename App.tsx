/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import {Provider} from 'react-redux';
 import Toast from 'react-native-toast-message';
 import AppStore from './store/appStore';
 import AppNavigation from "./navigation/appNavigation.tsx";
 import mockAPIServer from './mockAPI/mockAPIServer.ts';

  if (window.server) {
    server.shutdown()
  }

  window.server = mockAPIServer;
  
  const App = () => {
    return (
        <Provider store={AppStore}>
          <AppNavigation></AppNavigation>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </Provider>
    );
  };

  export default App;
