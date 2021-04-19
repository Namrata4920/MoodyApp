/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Dimensions,StyleSheet ,View , Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding styles={styles.containerstyles}
        onSkip={() => navigation.replace('SignInScreen')}
        onDone={() => navigation.navigate('SignInScreen')}
        pages={[
            {
            backgroundColor: '#E0C3FC',
            image: <Image source={require('../Images/HP.jpg')} style={styles.logo}/>,
            title: "Music World",
            subtitle: 'connect to yourself',
            },
            {
              backgroundColor: '#F6F4A0',
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
    borderRadius:100,
  },
  containerstyles: {
    backgroundColor: 'yellow',
  },
});


