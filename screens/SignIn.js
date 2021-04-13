/* eslint-disable prettier/prettier */
import React,{useState, useContext} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity} from 'react-native';
import FormInput from '../Components/Forminput';
import FormButton from '../Components/Formbutton';
import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../navigation/AuthProvider';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Moody App</Text>
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
            <FormButton
              buttonTitle="Sign In"
              onPress={()=> login(email , password)}
            />

            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.navButtonText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.navButtonText}>Don't have an account ? Create here.</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
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
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
