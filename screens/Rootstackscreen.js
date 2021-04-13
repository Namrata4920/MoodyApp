/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from './Splash';
import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';

const RootStack = createStackNavigator();

const Rootstackscreen = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={Splashscreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default Rootstackscreen;
