import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Password = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.container}>
        <Text>{item.username}</Text>
        <Text>{item.website}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
  },
});

export default Password;
