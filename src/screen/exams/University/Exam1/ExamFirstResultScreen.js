// screens/exams/University/Exam1/ExamFirstResultScreen.js
import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';

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

// تشخیص موضوع سؤال بر اساس متن
const detectTopic = (text) => {
  const t = (text || '').toLowerCase();
  if (t.includes('passato prossimo')) return 'passato_prossimo';
  if (t.includes('imperfetto')) return 'imperfetto';
  if (t.includes('futuro')) return 'futuro';
  if (t.includes('pronome diretto')) return 'pronomi_diretti';
  if (t.includes('pronome indiretto')) return 'pronomi_indiretti';
  if (t.includes('imperativo')) return 'imperativo';
  if (t.includes('plurale')) return 'plurale';
  if (t.includes('preposizione') || t.includes('stati uniti') || t.includes('vista')) return 'preposizioni';
  if (t.includes('intruso')) return 'intruso';
  if (t.includes('sta per')) return 'stare_per';
  if (t.includes('manca')) return 'mancare';
  if (t.includes('ne ')) return 'ne';
  return 'generico';
};

// تولید توضیح کوتاه برای پاپ‌آپ (می‌توانی بعداً به API وصلش کنی)
const makeExplanation = (topic, q, pair) => {
  const base = `Correct answer: "${pair.correctText}".`;
  switch (topic) {
    case 'passato_prossimo':
      return `${base}\n• 
      توضیح (فارسی):

        در جمله‌ی «Di sera ci addormentiamo davanti alla tv.» فعل “addormentarsi” یک فعل riflessivo (بازتابی) است.
        برای ساختن passato prossimo با افعال بازتابی همیشه از فعل essere استفاده می‌کنیم.
        بنابراین ساختار درست این است:
        ci siamo addormentati → (ما به خواب رفتیم).
        گزینه‌های دیگر اشتباه هستند چون یا کمکی اشتباه (avere) استفاده کرده‌اند یا شخص (ti/vi) با فاعل اصلی (noi) هماهنگ نیست.\n
        
    •Explanation (English):

        In the sentence “Di sera ci addormentiamo davanti alla tv”, the verb “addormentarsi” is a reflexive verb.
        When forming the passato prossimo of reflexive verbs, we always use the auxiliary essere.
        Thus, the correct form is:
        ci siamo addormentati → (we fell asleep).
        The other options are wrong because they either use the wrong auxiliary (avere) or the wrong subject pronoun (ti/vi instead of ci for “noi”).`;
    case 'imperfetto':
      return `${base}\n• Imperfetto → azioni abituali/passate, descrizioni, età, tempo: "da piccola... giocavo".`;
    case 'futuro':
      return `${base}\n• Futuro semplice per azioni future: "pagheranno", "rimarrete". Attenzione alle forme irregolari (rimanere → rimarr-).`;
    case 'pronomi_diretti':
      return `${base}\n• Pronomi diretti: mi, ti, lo/la, ci, vi, li/le.\n• Concordanza al passato prossimo con l’ausiliare avere: “li ho mangiati”.`;
    case 'pronomi_indiretti':
      return `${base}\n• Pronomi indiretti: mi, ti, gli/le, ci, vi, gli (loro).\n• Verbi come “telefonare” richiedono complemento indiretto → “gli telefonano”.`;
    case 'imperativo':
      return `${base}\n• Imperativo informale: seconda persona singolare = “entra!”.\n• Negativo: “non” + infinito → “non uscire!”.`;
    case 'preposizioni':
      return `${base}\n• Paesi plurali → “negli Stati Uniti”.\n• Espressioni fisse: “occhiali da vista”.`;
    case 'plurale':
      return `${base}\n• “braccio” ha due plurali: “le braccia” (parti del corpo) e “i bracci” (tecnico). Qui si richiede “bracci”.`;
    case 'stare_per':
      return `${base}\n• “stare per” + infinito indica azione imminente → “sta per chiudere”.`;
    case 'mancare':
      return `${base}\n• Struttura: “mancare a qualcuno”. Soggetto = cosa/persona che manca. “Gli manca la sua famiglia”.`;
    case 'intruso':
      return `${base}\n• Trova la parola che non appartiene al gruppo semantico (frutta/verdura/vestiti...).`;
    case 'ne':
      return `${base}\n• “ne” sostituisce di + cosa/quantità: “quanti ne hai presi? Ne ho presi tre”.`;
    default:
      return `${base}\n• Tip: leggi bene il contesto e controlla accordi, ausiliari e regole d’uso.`;
  }
};

const ExamFirstResultScreen = ({ navigation, route }) => {
  const {
    questions = [],
    selectedAnswers = {},
    correctAnswers = 0,
    totalQuestions = questions.length,
    timeSpent = 0,
  } = route.params || {};

  const [assistantVisible, setAssistantVisible] = useState(false);
  const [assistantIndex, setAssistantIndex] = useState(null);

  const minutes = Math.floor(timeSpent / 60);
  const seconds = (timeSpent % 60).toString().padStart(2, '0');

  const openAssistant = (idx) => {
    setAssistantIndex(idx);
    setAssistantVisible(true);
  };
  const closeAssistant = () => {
    setAssistantVisible(false);
    setAssistantIndex(null);
  };

  const assistantData = useMemo(() => {
    if (assistantIndex === null || !questions[assistantIndex]) return null;
    const q = questions[assistantIndex];
    const pair = formatPair(q, selectedAnswers[assistantIndex]);
    const topic = detectTopic(q.question);
    const text = makeExplanation(topic, q, pair);
    return { q, pair, topic, text, index: assistantIndex };
  }, [assistantIndex, questions, selectedAnswers]);

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
              <Text style={styles.qTitle}>
                {idx + 1}- {q.question}
              </Text>

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
                  activeOpacity={0.8}
                >
                  
                  <Text style={styles.assistantText}>Assistant</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* summary like mock */}
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Results</Text>
          <Text style={styles.summaryMeta}>{correctAnswers}/{totalQuestions}</Text>
        </View>
        <Text style={styles.timeText}>Time {minutes}:{seconds}</Text>
      </ScrollView>

      {/* Assistant Modal */}
      <Modal
        transparent
        visible={assistantVisible}
        animationType="fade"
        onRequestClose={closeAssistant}
      >
        <Pressable style={styles.backdrop} onPress={closeAssistant} />
        <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>assistant</Text>
            <TouchableOpacity onPress={closeAssistant} style={styles.closeBtn}>
              <Text style={styles.closeTxt}>×</Text>
            </TouchableOpacity>
          </View>

          {assistantData && (
            <View style={styles.modalBody}>
              <Text style={styles.modalQuestionIndex}>
                {assistantData.index + 1}.{' '}
                <Text style={styles.modalQuestionBold}>
                  {assistantData.q.question.split('\n')[0]}
                </Text>
              </Text>

              <Text style={styles.modalQuestionRest}>
                {assistantData.q.question.split('\n').slice(1).join('\n')}
              </Text>

              <View style={styles.correctBubble}>
                <Text style={styles.correctBubbleText}>
                  Correct response:{' '}
                  <Text style={styles.correctAnsBold}>
                    {assistantData.pair.correctText}
                  </Text>
                </Text>
              </View>

              <Text style={styles.aiText}>
                {assistantData.text}
              </Text>
            </View>
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
  backButton: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#F5F5F5',
    justifyContent: 'center', alignItems: 'center'
  },
  backIcon: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  headerTitle: { fontSize: 22, fontFamily: 'Poppins-Bold', color: '#111827' },
  headerMeta: { fontSize: 16, fontFamily: 'Poppins-Medium', color: '#6B7280' },

  list: { padding: 16, paddingBottom: 32 },
  card: {
    borderRadius: 16, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
  cardCorrect: { backgroundColor: '#D1FAD7', borderWidth: 1, borderColor: '#A7F3D0' },
  cardWrong: { backgroundColor: '#FFE1E1', borderWidth: 1, borderColor: '#FECACA' },

  qTitle: { fontSize: 14, lineHeight: 20, color: '#111827', fontFamily: 'Poppins-Medium' },
  separator: { height: 1, backgroundColor: '#E5E7EB', marginVertical: 8 },
  label: { fontSize: 14, color: '#374151', marginBottom: 6, fontFamily: 'Poppins-Regular' },
  userAns: { fontFamily: 'Poppins-SemiBold', color: '#111827' },
  correctAns: { fontFamily: 'Poppins-Bold', color: '#111827' },

  cardFooter: { marginTop: 8, alignItems: 'flex-end' },
  assistantPill: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 10, paddingVertical: 6,
    backgroundColor: '#FFFFFF', borderRadius: 16,
    borderWidth: 1, borderColor: '#E5E7EB',
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }
  },
  assistantEmoji: { fontSize: 14, marginRight: 6 },
  assistantText: { fontSize: 12, color: '#6B7280', fontFamily: 'Poppins-Medium' },

  // Modal styles
  backdrop: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
  modalCard: {
    position: 'absolute', left: 16, right: 16, top: 80,
    backgroundColor: '#fff', borderRadius: 16,
    paddingBottom: 10,
    shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }
  },
  modalHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 14, paddingBottom: 10,
    borderBottomWidth: 1, borderBottomColor: '#E5E7EB'
  },
  modalTitle: { fontSize: 18, color: '#1F2937', fontFamily: 'Poppins-Bold' },
  closeBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  closeTxt: { fontSize: 18, color: '#111827', fontWeight: '600' },

  modalBody: { paddingHorizontal: 16, paddingTop: 12 },
  modalQuestionIndex: { fontSize: 14, color: '#111827', marginBottom: 6, fontFamily: 'Poppins-SemiBold' },
  modalQuestionBold: { fontFamily: 'Poppins-Bold' },
  modalQuestionRest: { fontSize: 14, color: '#374151', marginBottom: 10, lineHeight: 20, fontFamily: 'Poppins-Regular' },

  correctBubble: {
    backgroundColor: '#D1FAD7', borderColor: '#A7F3D0', borderWidth: 1,
    padding: 10, borderRadius: 12, marginBottom: 12
  },
  correctBubbleText: { fontSize: 14, color: '#065F46', fontFamily: 'Poppins-Medium' },
  correctAnsBold: { fontFamily: 'Poppins-Bold' },

  aiText: { fontSize: 14, color: '#1F2937', lineHeight: 20, marginBottom: 12, fontFamily: 'Poppins-Regular' },

  modalFooter: { paddingHorizontal: 16, paddingBottom: 12, alignItems: 'flex-end' },
  okBtn: { backgroundColor: '#4C6EF5', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10 },
  okBtnText: { color: '#fff', fontSize: 14, fontFamily: 'Poppins-SemiBold' },
});

export default ExamFirstResultScreen;
