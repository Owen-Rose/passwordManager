import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AddPasswordScreen from './screens/AddPasswordScreen';
import PasswordDetails from './components/PasswordDetails';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddPassword" component={AddPasswordScreen} />
        <Stack.Screen name="PasswordDetails" component={PasswordDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
