import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the App.</Text>
            <Button
                title="Logout"
                onPress={() => navigation.navigate('Login')}
            />
            
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
})