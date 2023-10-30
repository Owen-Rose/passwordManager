import React from 'react';
import { View, Text } from 'react-native';

const Password = ({ title, website, login, password }) => {
  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Website: {website}</Text>
      <Text>Login: {login}</Text>
      <Text>Password: {password}</Text>
    </View>
  );
};

export default Password;
