import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function AddPasswordScreen() {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAddPassword = () => {
        console.log(website, username, password);
        Alert.alert('Password has been saved!')
        setWebsite('');
        setUsername('');
        setPassword('');
    };

    // const clearInputFields = () => {
    //     setWebsite('');
    //     setUsername('');
    //     setPassword('');
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Password</Text>
            <TextInput 
                value={website}
                style={styles.input}
                placeholder='Website'
                onChangeText={text => setWebsite(text)}
            />
            <TextInput
                value={username} 
                style={styles.input}
                placeholder='Username'
                onChangeText={text => setUsername(text)}
                />
                
            <TextInput
                value={password} 
                style={styles.input}
                placeholder='Password'
                onChangeText={text => setPassword(text)}
            />
            <Button title='Save Password' onPress={handleAddPassword}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
})