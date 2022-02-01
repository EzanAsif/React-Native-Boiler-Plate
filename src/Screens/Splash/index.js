import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const index = () => {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 24}}>This is splash screen</Text>
      <ActivityIndicator color="#ffff" size="large" />
    </View>
  );
};

export default index;
