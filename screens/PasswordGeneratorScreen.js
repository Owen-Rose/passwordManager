import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import { CheckBox } from 'react-native-elements';

const PasswordGeneratorScreen = () => {
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
      const randomCharset = charset[Math.floor(Math.random() * chaeset.length)];
      const randomChar =
        randomCharset[Math.floor(Math.random() * randomCharset.length)];
      passwordArray.push(randomChar);
    }

    return passwordArray.join('');
  }

  const handleGeneratePassword = () => {
    setPassword(generatePassword());
  };

  return (
    <View style={styles.container}>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          editable={false}
        />
        <Button title="Refresh" onPress={handleGeneratePassword} />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Password Length: {passwordLength}</Text>
        <Slider
          value={passwordLength}
          onValueChange={value => setPasswordLength(Math.round(value))}
          minimumValue={8}
          maximumValue={20}
          step={1}
        />
      </View>

      <View style={styles.optionsContainer}>
        <CheckBox
          title="Lowercase Letters"
          checked={includeLowercase}
          onPress={() => setIncludeLowercase(!includeLowercase)}
        />
        <CheckBox
          title="Uppercase Letters"
          checked={includeUppercase}
          onPress={() => setIncludeUppercase(!includeUppercase)}
        />
        <CheckBox
          title="Digits"
          checked={includeDigits}
          onPress={() => setIncludeDigits(!includeDigits)}
        />
        <CheckBox
          title="Special Characters"
          checked={includeSpecialCharacters}
          onPress={() => setIncludeSpecialCharacters(!includeSpecialCharacters)}
        />
      </View>

      <Button title="Wave Password" onPress={handleSavePassword} />
    </View>
  );
};
