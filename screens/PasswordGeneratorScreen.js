import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import Slider from 'react-native-slider';
import { CheckBox } from 'react-native-elements';

const PasswordGeneratorScreen = ({ navigation }) => {
  const [password, setPassword] = useState(generatePassword());
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(true);
  const [includeDigits, setIncludeDigits] = useState(true);

  function generatePassword() {
    const charset = [];
    if (includeLowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (includeUppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (includeSpecialCharacters) charset.push('!@#$%^&*()_-+=<>?/');
    if (includeDigits) charset.push('0123456789');

    const passwordArray = [];
    for (let i = 0; i < passwordLength; i++) {
      const randomCharset =
        charset[Math.floor(Math.random() * charset.length)];
      const randomChar =
        randomCharset[Math.floor(Math.random() * randomCharset.length)];
      passwordArray.push(randomChar);
    }

    return passwordArray.join('');
  }

  const handleGeneratePassword = () => {
    setPassword(generatePassword());
  };

  const handleSavePassword = () => {
    // logic for saving password
  };

  return (
    <View style={styles.container}>
      <View style={[{alignItems: 'center'}]}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.passwordInput,
            { backgroundColor: '#272650', color: '#D5D6FD' },
          ]}
          value={password}
          editable={false}
        />
        <Button
          title="Generate"
          onPress={handleGeneratePassword}
          color="#6FD09A"
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={{ color: '#D5D6FD' }}>Password Length: {passwordLength}</Text>
        <Slider
          value={passwordLength}
          onValueChange={(value) => setPasswordLength(Math.round(value))}
          minimumValue={8}
          maximumValue={20}
          step={1}
          minimumTrackTintColor="#6FD09A"
          thumbTintColor="#6FD09A"
        />
      </View>

      <View style={styles.optionsContainer}>
        <CheckBox
          title="Lowercase Letters"
          checked={includeLowercase}
          onPress={() => setIncludeLowercase(!includeLowercase)}
          textStyle={{ color: '#D5D6FD' }}
          containerStyle={{ backgroundColor: '#272650' }}
        />
        <CheckBox
          title="Uppercase Letters"
          checked={includeUppercase}
          onPress={() => setIncludeUppercase(!includeUppercase)}
          textStyle={{ color: '#D5D6FD' }}
          containerStyle={{ backgroundColor: '#272650' }}
        />
        <CheckBox
          title="Digits"
          checked={includeDigits}
          onPress={() => setIncludeDigits(!includeDigits)}
          textStyle={{ color: '#D5D6FD' }}
          containerStyle={{ backgroundColor: '#272650' }}
        />
        <CheckBox
          title="Special Characters"
          checked={includeSpecialCharacters}
          onPress={() =>
            setIncludeSpecialCharacters(!includeSpecialCharacters)
          }
          textStyle={{ color: '#D5D6FD' }}
          containerStyle={{ backgroundColor: '#272650' }}
        />
      </View>

      <Button
        title="Save Password"
        onPress={() => navigation.navigate('AddPassword')}
        color="#6FD09A"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#141432',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#D5D6FD',
    borderRadius: 5,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    
  },
});

export default PasswordGeneratorScreen;
