/* eslint-disable prettier/prettier */
import React,{useState, useContext} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions} from 'react-native';
import FormInput from '../Components/Forminput';
import FormButton from '../Components/Formbutton';
import { AuthContext } from '../navigation/AuthProvider';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

    return (
        <View style={styles.mainBox}>
          <View style={styles.container}>
            <Text style={styles.text}>Create Account</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userpassword) => setPassword(userpassword)}
                placeholderText="password"
                secureTextEntry={true}
            />
            <FormInput
                labelValue={confirmpassword}
                onChangeText={(userpassword) => setConfirmPassword(userpassword)}
                placeholderText=" Confirm password"
                secureTextEntry={true}
            />
            <FormButton
              buttonTitle="Sign Up"
              onPress={()=> register(email, password)}
            />

            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.lastText}>already have an account! click here</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};

export default SignUpScreen;

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainBox: {
    height: height,
    backgroundColor:'lightblue',
  },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    lastText: {
        color: 'green',
        fontSize: 18,
        paddingTop: 20,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
  });
