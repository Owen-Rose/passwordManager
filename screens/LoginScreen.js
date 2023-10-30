import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function LoginScreen() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      Alert.alert('Login Successful, Welcome to the App');
      navigation.navigate('Home');
      setUserName('');
      setPassWord('');
    } else {
      Alert.alert('Login Failed, please enter both a username and password');
      setUserName('');
      setPassWord('');
    }
    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello friend.</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUserName(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassWord(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
