import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import IntroScreenWithPNG from './IntroScreenWithPNG';
import IntroScreen2WithButtons from './IntroScreen2WithButtons';
import SignUpScreen from './SignUpScreen';
import LogInScreen from './LogInScreen';
import SuccessScreen from './SuccessScreen';
import { HomeScreen } from '../Home';

const IntroNavigator = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    console.log(`Current screen: ${currentScreen}, Moving to next...`);
    if (currentScreen === 1) {
      console.log('Moving from Page 1 to Page 2');
      setCurrentScreen(2);
    } else {
      // Navigate to main app
      console.log('Navigate to main app');
      // Here you would typically navigate to your main app screen
    }
  };

  const handleSkip = () => {
    console.log(`Skipping from screen ${currentScreen} to Page 2`);
    // Skip intro and go to page 2
    setCurrentScreen(2);
  };

  const handleSignUp = () => {
    // Navigate to sign up screen
    console.log('Navigate to Sign Up');
    setCurrentScreen(3); // Go to SignUp screen
  };

  const handleLogIn = () => {
    // Navigate to log in screen
    console.log('Navigate to Log In');
    setCurrentScreen(4); // Go to LogIn screen
  };

  const handleCreateAccount = (userData) => {
    // Handle account creation
    console.log('Creating account with:', userData);
    // Here you would typically call your API to create account
    // Navigate to success screen after successful registration
    setCurrentScreen(5);
  };

  const handleLogin = (userData) => {
    // Handle user login
    console.log('Logging in with:', userData);
    // Here you would typically call your API to authenticate user
    // Navigate to success screen after successful login
    setCurrentScreen(5);
  };

  const handleDone = () => {
    // Handle completion - navigate to main app
    console.log('Navigate to Home Screen');
    // Navigate to home screen
    setCurrentScreen(6);
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log('Forgot password requested');
    // Here you would typically navigate to forgot password screen
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Google login requested');
    // Here you would typically integrate with Google Auth
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login
    console.log('Facebook login requested');
    // Here you would typically integrate with Facebook Auth
  };

  const handleBackToIntro = () => {
    // Go back to intro screens
    setCurrentScreen(2);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
          <IntroScreenWithPNG 
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      case 2:
        return (
          <IntroScreen2WithButtons 
            onSignUp={handleSignUp}
            onLogIn={handleLogIn}
          />
        );
      case 3:
        return (
          <SignUpScreen 
            onCreateAccount={handleCreateAccount}
            onLogIn={handleLogIn}
            onBack={handleBackToIntro}
          />
        );
      case 4:
        return (
          <LogInScreen 
            onLogIn={handleLogin}
            onSignUp={handleSignUp}
            onBack={handleBackToIntro}
            onForgotPassword={handleForgotPassword}
            onGoogleLogin={handleGoogleLogin}
            onFacebookLogin={handleFacebookLogin}
          />
        );
      case 5:
        return (
          <SuccessScreen 
            onDone={handleDone}
            message="Congratulations, you have completed your registration!"
          />
        );
      case 6:
        return (
          <HomeScreen userName="Kristin" />
        );
      default:
        return (
          <IntroScreenWithPNG 
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderCurrentScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IntroNavigator;
