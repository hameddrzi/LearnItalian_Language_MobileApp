import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// PNG Image Component - Page 2 illustration
const IntroIllustration2PNG = ({ size = 280 }) => (
  <Image
    source={require('../../../assets/pic/LoginAssets/intro2.png')}
    style={[
      styles.introImage,
      {
        width: size,
        height: size,
      }
    ]}
    resizeMode="contain"
  />
);

const IntroScreen2WithButtons = ({ onSignUp, onLogIn }) => {
  const handleSignUp = () => {
    console.log('Page 2 - Sign Up clicked');
    if (onSignUp) onSignUp();
  };

  const handleLogIn = () => {
    console.log('Page 2 - Log In clicked');
    if (onLogIn) onLogIn();
  };

// Skip functionality removed from page 2

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6C5CE7" />
      
{/* Skip button removed from page 2 */}

      {/* Main Content */}
      <View style={styles.content}>
        {/* Illustration */}
        <View style={styles.illustrationSection}>
          <IntroIllustration2PNG size={width * 0.65} />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Smart Conversations</Text>
          <Text style={styles.subtitle}>
            Get instant answers and have meaningful conversations with our AI assistant
          </Text>
        </View>

        {/* Page Indicators */}
        <View style={styles.indicatorsContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.logInButton} onPress={handleLogIn}>
            <Text style={styles.logInText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C5CE7',
  },
// Skip button styles removed
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  illustrationSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    maxHeight: height * 0.35,
  },
  introImage: {
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Poppins-Bold',
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#E8EAFF',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    maxWidth: width * 0.85,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 24,
    borderRadius: 12,
  },
  buttonContainer: {
    gap: 16,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  signUpText: {
    color: '#6C5CE7',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  logInButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
  },
  logInText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
});

export default IntroScreen2WithButtons;
