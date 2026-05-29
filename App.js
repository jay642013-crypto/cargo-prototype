import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Rankings" component={LeaderboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}