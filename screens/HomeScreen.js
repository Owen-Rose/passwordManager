import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Password from '../components/Password';
import passwordData from '../data/passwords.json';

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
    navigation.navigate('PasswordDetails', { password: item });
  };

  const handleSetting = () => {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* App Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        {/* App Title */}
        <Text style={styles.title}>Passlock</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search passwords..."
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="#D5D6FD"
      />

      {/* Password List */}
      <FlatList
        data={filteredPasswords}
        keyExtractor={(item) => item.password}
        renderItem={({ item }) => (
          <Password item={item} onPress={handlePasswordDetails} />
        )}
      />

      {/* Add Button */}
      <TouchableOpacity style={[styles.addButton, { backgroundColor: '#6FD09A' }]} onPress={handleAddPassword}>
        <Text style={styles.buttonText}>Add Password</Text>
      </TouchableOpacity>

      {/* Settings Button */}
      <TouchableOpacity style={[styles.settingsButton, { backgroundColor: '#6FD09A' }]} onPress={handleSetting}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#141432',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    color: '#D5D6FD',
  },
  searchInput: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: '#D5D6FD',
  },
  passwordItem: {
    marginBottom: 8,
    fontSize: 16,
  },
  addButton: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 8,
  },
  settingsButton: {
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
