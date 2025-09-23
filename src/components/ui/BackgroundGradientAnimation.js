import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const BackgroundGradientAnimation = ({ children, style }) => {
  // Animation values for different circles
  const firstAnimation = useRef(new Animated.Value(0)).current;
  const secondAnimation = useRef(new Animated.Value(0)).current;
  const thirdAnimation = useRef(new Animated.Value(0)).current;
  const fourthAnimation = useRef(new Animated.Value(0)).current;
  const fifthAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // First animation - vertical movement (30s)
    const firstAnim = Animated.loop(
      Animated.sequence([
        Animated.timing(firstAnimation, {
          toValue: 1,
          duration: 15000,
          useNativeDriver: true,
        }),
        Animated.timing(firstAnimation, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: true,
        }),
      ]),
    );

    // Second animation - circular movement reverse (20s)
    const secondAnim = Animated.loop(
      Animated.timing(secondAnimation, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
      }),
    );

    // Third animation - circular movement (40s)
    const thirdAnim = Animated.loop(
      Animated.timing(thirdAnimation, {
        toValue: 1,
        duration: 40000,
        useNativeDriver: true,
      }),
    );

    // Fourth animation - horizontal movement (40s)
    const fourthAnim = Animated.loop(
      Animated.sequence([
        Animated.timing(fourthAnimation, {
          toValue: 1,
          duration: 20000,
          useNativeDriver: true,
        }),
        Animated.timing(fourthAnimation, {
          toValue: 0,
          duration: 20000,
          useNativeDriver: true,
        }),
      ]),
    );

    // Fifth animation - circular movement (20s)
    const fifthAnim = Animated.loop(
      Animated.timing(fifthAnimation, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
      }),
    );

    // Start all animations
    firstAnim.start();
    secondAnim.start();
    thirdAnim.start();
    fourthAnim.start();
    fifthAnim.start();

    return () => {
      firstAnim.stop();
      secondAnim.stop();
      thirdAnim.stop();
      fourthAnim.stop();
      fifthAnim.stop();
    };
  }, []);

  // Animation interpolations
  const firstTranslateY = firstAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-height * 0.5, height * 0.5],
  });

  const secondRotate = secondAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'], // Reverse
  });

  const thirdRotate = thirdAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const fourthTranslateX = fourthAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 0.5, width * 0.5],
  });

  const fourthTranslateY = fourthAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-height * 0.1, height * 0.1],
  });

  const fifthRotate = fifthAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, style]}>
      {/* Background */}
      <LinearGradient
        colors={['#4C6EF5', '#7C3AED']}
        style={styles.background}
      />

      {/* First animated circle */}
      <Animated.View
        style={[
          styles.circle,
          styles.firstCircle,
          {
            transform: [{ translateY: firstTranslateY }],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(236, 72, 153, 0.8)', 'rgba(124, 58, 237, 0.6)']}
          style={styles.gradientCircle}
        />
      </Animated.View>

      {/* Second animated circle */}
      <Animated.View
        style={[
          styles.circle,
          styles.secondCircle,
          {
            transform: [{ rotate: secondRotate }],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(245, 158, 11, 0.7)', 'rgba(236, 72, 153, 0.5)']}
          style={styles.gradientCircle}
        />
      </Animated.View>

      {/* Third animated circle */}
      <Animated.View
        style={[
          styles.circle,
          styles.thirdCircle,
          {
            transform: [{ rotate: thirdRotate }],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(76, 110, 245, 0.6)', 'rgba(245, 158, 11, 0.4)']}
          style={styles.gradientCircle}
        />
      </Animated.View>

      {/* Fourth animated circle */}
      <Animated.View
        style={[
          styles.circle,
          styles.fourthCircle,
          {
            transform: [
              { translateX: fourthTranslateX },
              { translateY: fourthTranslateY },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(124, 58, 237, 0.5)', 'rgba(76, 110, 245, 0.3)']}
          style={styles.gradientCircle}
        />
      </Animated.View>

      {/* Fifth animated circle */}
      <Animated.View
        style={[
          styles.circle,
          styles.fifthCircle,
          {
            transform: [{ rotate: fifthRotate }],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(236, 72, 153, 0.4)', 'rgba(245, 158, 11, 0.6)']}
          style={styles.gradientCircle}
        />
      </Animated.View>

      {/* Content overlay */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    borderRadius: 9999,
  },
  gradientCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
  },
  firstCircle: {
    width: width * 0.8,
    height: width * 0.8,
    top: '10%',
    left: '10%',
  },
  secondCircle: {
    width: width * 0.6,
    height: width * 0.6,
    top: '60%',
    right: '5%',
  },
  thirdCircle: {
    width: width * 0.9,
    height: width * 0.9,
    top: '20%',
    right: '10%',
  },
  fourthCircle: {
    width: width * 0.5,
    height: width * 0.5,
    bottom: '20%',
    left: '20%',
  },
  fifthCircle: {
    width: width * 0.7,
    height: width * 0.7,
    bottom: '10%',
    right: '15%',
  },
  content: {
    flex: 1,
    zIndex: 10,
    position: 'relative',
  },
});

export default BackgroundGradientAnimation;















