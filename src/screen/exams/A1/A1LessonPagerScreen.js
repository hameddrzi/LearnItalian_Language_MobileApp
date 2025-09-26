//A1LessonPagerScreen.js

import React, { useMemo, useRef, useState } from 'react';
import {
  SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { A1_LESSON_SLIDES } from './content/A1LessonSlides';

const { width, height } = Dimensions.get('window');
const CARD_H = Math.min(0.58 * height, 520);
const ANIM_DURATION = 200; // سرعت فید

export default function A1LessonPagerScreen({ route, navigation }) {
  const { id = 'lesson-articles', title = 'Lesson 1' } = route.params || {};
  const slides = useMemo(() => A1_LESSON_SLIDES[id] || [], [id]);
  const total = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  // animation values
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [isAnimating, setIsAnimating] = useState(false);

  const progressPct = total ? ((currentIndex + 1) / total) * 100 : 0;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < total - 1;

  const animateTo = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // کارت فعلی محو بشه
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: ANIM_DURATION,
      useNativeDriver: true,
    }).start(() => {
      // تغییر ایندکس
      setCurrentIndex(newIndex);

      // کارت جدید ظاهر بشه
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIM_DURATION,
        useNativeDriver: true,
      }).start(() => setIsAnimating(false));
    });
  };

  const goToNext = () => canGoNext && animateTo(currentIndex + 1);
  const goToPrev = () => canGoPrev && animateTo(currentIndex - 1);

  if (total === 0) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>No slides found.</Text>
      </SafeAreaView>
    );
  }

  const curr = slides[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Gradient top */}
      <LinearGradient
        colors={['#ff7ea8', '#b46de1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.topCard}
      >
        {/* Progress */}
        <Text style={styles.progressText}>
          {slides[currentIndex]?.sectionTitle || ''}
        </Text>
        <View style={styles.progressRow}>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: `${progressPct}%` }]} />
          </View>
          <Text style={styles.progressCount}>{currentIndex + 1} / {total}</Text>
        </View>

        {/* Card */}
        <View style={styles.whiteHolder}>
          <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
            <CardContent slide={curr} />
          </Animated.View>
        </View>
      </LinearGradient>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <View key={i} style={[styles.dot, i === currentIndex && styles.dotActive]} />
        ))}
      </View>

      {/* Bottom buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={[styles.button, !canGoPrev && styles.buttonDisabled]}
          onPress={goToPrev}
          disabled={!canGoPrev || isAnimating}
        >
          <Text style={[styles.buttonText, !canGoPrev && styles.buttonTextDisabled]}>
            Previous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={() => (canGoNext ? goToNext() : navigation.navigate('Practice', { fromLesson: id }))}
          disabled={isAnimating}
        >
          <Text style={[styles.buttonText, styles.nextButtonText]}>
            {canGoNext ? 'Next' : 'Exercises'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const CardContent = React.memo(function CardContent({ slide }) {
  if (!slide) return <View style={{ flex: 1 }} />;
  return (
    <View style={styles.cardContent}>
      {!!slide?.heading && <Text style={styles.cardHeading}>{slide.heading}</Text>}
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardText}>{slide.body}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3e9ff' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 8, paddingBottom: 6, backgroundColor: '#fff',
  },
  backBtn: { width: 28, height: 28, alignItems: 'center', justifyContent: 'center' },
  backIcon: { fontSize: 22, fontWeight: '700', color: '#333' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#1f2937' },

  topCard: { marginHorizontal: 16, marginTop: 10, borderRadius: 20, padding: 16, paddingBottom: 12 },

  progressText: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 8 },
  progressRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  progressBg: { flex: 1, height: 6, backgroundColor: 'rgba(255,255,255,0.35)', borderRadius: 3, marginRight: 10 },
  progressFill: { height: '100%', backgroundColor: '#ffd166', borderRadius: 3 },
  progressCount: { color: '#fff', fontSize: 14, fontWeight: '700' },

  whiteHolder: { height: CARD_H, marginTop: 6, justifyContent: 'center', alignItems: 'center' },

  card: {
    // برای بایین اومدن تکست ها اینو بزن مارجین تاب
    width: width - 90,
    height: CARD_H - 1,
    borderRadius: 26,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },

  cardContent: { flex: 1, padding: 20, justifyContent: 'center' },
  cardHeading: {
    fontSize: 16, fontWeight: '900', textAlign: 'center', color: '#111',
    marginTop: 14, marginBottom: 12, textTransform: 'uppercase',
  },
  cardTextContainer: { flex: 1, justifyContent: 'center' },
  cardText: { fontSize: 16, lineHeight: 24, color: '#222', textAlign: 'center' },

  cardShadow1: {
    position: 'absolute', left: 24, right: 24, bottom: 22,
    height: 16, borderRadius: 12, backgroundColor: '#d68bd8', opacity: 0.55,
  },
  cardShadow2: {
    position: 'absolute', left: 36, right: 36, bottom: 10,
    height: 14, borderRadius: 12, backgroundColor: '#b874c1', opacity: 0.6,
  },

  dotsContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#d6d6d8', marginHorizontal: 6 },
  dotActive: { backgroundColor: '#9aa0ff' },

  bottomButtons: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14 },
  button: {
    backgroundColor: '#fff', borderRadius: 26, paddingVertical: 12, paddingHorizontal: 20, minWidth: 140, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 3,
  },
  nextButton: { backgroundColor: '#111' },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { fontSize: 16, fontWeight: '800', color: '#111' },
  nextButtonText: { color: '#fff' },
  buttonTextDisabled: { opacity: 0.5 },
});
