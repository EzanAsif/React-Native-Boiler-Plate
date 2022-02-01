import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from '../BottomTab/';
import Notifications from '../../Screens/Notifications';
import Login from '../../Screens/Login';
import Signup from '../../Screens/Signup';
import SplashScreen from '../../Screens/Splash';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
export default function App() {
  const reducerData = useSelector(state => state);
  const {auth} = reducerData;
  const [userData, setUserData] = React.useState({});
  const [splash, setSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    if (auth.userData?.userId) {
      setUserData(auth.userData);
    } else {
      setUserData(null);
    }
  }, [reducerData]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splash ? (
          <Stack.Screen
            name="Splash"
            options={{headerShown: false}}
            component={SplashScreen}
          />
        ) : null}
        {userData?.userId ? (
          <>
            {/* <Stack.Navigator> */}
            <Stack.Screen name="Login" options={{headerShown: false}}>
              {props => <TabNavigation {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{headerShown: false}}
            />
            {/* </Stack.Navigator> */}
          </>
        ) : (
          <>
            {/* <Stack.Navigator> */}
            <Stack.Screen name="login" options={{headerShown: false}}>
              {props => <Login {...props} />}
            </Stack.Screen>
            <Stack.Screen name="signup" options={{headerShown: false}}>
              {props => <Signup {...props} />}
            </Stack.Screen>
            {/* </Stack.Navigator> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
