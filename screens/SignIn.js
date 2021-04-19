/* eslint-disable prettier/prettier */
import React,{useState, useContext} from 'react';

import {View,
    Text,
    StyleSheet,
    TouchableOpacity,Dimensions, Image , KeyboardAvoidingView} from 'react-native';
import FormInput from '../Components/Forminput';
import FormButton from '../Components/Formbutton';
import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../navigation/AuthProvider';

const SignInScreen = ({navigation,labelValue, placeholderText, iconType, ...rest}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [enableshift , setenableShift] = useState(false);

  const {login} = useContext(AuthContext);
    return (
        <LinearGradient colors={['#8894DB', '#EC91E5','#F2CE90']}
        style={styles.mainbox}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        >
          <KeyboardAvoidingView behavior="padding" enabled={enableshift} style={{ flex: 1}}>
          <View style={styles.container1}>
            <Image source={require('../Images/HP.jpg')} style={styles.logo}/>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Moody App</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                onFocus={() => setenableShift(false)}
                placeholderText="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userpassword) => setPassword(userpassword)}
                onFocus={() => setenableShift(false)}
                placeholderText="password"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.navButtonText}>Forgot password?</Text>
            </TouchableOpacity>

            <FormButton
              buttonTitle="Sign In"
              onPress={()=> login(email , password)}
            />

            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.navButtonText}>Don't have an account ? Create here.</Text>
            </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
    );
};

export default SignInScreen;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    mainbox: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      flex: 1,
    },
    container1: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      marginTop:50,
    },
    logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 100,
    },
    text: {
      fontFamily: 'NotoSerif-BoldItalic',
      fontSize: 28,
      marginBottom: 5,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 7,
    },
    forgotButton: {
      marginVertical: 5,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '800',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
      marginTop: 5,
    },
  });
