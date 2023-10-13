import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import AddPasswordScreen from './screens/AddPasswordScreen';


export default function App() {
  const stack = createStackNavigator();


  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Login' component={LoginScreen} />
        <stack.Screen name='Home' component={HomeScreen} />
        <stack.Screen name='AddPassword' component={AddPasswordScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
