/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <LinearGradient colors={['#B2EBF2', '#00BCD4']} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FormButton;

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 5,
    width: '100%',
    height: windowHeight / 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
