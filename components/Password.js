import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Password = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.container}>
        <Text style={styles.usernameText}>{item.username}</Text>
        <Text style={styles.websiteText}>{item.website}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#272650', // Background color
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
  },
  usernameText: {
    color: '#D5D6FD', // Text color
  },
  websiteText: {
    color: '#D5D6FD', // Text color
  },
});

export default Password;
