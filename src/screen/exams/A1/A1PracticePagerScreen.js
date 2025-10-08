// A1PracticePagerScreen.js
import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { A1_PRACTICE_SLIDES } from './content/A1PracticeSlide';

export default function A1PracticePagerScreen({ route, navigation }) {
  const { id = '', title = 'Practice' } = route.params || {};

  // سوال‌هایی که مخصوص همین تمرین‌اند (همه‌ی آیتم‌هایی که id یکسان دارند)
  const questions = useMemo(
    () => A1_PRACTICE_SLIDES.filter(q => q.id === id),
    [id]
  );

  const total = questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // {0: 2, 1: 0, ...}

  if (total === 0) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <Text>No practice found for: {id}</Text>
      </SafeAreaView>
    );
  }

  const q = questions[currentIndex];

  const selectAnswer = (idx) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: idx }));
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < total - 1) setCurrentIndex(currentIndex + 1);
  };

  const finishPractice = () => {
    let correct = 0;
    questions.forEach((item, i) => {
      if (answers[i] === item.correctAnswer) correct++;
    });
    const score = Math.round((correct / total) * 100);

    Alert.alert(
      'Practice Result',
      `Score: ${score}%\nCorrect: ${correct}/${total}`,
      [
        { text: 'OK', onPress: () => navigation.goBack() },
        { text: 'Retry', onPress: () => {
            setCurrentIndex(0);
            setAnswers({});
          } 
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../../../assets/pic/mainIcons/Back.png')}
              style={{ height: 50, width: 50 }}
            />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerTitle}>{currentIndex + 1}/{total}</Text>
      </View>

      {/* Scrollable body */}
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        {/* Progress */}
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentIndex + 1) / total) * 100}%` },
            ]}
          />
        </View>

        {/* Question card */}
        <View style={styles.card}>
          <Text style={styles.question}>{q.question}</Text>
        </View>

        {/* Options */}
        <View style={{ marginTop: 10 }}>
          {q.options.map((opt, idx) => {
            const selected = answers[currentIndex] === idx;
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.option, selected && styles.optionSelected]}
                onPress={() => selectAnswer(idx)}
              >
                <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                  {opt}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom actions */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={goPrev}
          disabled={currentIndex === 0}
          style={[styles.navBtn, styles.prevBtn, currentIndex === 0 && styles.btnDisabled]}
        >
          <Text style={[styles.prevIcon, currentIndex === 0 && styles.textDisabled]}></Text>
          <Text style={[styles.prevText, currentIndex === 0 && styles.textDisabled]}>
            Previous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={currentIndex === total - 1 ? finishPractice : goNext}
          style={[styles.navBtn, styles.nextBtn]}
        >
          <Text style={styles.nextText}>
            {currentIndex === total - 1 ? 'Finish' : 'Next'}
          </Text>
          {currentIndex !== total - 1 && <Text style={styles.nextIcon}></Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FF6B9D' },
  center: { alignItems: 'center', justifyContent: 'center' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    width: 40, height: 40, borderRadius: 20,
    alignItems: 'center', justifyContent: 'center',
  },
  backIcon: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
  headerTitle: { fontSize: 16, color: '#fff', fontWeight: '700' },

  body: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  progressBar: {
    height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, marginBottom: 16,
  },
  progressFill: { height: '100%', backgroundColor: '#FBC02D', borderRadius: 3 },

  card: {
    backgroundColor: '#F8F9FE', borderRadius: 20, padding: 20, marginBottom: 14,
  },
  question: {
    fontSize: 17, color: '#1F2937', lineHeight: 24, textAlign: 'center'
  },

  option: {
    backgroundColor: '#F8F9FE',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  optionSelected: {
    backgroundColor: '#FF6B9D',
    borderColor: '#FF6B9D',
  },
  optionText: { color: '#1F2937', fontSize: 14, textAlign: 'center' },
  optionTextSelected: { color: '#fff', fontWeight: '600' },

  bottomBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 24,
    minWidth: 120,
    justifyContent: 'center',
  },
  prevBtn: { backgroundColor: '#F8F9FE' },
  nextBtn: { backgroundColor: '#FF6B9D' },
  btnDisabled: { opacity: 0.5 },

  prevIcon: { fontSize: 16, color: '#6B7280', marginRight: 8 },
  prevText: { fontSize: 16, color: '#6B7280', fontWeight: '600' },
  nextText: { fontSize: 16, color: '#fff', fontWeight: '600' },
  nextIcon: { fontSize: 16, color: '#fff', marginLeft: 8 },
  textDisabled: { color: '#9CA3AF' },
});
