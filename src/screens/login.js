import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {AuthContext} from '../../context/auth-provider';

function Login({navigation}) {
  const {login, error, setError} = useContext(AuthContext);
  const [data, setData] = useState({
    email: '',
    password: '',
    isValidEmail: true,
    isValidPassword: true,
    isLoading: false,
  });
  const isValidInformation = () => {
    if (data.email.trim() === '') {
      setData({
        ...data,
        isValidEmail: false,
      });
      return false;
    }
    if (data.password.trim() === '' || data.password.length < 6) {
      setData({
        ...data,
        isValidPassword: false,
      });
      return false;
    } else {
      return true;
    }
  };
  const textInputChanged = (val, fieldName) => {
    if (fieldName == 'email') {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
      });
    }
    if (fieldName == 'password') {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    }
  };
  const SignInNow = () => {
    if (isValidInformation()) {
      setData({
        ...data,
        isLoading: true,
      });
      login(data.email, data.password);
    }
  };

  const forgotPassword = () => {
    Alert.alert(
      'Sorry!',
      'This feature is not available yet. May be available in next update. You can always create a new account.',
      ['Ok'],
    );
  };
  if (error != null) {
    console.log(error);
    let errorMessage = null;
    if (
      error ==
      'Error: [auth/invalid-email] The email address is badly formatted.'
    ) {
      errorMessage = 'Please enter a valid email address. example@gmail.com';
    }
    if (
      error ==
      'Error: [auth/wrong-password] The password is invalid or the user does not have a password.'
    ) {
      errorMessage = 'Wrong Password! Please try again with correct password.';
    }
    if (
      error ==
      'Error: [auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.'
    ) {
      errorMessage = 'Wrong Email or Password! Please try again.';
    }
    Alert.alert('Authentication Error!', errorMessage, [
      {
        text: 'OK',
        onPress: () => {
          setError(null);
          setData({
            ...data,
            isValidEmail: true,
            isValidPassword: true,
            email: '',
            password: '',
            isLoading: false,
          });
        },
      },
    ]);
  }

  const loadingIndicator = (
    <View
      style={{
        justifyContent: 'center',
        backgroundColor: '#fe6e58',
        flex: 1,
        alignItems: 'center',
      }}>
      <ActivityIndicator size={60} color="white" />
    </View>
  );

  return data.isLoading ? (
    loadingIndicator
  ) : (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/donateblood.png')}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign In</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputConatiner}>
            <Text style={styles.labelText}>Email Address</Text>
            <TextInput
              style={styles.textInput}
              autoFocus={true}
              textContentType="emailAddress"
              onChangeText={(e) => textInputChanged(e, 'email')}
            />
            {!data.isValidEmail && (
              <Text style={styles.errorMessage}>Email is Required </Text>
            )}
          </View>
          <View style={styles.inputConatiner}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.textInput}
              textContentType="password"
              maxLength={15}
              minLength={5}
              secureTextEntry={true}
              onChangeText={(e) => textInputChanged(e, 'password')}
            />
            {!data.isValidPassword && (
              <Text style={styles.errorMessage}>
                Required & must be at least 6 characters
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.forgotConatiner}
          onPress={() => forgotPassword()}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => SignInNow()}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.newUserText}>I'm new user. </Text>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe6e58',
  },
  headerContainer: {
    height: '35%',
    backgroundColor: '#fe6e58',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    padding: 10,
    height: '70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10,
  },
  headerImage: {
    width: 200,
    height: 200,
  },
  loginTextContainer: {
    padding: 10,
    alignItems: 'center',
  },
  loginText: {
    // fontFamily: 'Helvetica-Bold-Font',
    fontSize: 18,
  },
  formContainer: {
    alignItems: 'center',
  },
  inputConatiner: {
    width: '93%',
  },
  labelText: {
    padding: 5,
    color: '#666666',
  },
  textInput: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f2f2f2',
  },
  forgotConatiner: {
    padding: 10,
    alignItems: 'flex-end',
  },
  forgotText: {
    color: 'black',
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#fe6e58',
    padding: 15,
    width: '93%',
    borderRadius: 7,
    alignItems: 'center',
  },
  signInContainer: {
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: 'row',
    padding: 10,
    marginTop: '7%',
    justifyContent: 'center',
  },
  errorMessage: {
    color: 'red',
  },
  signUpText: {
    color: '#fe6e58',
    // fontFamily: 'Helvetica-Bold-Font',
    fontSize: 16,
    padding: 1,
  },
  newUserText: {
    fontSize: 16,
  },
});
export default Login;
