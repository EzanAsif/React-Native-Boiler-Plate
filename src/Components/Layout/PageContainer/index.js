import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Styles from './style';
const PageContainer = ({children}) => {
  return (
    <ScrollView>
      <View style={Styles}>{children}</View>
    </ScrollView>
  );
};

export default PageContainer;
