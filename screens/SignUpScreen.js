import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User signed up successfully!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: '#D5D6FD' }]}>Sign up</Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: '#272650', color: 'white', borderColor: '#D5D6FD' },
        ]}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholderTextColor="#D5D6FD"
      />
      <TextInput
        style={[
          styles.input,
          { backgroundColor: '#272650', color: 'white', borderColor: '#D5D6FD' },
        ]}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        placeholderTextColor="#D5D6FD"
      />
      <TouchableOpacity
        style={[
          styles.signupButton,
          { backgroundColor: '#6FD09A', borderRadius: 8, marginTop: 16 },
        ]}
        onPress={handleSignUp}
      >
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={[styles.link, { color: '#D5D6FD' }]} onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141432',
  },
  header: {
    fontSize: 32,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 8,
  },
  signupButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  signupButtonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  footerContainer: {
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#D5D6FD',
    textAlign: 'center',
  },
  link: {
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
