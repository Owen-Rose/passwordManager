import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Password from '../components/Password';
import passwordData from './passwords.json';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredPasswords, setFilteredPasswords] = React.useState(passwordData);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredData = passwordData.filter((item) => {
      return (
        item.username.toLowerCase().includes(text.toLowerCase()) ||
        item.website.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFilteredPasswords(filteredData);
  };

  const handleAddPassword = () => {
    navigation.navigate('AddPassword');
  };

  const handlePasswordDetails = (item) => {
    navigation.navigate('PasswordDetails', {password: item})
  }

  const handleSetting = () => {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* App Logo */}
        <Text style={styles.logo}>App Logo</Text>
        {/* App Title */}
        <Text style={styles.title}>App Title</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search passwords..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Password List */}
      <FlatList
        data={filteredPasswords}
        keyExtractor={item => item.password}
        renderItem={({ item }) => (
          <Password item={item} onPress={handlePasswordDetails} />
        )}
      />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddPassword}>
        <Text style={styles.buttonText}>Add Password</Text>
      </TouchableOpacity>

      {/* Settings Button */}
      <TouchableOpacity style={styles.settingsButton} onPress={handleSetting}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  searchInput: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  passwordItem: {
    marginBottom: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 8,
  },
  settingsButton: {
    backgroundColor: '#FF5722',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
