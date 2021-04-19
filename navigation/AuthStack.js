/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import OnboardingScreen from '../screens/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppStack = () => {
  // return(
  //   <NavigationContainer>
  //     <Rootstackscreen/>
  //   </NavigationContainer>
  // )

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null){
        AsyncStorage.setItem('alreadylaunch', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  });

  if (isFirstLaunch === null ){
    return null;
  } else if (isFirstLaunch === true) {
    return (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    );
  } else {
    return (<SignInScreen/>);
  }
};

export default AppStack;
