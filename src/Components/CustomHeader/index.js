import {View, Text} from 'react-native';
import React from 'react';

const CustomHeader = props => {
  const RightComp = props?.rightComponent;
  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        backgroundColor: '#323232',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Text style={{color: 'white', maxWidth: '70%'}}>{props?.title}</Text>
      {RightComp ? <RightComp /> : null}
    </View>
  );
};

export default CustomHeader;
