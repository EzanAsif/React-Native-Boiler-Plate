import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import PageContainer from '../../Components/Layout/PageContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeUserDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {useDispatch} from 'react-redux';

const DemoScreen = props => {
  const dispatch = useDispatch();
  const removeToken = async value => {
    try {
      await AsyncStorage.removeItem('token').then(() => {
        dispatch(removeUserDataFromAsyncStorage());
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <PageContainer>
      <Text>Screen1</Text>
      {[1, 2, 3, 4, 5, 6].map((obj, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              padding: 30,
              backgroundColor: 'black',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              removeToken();
            }}>
            <Text style={{color: 'white'}}>Logout</Text>
          </TouchableOpacity>
        );
      })}
    </PageContainer>
  );
};

export default DemoScreen;
