import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import IntroScreenEnglish from './IntroScreenEnglish';

const { width } = Dimensions.get('window');

// PNG Image Component - Better performance than SVG
const IntroIllustrationPNG = ({ size = 280 }) => (
  <Image
    source={require('../../../assets/pic/LoginAssets/intro.png')}
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

const IntroScreenWithPNG = ({ navigation, onNext, onSkip }) => {
  const handleNext = () => {
    console.log('Page 1 - Next button clicked');
    if (onNext) {
      onNext();
    }
  };

  const handleSkip = () => {
    console.log('Page 1 - Skip button clicked');
    if (onSkip) {
      onSkip();
    }
  };

  return (
    <IntroScreenEnglish
      illustration={<IntroIllustrationPNG size={width * 0.65} />}
      title="Welcome to Chatly!"
      subtitle="Your smart AI chatbot for learning and getting answers to all your questions"
      currentStep={1}
      totalSteps={2}
      onNext={handleNext}
      onSkip={handleSkip}
      backgroundColor="#4C6EF5"
    />
  );
};

const styles = StyleSheet.create({
  introImage: {
    // High quality image rendering
    backgroundColor: 'transparent',
    // Add shadow for better visual appeal
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default IntroScreenWithPNG;
