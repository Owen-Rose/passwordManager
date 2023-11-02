import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PasswordDetails = ({ route }) => {
  const { password } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.text}>{password.username}</Text>
      <Text style={styles.label}>Password:</Text>
      <Text style={styles.text}>{password.password}</Text>
      <Text style={styles.label}>Website:</Text>
      <Text style={styles.text}>{password.website}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default PasswordDetails;
