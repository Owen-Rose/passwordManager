import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddPasswordScreen({ navigation, route }) {
  const [title, setTitle] = useState();
  const [website, setWebsite] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const handleSavePassword = async () => {
    const newPassword = { title, website, login, password };
    if (newPassword) {
      try {
        const passwords = await AsyncStorage.getItem('password');
        const passwordArray = passwords ? JSON.parse(passwords) : [];
        passwordArray.push(passwords);
        await AsyncStorage.setItem('password', JSON.stringify(passwordArray));
        setPassword('');
      } catch (error) {
        console.error('Error saving password: ', error);
      }
    }
  };

  const handleGeneratePassword = () => {};

  return (
    <View>
      <Text>Title</Text>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text>Website</Text>
      <TextInput
        placeholder="Enter website"
        value={website}
        onChangeText={setWebsite}
      />

      <Text>Login</Text>
      <TextInput
        placeholder="Enter login"
        value={login}
        onChangeText={setLogin}
      />

      <Text>Password</Text>
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleSavePassword}>
        <Text>Save Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGeneratePassword}>
        <Text> Generate Strong Password</Text>
      </TouchableOpacity>
    </View>
  );
}
