import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddPasswordScreen({ navigation }) {
  const [website, setWebsite] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSavePassword = async () => {
    const newPassword = { title: website, website, login, password };
    if (newPassword) {
      try {
        const passwords = await AsyncStorage.getItem('password');
        const passwordArray = passwords ? JSON.parse(passwords) : [];
        passwordArray.push(newPassword);
        await AsyncStorage.setItem('password', JSON.stringify(passwordArray));
        setWebsite('');
        setLogin('');
        setPassword('');
      } catch (error) {
        console.error('Error saving password: ', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Website</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter website"
        value={website}
        onChangeText={setWebsite}
        placeholderTextColor="#D5D6FD"
      />

      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter login"
        value={login}
        onChangeText={setLogin}
        placeholderTextColor="#D5D6FD"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#D5D6FD"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
        <Text style={styles.buttonText}>Save Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PasswordGenerator')}>
        <Text style={styles.buttonText}>Generate Strong Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#141432',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#D5D6FD',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#272650',
    backgroundColor: '#272650',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#6FD09A',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
