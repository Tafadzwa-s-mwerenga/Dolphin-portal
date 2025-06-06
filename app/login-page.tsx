// app/LoginPage.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { scale, verticalScale } from '../utils/scaling';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginPage'>;

export default function LoginPage() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Account ID input */}
      <TextInput
        placeholder="Account ID"
        placeholderTextColor="#999"
        style={styles.inputAccount}
      />

      {/* Password input */}
      <TextInput
        placeholder="Password..."
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.inputPassword}
      />

      {/* Forgot Password link */}
      <TouchableOpacity onPress={() => {/* handle forgot password action here */}}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>
      

      {/* Continue button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      {/* Login heading and instruction */}
      <View style={styles.footerText}>
        <Text style={styles.loginHeading}>Login</Text>
        <Text style={styles.loginSub}>Enter your account ID and password</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF', // Optional blue background
    alignItems: 'center',
  },

  logo: {
    width: scale(217),
    height: verticalScale(208),
    position: 'absolute',
    top: verticalScale(100),
    left: scale(91),
  },

  inputAccount: {
    position: 'absolute',
    top: verticalScale(-60) + verticalScale(380), // 380 offset for visual alignment
    left: scale(24),
    width: scale(327),
    height: verticalScale(40),
    borderRadius: scale(8),
    backgroundColor: 'white',
    paddingHorizontal: scale(12),
  },

  inputPassword: {
    position: 'absolute',
    top: verticalScale(10) + verticalScale(380),
    left: scale(24),
    width: scale(327),
    height: verticalScale(40),
    borderRadius: scale(8),
    backgroundColor: 'white',
    paddingHorizontal: scale(12),
  },

  forgotPassword: {
    position: 'absolute',
    top: verticalScale(80) + verticalScale(380),
    left: scale(-60), 
    fontSize: scale(18),
    color: '#888',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },

  continueButton: {
    position: 'absolute',
    top: verticalScale(170) + verticalScale(380),
    left: scale(24),
    width: scale(327),
    height: verticalScale(40),
    borderRadius: scale(8),
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: scale(16),
  },

  footerText: {
    position: 'absolute',
    top: verticalScale(230) + verticalScale(380),
    alignItems: 'center',
  },

  loginHeading: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#000',
  },

  loginSub: {
    fontSize: scale(14),
    color: '#000',
    marginTop: verticalScale(4),
  },
});

