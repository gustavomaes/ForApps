import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import NavigationView from './navigation';
import configureStore from './redux/configureStore';
import theme from './theme';

console.disableYellowBox = true;

const stores = configureStore();

const App = () => {
  const [token, setToken] = useState(null);
  const [tokenVerified, setTokenVerified] = useState(false);

  useEffect(() => {
    AsyncStorage.clear();
    AsyncStorage.getItem('token')
      .then(value => {
        console.log('App token> ', value);
        setToken(value);
        setTokenVerified(true);
      })
      .catch(() => {
        setTokenVerified(true);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={stores}>{tokenVerified && <NavigationView token={token} />}</Provider>
    </ThemeProvider>
  );
};

export default App;
