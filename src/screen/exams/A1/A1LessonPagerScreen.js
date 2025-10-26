// A1LessonPagerScreen.js

import React, { useMemo, useRef, useState } from 'react';
import {
  SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { A1_LESSON_SLIDES } from './content/A1LessonSlides';

const { width, height } = Dimensions.get('window');
const CARD_H = Math.min(0.58 * height, 520);
const ANIM_DURATION = 200; // سرعت فید




// lessonId -> practiceId
const PRACTICE_BY_LESSON = {
  'lesson-Articles': 'Articles1',                 // داری: Articles1, Articles2
  'lesson-Plurals': 'Plural-of-nouns1',           // یا 'Plural-of-nouns2'
  'lesson-There': 'here-is-o-there-are',
  'lesson-Verbs-in-the-present-tense': 'Present-Simple-tense',
  'lesson-Piacciono': "Piace-or-piacciono",                       // فعلا تمرین نداری؟ null بزار
  'lesson-Adjectives': 'Adjectives',
  'lesson-Adverbs': null,
  'lesson-Past': 'Present-Perfect1',              // یا Present-Perfect2
  'lesson-Direct-and-indirect-pronouns': 'Direct-and-indirect-pronouns', // یا 'Indirect-pronouns'
  'lesson-Prepositions': 'Prepositions',
  'lesson-Reflexive-verbs': "Reflexive-verbs",
  'lesson-The-Impersonal': null,
};





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

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: ANIM_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(newIndex);
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
          <Image source={require('../../../../assets/pic/mainIcons/Back_bk.png')}
              style={{ height: 50, width: 50, marginTop: 30 }}
            />
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

  {/* Next / Exercises */}
  <TouchableOpacity
    style={[styles.button, styles.nextButton]}
    onPress={() => {
      if (canGoNext) {
        goToNext();
      } else {
        // آخرین اسلاید → برو به تمرین متناظر
        const practiceId = PRACTICE_BY_LESSON[id] ?? id; // اگر مپ نداشتی، با همون id امتحان کن
        navigation.navigate('A1Practice', {
          id: practiceId,
          title: `${title} — Exercises`,
        });
      }
    }}
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

/* ----------------------- فقط همین بخش تغییر کرد ----------------------- */
const CardContent = React.memo(function CardContent({ slide }) {
  if (!slide) return <View style={{ flex: 1 }} />;

  const renderBody = () => {
    const b = slide.body;

    // جدول
    if (b && typeof b === 'object' && b.type === 'table') {
      return <RNTable headers={b.headers || []} rows={b.rows || []} />;
    }

    // آرایه از تکه‌ها (JSX/متن)
    if (Array.isArray(b)) {
      return b.map((el, i) => <React.Fragment key={i}>{el}</React.Fragment>);
    }

    // متن ساده
    if (typeof b === 'string') {
      return <Text style={styles.cardText}>{b}</Text>;
    }

    // خود JSX
    return b || null;
  };

  return (
    <View style={styles.cardContent}>
      {!!slide?.heading && <Text style={styles.cardHeading}>{slide.heading}</Text>}
      <View style={styles.cardTextContainer}>{renderBody()}</View>
    </View>
  );
});

/* ----------------------- این کامپوننت جدید اضافه شد ----------------------- */
function RNTable({ headers = [], rows = [] }) {
  return (
    <View style={tbl.container}>
      {/* Header */}
      <View style={[tbl.row, tbl.headerRow]}>
        {headers.map((h, i) => (
          <View key={i} style={[tbl.cell, i === 0 ? tbl.colNarrow : tbl.colWide]}>
            <Text style={tbl.headerText}>{h}</Text>
          </View>
        ))}
      </View>

      {/* Rows */}
      {rows.map((r, ri) => (
        <View key={ri} style={[tbl.row, ri % 2 === 1 && tbl.strip]}>
          {r.map((c, ci) => (
            <View key={ci} style={[tbl.cell, ci === 0 ? tbl.colNarrow : tbl.colWide]}>
              {typeof c === 'string' ? <Text style={tbl.cellText}>{c}</Text> : c}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const tbl = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    overflow: 'hidden',
  },
  row: { flexDirection: 'row' },
  headerRow: { backgroundColor: '#fafafa' },
  strip: { backgroundColor: '#fcfcff' },
  cell: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: '#eef0f3',
    flex: 1,
  },
  colNarrow: { flex: 0.9 },   // ستون اول باریک‌تر
  colWide: { flex: 1.1 },
  headerText: { fontWeight: '800', color: '#111827', textAlign: 'center' },
  cellText: { color: '#1f2937', fontSize: 15, textAlign: 'center' },
});

/* ----------------------- بقیه استایل‌ها بدون تغییر ----------------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3e9ff' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 8, paddingBottom: 6, backgroundColor: '#fff',
  },
  backBtn: { width: 28, height: 28, alignItems: 'center', justifyContent: 'center' },
  backIcon: { paddingTop: 10,fontSize: 22, fontWeight: '700', color: '#333' },
  headerTitle: {fontSize: 18, fontWeight: '800', color: '#1f2937', paddingTop: 60,  },

  topCard: { marginHorizontal: 16, marginTop: 10, borderRadius: 20, padding: 16, paddingBottom: 12 },

  progressText: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 8 },
  progressRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  progressBg: { flex: 1, height: 6, backgroundColor: 'rgba(255,255,255,0.35)', borderRadius: 3, marginRight: 10 },
  progressFill: { height: '100%', backgroundColor: '#ffd166', borderRadius: 3 },
  progressCount: { color: '#fff', fontSize: 14, fontWeight: '700' },

  whiteHolder: { height: CARD_H, marginTop: 6, justifyContent: 'center', alignItems: 'center' },

  card: {
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
