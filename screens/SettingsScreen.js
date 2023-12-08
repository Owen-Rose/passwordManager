import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsPage = () => {
  const [isTouchIdEnabled, setIsTouchIdEnabled] = useState(false);
  const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
  const [isPasscodeEnabled, setIsPasscodeEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Use Touch ID</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#6fd09a' }}
          thumbColor={isTouchIdEnabled ? '#6fd09a' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsTouchIdEnabled}
          value={isTouchIdEnabled}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Use Face ID</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#6fd09a' }}
          thumbColor={isFaceIdEnabled ? '#6fd09a' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsFaceIdEnabled}
          value={isFaceIdEnabled}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Use Passcode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#6fd09a' }}
          thumbColor={isPasscodeEnabled ? '#6fd09a' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsPasscodeEnabled}
          value={isPasscodeEnabled}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Personal Info</Text>
        <Icon name="arrow-right" size={20} color="#ffffff" />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Notifications</Text>
        <Icon name="arrow-right" size={20} color="#ffffff" />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Security</Text>
        <Icon name="arrow-right" size={20} color="#ffffff" />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Help</Text>
        <Icon name="arrow-right" size={20} color="#ffffff" />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Privacy Policy</Text>
        <Icon name="arrow-right" size={20} color="#ffffff" />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Terms of Use</Text>
        <Icon name="arrow-right" size={20} color="#ffffff" />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Log Out</Text>
        <Icon name="arrow-right" size={20} color="#ffffff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141432',
  },
  optionContainer: {
    backgroundColor: '#272650',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: '#ffffff',
  },
});

export default SettingsPage;
