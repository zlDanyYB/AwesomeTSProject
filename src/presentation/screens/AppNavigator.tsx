import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen';
import CounterM3Screen from './CounterM3Screen';

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  Counter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Counter" component={CounterM3Screen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
