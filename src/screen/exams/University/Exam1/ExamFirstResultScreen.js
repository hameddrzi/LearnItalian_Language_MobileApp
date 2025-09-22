// screens/exams/University/Exam1/ExamFirstResultScreen.js
import React, { useMemo, useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity, Modal, Pressable,
} from 'react-native';

// ایمپورت متن‌های جدا
import DEFAULT_NOTES from './Exam1AssistantNotes';

const formatPair = (q, selectedIndex) => {
  const userAnswered =
    selectedIndex !== undefined && selectedIndex !== null && selectedIndex > -1;
  const isCorrect = userAnswered && selectedIndex === q.correctAnswer;
  return {
    userAnswered,
    isCorrect,
    userText: userAnswered ? q.options[selectedIndex] : '—',
    correctText: q.options[q.correctAnswer],
  };
};

// حذف فاصله‌ی ابتدای هر خط (اختیاری ولی ظاهر را تمیز می‌کند)
const normalize = (s = '') => s.replace(/^\s+/gm, '');

const ExamFirstResultScreen = ({ navigation, route }) => {
  const {
    questions = [],
    selectedAnswers = {},
    correctAnswers = 0,
    totalQuestions = questions.length,
    timeSpent = 0,
    // اگر از بیرون پاس دادی (route.params.notes) اولویت با اونه
    notes: notesFromParams,
  } = route.params || {};

  // منبع نهایی متن‌ها
  const NOTES = notesFromParams || DEFAULT_NOTES;

  const [assistantVisible, setAssistantVisible] = useState(false);
  const [assistantIndex, setAssistantIndex] = useState(null);

  const minutes = Math.floor(timeSpent / 60);
  const seconds = (timeSpent % 60).toString().padStart(2, '0');

  const openAssistant = (idx) => { setAssistantIndex(idx); setAssistantVisible(true); };
  const closeAssistant = () => { setAssistantVisible(false); setAssistantIndex(null); };

  const assistantData = useMemo(() => {
    if (assistantIndex === null || !questions[assistantIndex]) return null;
    const q = questions[assistantIndex];
    const pair = formatPair(q, selectedAnswers[assistantIndex]);

    const note = NOTES?.[q.id];
    const title = note?.title || 'Assistant';

    // پشتیبانی از هر دو حالت: blocks یا text تکی
    let blocks = [];
    if (Array.isArray(note?.blocks)) {
      blocks = note.blocks.map(b => ({ lang: b.lang || 'en', text: b.text || '' }));
    } else if (note?.text) {
      blocks = [{ lang: 'en', text: note.text }];
    }

    if (!blocks.length) {
      blocks = [{ lang: 'en', text: 'برای این سؤال هنوز توضیحی ثبت نشده است.' }];
    }

    return { q, pair, title, blocks, index: assistantIndex };
  }, [assistantIndex, questions, selectedAnswers, NOTES]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Results</Text>
        <Text style={styles.headerMeta}>{correctAnswers}/{totalQuestions}</Text>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.list}>
        {questions.map((q, idx) => {
          const pair = formatPair(q, selectedAnswers[idx]);
          return (
            <View
              key={q.id ?? idx}
              style={[styles.card, pair.isCorrect ? styles.cardCorrect : styles.cardWrong]}
            >
              <Text style={styles.qTitle}>{idx + 1}- {q.question}</Text>
              <View style={styles.separator} />

              <Text style={styles.label}>
                Your response: <Text style={styles.userAns}>{pair.userText}</Text>
              </Text>
              <Text style={styles.label}>
                Correct: <Text style={styles.correctAns}>{pair.correctText}</Text>
              </Text>

              <View style={styles.cardFooter}>
                <TouchableOpacity
                  style={styles.assistantPill}
                  onPress={() => openAssistant(idx)}
                  activeOpacity={0.85}
                >
                  <Text style={styles.assistantText}>Assistant</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* summary */}
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Results</Text>
          <Text style={styles.summaryMeta}>{correctAnswers}/{totalQuestions}</Text>
        </View>
        <Text style={styles.timeText}>Time {minutes}:{seconds}</Text>
      </ScrollView>

      {/* Assistant Modal */}
      <Modal transparent visible={assistantVisible} animationType="fade" onRequestClose={closeAssistant}>
        <Pressable style={styles.backdrop} onPress={closeAssistant} />
        <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{assistantData?.title ?? 'Assistant'}</Text>
          </View>

          {assistantData && (
            <ScrollView
              style={styles.modalScroll}
              contentContainerStyle={styles.modalBody}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.modalQuestionIndex}>
                {assistantData.index + 1}. <Text style={styles.modalQuestionBold}>
                  {assistantData.q.question.split('\n')[0]}
                </Text>
              </Text>

              <Text style={styles.modalQuestionRest}>
                {assistantData.q.question.split('\n').slice(1).join('\n')}
              </Text>

              <View style={styles.correctBubble}>
                <Text style={styles.correctBubbleText}>
                  Correct response: <Text style={styles.correctAnsBold}>{assistantData.pair.correctText}</Text>
                </Text>
              </View>

              {/* متن‌ها به تفکیک زبان با جهت‌دهی مناسب */}
              {assistantData.blocks.map((b, i) => (
                <Text
                  key={i}
                  style={[
                    styles.aiText,
                    b.lang === 'fa' ? styles.rtl : styles.ltr,
                  ]}
                >
                  {normalize(b.text)}
                </Text>
              ))}
            </ScrollView>
          )}

          <View style={styles.modalFooter}>
            <TouchableOpacity style={styles.okBtn} onPress={closeAssistant}>
              <Text style={styles.okBtnText}>Got it</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8, backgroundColor: '#fff',
    borderBottomWidth: 1, borderBottomColor: '#E5E7EB'
  },
  backButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' },
  backIcon: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  headerTitle: { fontSize: 22, fontFamily: 'Poppins-Bold', color: '#111827' },
  headerMeta: { fontSize: 16, fontFamily: 'Poppins-Medium', color: '#6B7280' },

  list: { padding: 16, paddingBottom: 32 },
  card: { borderRadius: 16, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 6, shadowOffset: { width: 0, height: 2 } },
  cardCorrect: { backgroundColor: '#D1FAD7', borderWidth: 1, borderColor: '#A7F3D0' },
  cardWrong: { backgroundColor: '#FFE1E1', borderWidth: 1, borderColor: '#FECACA' },

  qTitle: { fontSize: 14, lineHeight: 20, color: '#111827', fontFamily: 'Poppins-Medium' },
  separator: { height: 1, backgroundColor: '#E5E7EB', marginVertical: 8 },
  label: { fontSize: 14, color: '#374151', marginBottom: 6, fontFamily: 'Poppins-Regular' },
  userAns: { fontFamily: 'Poppins-SemiBold', color: '#111827' },
  correctAns: { fontFamily: 'Poppins-Bold', color: '#111827' },

  cardFooter: { marginTop: 8, alignItems: 'flex-end' },
  assistantPill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 6, backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#E5E7EB', shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } },
  assistantText: { fontSize: 12, color: '#6B7280', fontFamily: 'Poppins-Medium' },

  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 4 },
  summaryText: { fontSize: 20, fontFamily: 'Poppins-Bold', color: '#111827' },
  summaryMeta: { fontSize: 18, fontFamily: 'Poppins-Bold', color: '#111827' },
  timeText: { fontSize: 14, color: '#6B7280', marginBottom: 24 },

  // Modal
  backdrop: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
  modalCard: { position: 'absolute', left: 16, right: 16, top: 80, backgroundColor: '#fff', borderRadius: 16, paddingBottom: 10, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, maxHeight: '80%' },
  modalHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  modalTitle: { fontSize: 18, color: '#1F2937', fontFamily: 'Poppins-Bold' },

  modalScroll: { maxHeight: '100%' },
  modalBody: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  modalQuestionIndex: { fontSize: 14, color: '#111827', marginBottom: 6, fontFamily: 'Poppins-SemiBold' },
  modalQuestionBold: { fontFamily: 'Poppins-Bold' },
  modalQuestionRest: { fontSize: 14, color: '#374151', marginBottom: 10, lineHeight: 20, fontFamily: 'Poppins-Regular' },

  correctBubble: { backgroundColor: '#D1FAD7', borderColor: '#A7F3D0', borderWidth: 1, padding: 10, borderRadius: 12, marginBottom: 12 },
  correctBubbleText: { fontSize: 14, color: '#065F46', fontFamily: 'Poppins-Medium' },
  correctAnsBold: { fontFamily: 'Poppins-Bold' },

  aiText: { fontSize: 14, color: '#1F2937', lineHeight: 20, marginBottom: 12, fontFamily: 'Poppins-Regular' },
  ltr: { writingDirection: 'ltr', textAlign: 'left' },
  rtl: { writingDirection: 'rtl', textAlign: 'right' },

  modalFooter: { paddingHorizontal: 16, paddingBottom: 12, alignItems: 'flex-end' },
  okBtn: { backgroundColor: '#4C6EF5', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10 },
  okBtnText: { color: '#fff', fontSize: 14, fontFamily: 'Poppins-SemiBold' },
});

export default ExamFirstResultScreen;
