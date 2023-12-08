import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === '' || password === '') {
      if (username === '') {
        setUsernameError('Username is required');
      } else {
        setUsernameError(null);
      }

      if (password === '') {
        setPasswordError('Password is required');
      } else {
        setPasswordError(null);
      }
      return;
    }

    Alert.alert('Login Successful, Welcome to the App');
    navigation.navigate('Home');
    setUserName('');
    setPassWord('');
  };

  const handleSignUpLinkPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={[styles.heading, { color: '#D5D6FD' }]}>Passlock</Text>
      {usernameError && (
        <Text
          style={[styles.errorText, { color: '#D5D6FD', marginBottom: 10 }]}>
          {usernameError}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          styles.rounded,
          { width: '80%', backgroundColor: '#272650', color: 'white' },
          usernameError && styles.errorInput,
        ]}
        placeholder="Username"
        onChangeText={text => {
          setUserName(text);
          setUsernameError(null);
        }}
        value={username}
        onFocus={() => setUsernameError(null)}
        placeholderTextColor="#D5D6FD"
      />
      {passwordError && (
        <Text
          style={[styles.errorText, { color: '#D5D6FD', marginBottom: 10 }]}>
          {passwordError}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          styles.rounded,
          { width: '80%', backgroundColor: '#272650', color: 'white' },
          passwordError && styles.errorInput,
        ]}
        placeholder="Password"
        onChangeText={text => {
          setPassWord(text);
          setPasswordError(null);
        }}
        value={password}
        onFocus={() => setPasswordError(null)}
        secureTextEntry
        placeholderTextColor="#D5D6FD"
      />
      <TouchableOpacity
        style={[
          styles.loginButton,
          styles.rounded,
          { width: '80%', backgroundColor: '#6FD09A' },
        ]}
        onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgetPasswordLink}>
        <Text style={[styles.forgetPasswordText, { color: '#D5D6FD' }]}>
          Forget password?
        </Text>
      </TouchableOpacity>
      <View style={styles.signupLink}>
        <Text
          style={[styles.signupText, { color: '#D5D6FD' }]}
          onPress={handleSignUpLinkPress}>
          Don't have an account? Sign in
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141432',
    transform: [{ translateY: -50 }],
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  rounded: {
    borderRadius: 5,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  forgetPasswordLink: {
    marginBottom: 10,
  },
  forgetPasswordText: {
    color: '#D5D6FD',
  },
  signupLink: {
    position: 'absolute',
    bottom: 20,
  },
  signupText: {
    color: '#D5D6FD',
  },
  errorText: {
    color: '#D5D6FD',
  },
});
