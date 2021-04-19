/* eslint-disable prettier/prettier */
import React,{useState, useContext} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,Image,KeyboardAvoidingView} from 'react-native';
import FormInput from '../Components/Forminput';
import FormButton from '../Components/Formbutton';
import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../navigation/AuthProvider';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [enableshift , setenableShift] = useState(false);

  const {register} = useContext(AuthContext);

    return (
        <LinearGradient style={styles.mainBox}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#8894DB', '#EC91E5','#F2CE90']}>

        <KeyboardAvoidingView behavior="padding" enabled={enableshift} style={{ flex: 1}}>
          <View style={styles.container1}>
            <Image source={require('../Images/HP.jpg')} style={styles.logo}/>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Create Account</Text>
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
            <FormInput
                labelValue={confirmpassword}
                onChangeText={(userpassword) => setConfirmPassword(userpassword)}
                onFocus={() => setenableShift(false)}
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
        </KeyboardAvoidingView>
        </LinearGradient>
    );
};

export default SignUpScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  mainBox: {
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
  },
    text: {
      fontFamily: 'NotoSerif-BoldItalic',
      fontSize: 28,
      marginBottom: 5,
      color: '#051d5f',
    },
    logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 100,
    },
    navButton: {
      marginTop: 7,
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
        marginVertical: 20,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
  });
