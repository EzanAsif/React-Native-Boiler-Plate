/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import StackNavigation from './src/Navigation/Stack';
import 'react-native-gesture-handler';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {store} from './src/Store/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userDataFromAsyncStorage} from './src/Store/Reducers/AuthReducer';
const getData = async () => {
  try {
    let value = await AsyncStorage.getItem('token').then(res => {
      return res;
    });
    return value;
  } catch (e) {
    console.log(e);
  }
};

const UserAuthenticated = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(`this is state`);
  console.log(state);
  React.useEffect(() => {
    (async () => {
      let value = getData().then(res => {
        console.log('this is res in APp');
        console.log(res);
        let v = JSON.parse(res);
        if (v?.userId) {
          dispatch(userDataFromAsyncStorage(v));
        }
      });
    })().catch(err => {
      console.error(err);
    });
  }, []);

  return null;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <UserAuthenticated />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StackNavigation />
    </Provider>
  );
};

export default App;
