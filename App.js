import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { IntroNavigator } from './src/screen/Login'; // Using IntroNavigator
import MainNavigator from './src/screen/MainNavigator'; // Main app with TabBar

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true to show TabBar, false for login

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Poppins-Regular': require('./assets/font/Poppins/Poppins-Regular.ttf'),
          'Poppins-Bold': require('./assets/font/Poppins/Poppins-Bold.ttf'),
          'Poppins-SemiBold': require('./assets/font/Poppins/Poppins-SemiBold.ttf'),
          'Poppins-Medium': require('./assets/font/Poppins/Poppins-Medium.ttf'),
          'Poppins-Light': require('./assets/font/Poppins/Poppins-Light.ttf'),
          'ConcertOne-Regular': require('./assets/font/Concert_One/ConcertOne-Regular.ttf'),
          'Bungee-Regular': require('./assets/font/Bungee/Bungee-Regular.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.warn('Error loading fonts:', error);
        setFontsLoaded(true); // Continue even if fonts fail to load
      }
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isLoggedIn ? <MainNavigator /> : <IntroNavigator />}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C6EF5',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#4C6EF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});