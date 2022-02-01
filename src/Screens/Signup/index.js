import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {useDispatch} from 'react-redux';
const Signup = props => {
  const dispatch = useDispatch();
  const setToken = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      const v = {
        userId: '3123-123-123123-3145',
      };
      await AsyncStorage.setItem('token', JSON.stringify(v));
      await AsyncStorage.setItem('user', JSON.stringify(v));
      let value1 = await AsyncStorage.getItem('token');
      let value2 = await AsyncStorage.getItem('user').then(res => {
        console.log('inside login');
        let val = JSON.parse(res);
        console.log(val);
        dispatch(userDataFromAsyncStorage(val));
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Text>Signup</Text>
      <TouchableOpacity
        style={{
          padding: 30,
          backgroundColor: 'black',
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setToken();
        }}>
        <Text style={{color: 'white'}}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('login');
        }}
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: '#f9f9f9',
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <Text>Already SignedUp?</Text>
      </TouchableOpacity>
    </>
  );
};

export default Signup;
