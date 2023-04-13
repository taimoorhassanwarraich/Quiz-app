import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Welcome from './Screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Register from './Screens/Register';
import ChangePassword from './Screens/ChangePassword';
import RequestOtp from './Screens/RequestOtp';
import Dashboard from './Screens/Dashboard.';
import Random from './Screens/Random';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Random" component={Random} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown:false}} />
      <Stack.Screen name="RequestOtp" component={RequestOtp} options={{headerShown:false}} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />


    </Stack.Navigator>
  </NavigationContainer>
  );
}


