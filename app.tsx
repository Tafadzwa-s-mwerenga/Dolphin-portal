import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import SignInPage from './app/sign-inpage';
import LoginPage from './app/login-page';
import ForgotPassword from './app/forgotpassword-page';
import AccountPage from './app/Account/account-page';

// Type-safe screen names
export type RootStackParamList = {
  SignInPage: undefined;
  LoginPage: undefined;
  ForgotPassword: undefined;
  AccountPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}