// app/SignInPage.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

// ✅ Import these for typed navigation
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import { scale, verticalScale } from '../utils/scaling';

// ✅ Create the navigation type
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignInPage'>;

export default function SignInPage() {
  // ✅ Use the typed navigation hook
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Logo */}
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* --- Optional Section: Add Your Text Here --- */}
        {
        <Text style={styles.customText}>
           
       The easiest way to manage your                   
            
        </Text> 
        }

{/* --- Optional Section: Add Your Text Here --- */}
        {
        <Text style={styles.customText1}>
          Dolphin Experience
        </Text> 
        }



        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

        {/* People Image */}
        <Image
          source={require('./assets/people.png')}
          style={styles.people}
          resizeMode="contain"
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  logo: {
    width: scale(274),
    height: verticalScale(263),
    position: 'absolute',
    left: scale(65),
    top: verticalScale(100),
  },

  customText: {
    color: '#fff',
    fontSize: scale(20),
    position: 'absolute',
    top: verticalScale(300),
    left: scale(35),
    width: scale(404),
    height: verticalScale(60),
    paddingHorizontal: scale(16),
    lineHeight: verticalScale(28),
  },

customText1: {
    color: '#fff',
    fontSize: scale(20),
    position: 'absolute',
    top: verticalScale(330),
    left: scale(0),
    width: scale(404),
    height: verticalScale(60),
    paddingHorizontal: scale(100),
    lineHeight: verticalScale(28),
  },




  signInButton: {
    width: scale(327),
    height: verticalScale(40),
    position: 'absolute',
    left: scale(24),
    top: verticalScale(370),
    backgroundColor: '#000',
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: scale(16),
  },

  people: {
    width: scale(418),
    height: verticalScale(283),
    position: 'absolute',
    bottom: -4,
    right: 0,
  },
});
