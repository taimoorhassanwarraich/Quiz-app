import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Stats from './Stats';
import LeaderBoard from './LeaderBoard';
import QuickGuide from './QuickGuide';
import ChangePassword from './ChangePassword';
import { primary } from '../color';

const Dashboard = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: primary,
          },
          headerTitle: () => (
            <View style={{ flex: 1, alignItems: 'center', alignSelf:'center',justifyContent:'center'  }}>
              <Image
                source={require('../assets/welcome_image.jpg')}
                style={{ width: 40, height: 35 }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen name="Stats" component={Stats} />
      <Drawer.Screen name="Leaderboard" options={{ headerShown: false }} component={LeaderBoard} />
      <Drawer.Screen name="Quick Guide" component={QuickGuide} />
      <Drawer.Screen name="Change Password" component={ChangePassword} />
    </Drawer.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
