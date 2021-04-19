/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Gallery from '../screens/Gallery';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode="screen">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Gallery" component={Gallery} />
        </Stack.Navigator>
    );
};

export default AppStack;

