import React from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {getHeaderTitle} from '@react-navigation/elements';
import CustomHeader from '../../Components/CustomHeader';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DemoScreen from '../../Screens/DemoScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <CustomHeader
              title={title}
              style={options.headerStyle}
              rightComponent={() => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('Notifications');
                    }}>
                    <Text style={{color: 'white'}}>Bell Icon</Text>
                  </TouchableOpacity>
                );
              }}
            />
          );
        },
      }}>
      <Tab.Screen name="Screen1">
        {props => <DemoScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Screen2">
        {props => <DemoScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Screen3">
        {props => <DemoScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
