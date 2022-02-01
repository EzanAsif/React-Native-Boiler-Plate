import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Login = props => {
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
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={{width: '100%', height: 'auto'}}>
          <Image
            style={{
              width: '100%',
              height: 250,
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1527293797671-06c3be34418f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3R8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60',
            }}
          />
        </View>
        <View>
          <Text>Login</Text>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 2,
              borderBottomColor: '#a4a4a4',
            }}>
            <View style={{width: '100%', flexDirection: 'row', height: 50}}>
              <View>
                <MaterialIcons
                  name="alternate-email"
                  size={30}
                  color="#a4a4a4"
                />
              </View>
              <TextInput
                style={{width: '80%', height: '100%'}}
                placeholder="Email Id"
              />
            </View>
          </View>
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
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('signup');
            }}
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: '#f9f9f9',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text>Not LoggedIn?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
