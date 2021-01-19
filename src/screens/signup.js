import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../context/auth-provider';

function Signup({navigation}) {
  const {register} = useContext(AuthContext);
  const {error, setError} = useContext(AuthContext);
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isValidEmail: true,
    isValidPassword: true,
    isPasswordSame: true,
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
    }
    if (data.confirmPassword.trim() != data.password.trim()) {
      setData({
        ...data,
        isPasswordSame: false,
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
    if (fieldName == 'confirmPassword') {
      setData({
        ...data,
        confirmPassword: val,
        isPasswordSame: true,
      });
    }
  };
  const SignUpNow = () => {
    if (isValidInformation()) {
      setData({
        ...data,
        isLoading: true,
      });
      register(data.email, data.password);
    }
  };

  if (error != null) {
    // console.log(error);
    let errorMessage = null;
    if (
      error ==
      'Error: [auth/invalid-email] The email address is badly formatted.'
    ) {
      errorMessage = 'Please enter a valid email address. example@gmail.com';
    }
    if (
      error ==
      'Error: [auth/email-already-in-use] The email address is already in use by another account.'
    ) {
      errorMessage =
        'Email is already in use by another account! Try again with different email.';
    }
    Alert.alert('Sign Up Error!', errorMessage, [
      {
        text: 'OK',
        onPress: () => {
          setError(null);
          setData({
            ...data,
            isValidEmail: true,
            isValidPassword: true,
            isPasswordSame: true,
            email: '',
            password: '',
            confirmPassword: '',
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
      <View style={styles.createAccountContainer}>
        <View style={styles.createAccountTextContainer}>
          <Text style={styles.createAccountText}>Create Account</Text>
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
              secureTextEntry={true}
              onChangeText={(e) => textInputChanged(e, 'password')}
            />
            {!data.isValidPassword && (
              <Text style={styles.errorMessage}>
                Required & must be at least 6 characters{' '}
              </Text>
            )}
          </View>
          <View style={styles.inputConatiner}>
            <Text style={styles.labelText}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={(e) => textInputChanged(e, 'confirmPassword')}
            />
            {!data.isPasswordSame && (
              <Text style={styles.errorMessage}>Passwords didn't match! </Text>
            )}
          </View>
        </View>
        <View style={styles.signUpContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => SignUpNow()}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainerlast}>
          <Text style={styles.alreadyText}>Already have an account? </Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Sign In</Text>
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
    height: '28%',
    backgroundColor: '#fe6e58',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountContainer: {
    padding: 10,
    height: '78%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  headerImage: {
    width: 160,
    height: 160,
  },
  createAccountTextContainer: {
    padding: 10,
    alignItems: 'center',
  },
  createAccountText: {
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
  signUpContainer: {
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#fe6e58',
    padding: 15,
    width: '93%',
    borderRadius: 7,
    marginTop: '5%',
    alignItems: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 18,
  },
  loginContainerlast: {
    flexDirection: 'row',
    padding: 10,
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fe6e58',
    // fontFamily: 'Helvetica-Bold-Font',
    fontSize: 16,
    padding: 1,
  },
  alreadyText: {
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
  },
});

export default Signup;
