import {View, Text} from 'react-native';
import React from 'react';

function Notifications(props) {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          alignSelf: 'flex-end',
          marginRight: 40,
          marginTop: 20,
          padding: 20,
          backgroundColor: '#323232',
          borderRadius: 100,
          color: '#fff',
        }}
        onPress={() => props.navigation.goBack()}>
        X
      </Text>
      <Text>This is NOtifications screen</Text>
    </View>
  );
}

export default Notifications;
