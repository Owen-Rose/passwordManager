import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PasswordDetails = ({ route }) => {
  const { password: initialPassword } = route.params;
  const [password, setPassword] = useState(initialPassword);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSave = () => {
    // Implement your save logic here
    console.log('Password updated:', password);
    setIsEditMode(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.text}>{password.username}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password:</Text>
          {isEditMode ? (
            <TextInput
              style={styles.editableText}
              value={password.password}
              onChangeText={(text) => setPassword({ ...password, password: text })}
            />
          ) : (
            <Text style={styles.text}>{password.password}</Text>
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Website:</Text>
          {isEditMode ? (
            <TextInput
              style={styles.editableText}
              value={password.website}
              onChangeText={(text) => setPassword({ ...password, website: text })}
            />
          ) : (
            <Text style={styles.text}>{password.website}</Text>
          )}
        </View>
      </View>

      {isEditMode && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      )}

      {!isEditMode && (
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditMode(true)}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#141432',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
    marginBottom: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#D5D6FD',
  },
  text: {
    fontSize: 16,
    marginTop: 4,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 4,
  },
  editableText: {
    fontSize: 16,
    marginTop: 4,
    borderBottomWidth: 1,
    paddingBottom: 4,
    color: 'white',
    borderColor: '#6FD09A',
  },
  saveButton: {
    backgroundColor: '#6FD09A',
    padding: 16,
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#6FD09A',
    padding: 16,
    alignItems: 'center',
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PasswordDetails;
