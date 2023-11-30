import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
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
      <Text style={styles.heading}>Hello friend.</Text>
      <TextInput
        style={[
          styles.input,
          styles.rounded,
          { width: '80%' },
          usernameError && styles.errorInput,
        ]}
        placeholder="Username"
        onChangeText={text => {
          setUserName(text);
          setUsernameError(null);
        }}
        value={username}
        onFocus={() => setUsernameError(null)}
      />
      {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
      <TextInput
        style={[
          styles.input,
          styles.rounded,
          { width: '80%' },
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
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      <TouchableOpacity
        style={[styles.loginButton, styles.rounded, { width: '80%' }]}
        onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgetPasswordLink}>
        <Text style={styles.forgetPasswordText}>Forget password?</Text>
      </TouchableOpacity>
      <View style={styles.signupLink}>
        <Text style={styles.signupText} onPress={handleSignUpLinkPress}>
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
    backgroundColor: '#f0f0f0',
    transform: [{ translateY: -50 }],
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
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
    backgroundColor: 'blue',
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
    color: 'blue',
  },
  signupLink: {
    position: 'absolute',
    bottom: 20,
  },
  signupText: {
    color: 'blue',
  },
});
