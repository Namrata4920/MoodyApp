/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Dimensions,StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
        onSkip={() => navigation.replace('SignInScreen')}
        onDone={() => navigation.navigate('SignInScreen')}
        pages={[
            {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../Images/logo.png')} style={styles.logo}/>,
            title: "Music World",
            subtitle: 'connect to yourself',
            },
            {
              backgroundColor: '#fdeb93',
              image: <Image source={require('../Images/logo.png')} style={styles.logo} />,
              title: "Let's enjoy some music",
              subtitle: 'enjoy here',
              },
        ]}
    />
  );
};

export default OnboardingScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  logo: {
    width: height_logo,
    height: height_logo,
  },
});
