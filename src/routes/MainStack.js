import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profifle';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName={'Rumah'}>
      <Stack.Screen name="Rumah" component={Home} />
      <Stack.Screen name="Tentang Aku" component={Profile} />
      <Stack.Screen name="Detail Film" component={MovieDetail} />
    </Stack.Navigator>
  );
}
