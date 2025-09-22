import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';


const LESSONS = [
  { title: 'Elementary Italian Lessons 1', description: 'Articles', type: 'lesson' },
  { title: 'Elementary Italian Lessons 2', description: 'Plurals', type: 'lesson' },
  { title: 'Elementary Italian Lessons 3', description: 'There is/There are', type: 'lesson' },
  { title: 'Elementary Italian Lessons 4', description: 'Verbs in the present tense', type: 'lesson' },
  { title: 'Elementary Italian Lessons 5', description: 'Like – Piace / Piacciono', type: 'lesson' },
  { title: 'Elementary Italian Lessons 6', description: 'Adjectives', type: 'lesson' },
  { title: 'Elementary Italian Lessons 7', description: 'Adverbs', type: 'lesson' },
  { title: 'Elementary Italian Lessons 8', description: 'The Past', type: 'lesson' },
  { title: 'Elementary Italian Lessons 9', description: 'Direct and indirect pronouns', type: 'lesson' },
  { title: 'Elementary Italian Lessons 10', description: 'Prepositions', type: 'lesson' }, 
  { title: 'Elementary Italian Lessons 11', description: 'Reflexive verbs', type: 'lesson' },
  { title: 'Elementary Italian Lessons 12', description: 'The Impersonal Form With ‘Si’ ', type: 'lesson' },





  { title: 'Elementary Italian Grammar 1', description: 'A or in?', type: 'grammar' },
  { title: 'Elementary Italian Grammar 2', description: 'Articoli / Articles', type: 'grammar' }, 
  { title: 'Elementary Italian Grammar 3', description: 'Avverbi / Adverbs', type: 'grammar' },
  { title: 'Elementary Italian Grammar 4', description: 'C’è/ci sono / There is/there are', type: 'grammar' },
  { title: 'Elementary Italian Grammar 5', description: 'Forma “Lei” / The “Lei” form', type: 'grammar' },
  { title: 'Elementary Italian Grammar 6', description: 'Forma passiva / Passive form', type: 'grammar' },
  { title: 'Elementary Italian Grammar 7', description: 'Passato prossimo / Present Perfect', type: 'grammar' },
  { title: 'Elementary Italian Grammar 8', description: 'Piace / Piacciono', type: 'grammar' },
  { title: 'Elementary Italian Grammar 9', description: 'Plurali / Plurals', type: 'grammar' },
  { title: 'Elementary Italian Grammar 10', description: 'Pronomi / Pronouns', type: 'grammar' },
  { title: 'Elementary Italian Grammar 11', description: 'Verbi – introduzione/ Introduction to verbs', type: 'grammar' },
  { title: 'Elementary Italian Grammar 12', description: 'Verbi regolari / Regular verbs', type: 'grammar' },
  { title: 'Elementary Italian Grammar 13', description: 'Verbi riflessivi / Reflexive verbs', type: 'grammar' },
  { title: 'Elementary Italian Grammar 14', description: 'Verbi utili / Useful verbs', type: 'grammar' },






  { title: 'Practice 1', description: 'Aggettivi / Adjectives', type: 'practice' },
  { title: 'Practice 2', description: 'Articoli 1 / Articles', type: 'practice' },
  { title: 'Practice 3', description: 'Articoli 2 / Articles', type: 'practice' },
  { title: 'Practice 4', description: 'C’é o ci sono – 1 / There is o there are', type: 'practice' },
  { title: 'Practice 5', description: 'C’é o ci sono – 2 / There is o there are', type: 'practice' },
  { title: 'Practice 6', description: 'Colori / Colors', type: 'practice' },
  { title: 'Practice 7', description: 'Participio passato – verbi irregolari 1 / Past Participle – irregular verbs', type: 'practice' },
  { title: 'Practice 8', description: 'Participio passato – verbi irregolari 2 / Past Participle – irregular verbs', type: 'practice' },
  { title: 'Practice 9', description: 'Passato prossimo 1 / Present Perfect', type: 'practice' },
  { title: 'Practice 10', description: 'Passato prossimo 2 / Present Perfect', type: 'practice' },
  { title: 'Practice 11', description: 'Passato prossimo essere o avere / Present Perfect to be or to have', type: 'practice' },
  { title: 'Practice 12', description: 'Plurale dei nomi – 1 / Plural of nouns', type: 'practice' },
  { title: 'Practice 13', description: 'Plurale dei nomi – 2 / Plural of nouns', type: 'practice' },
  { title: 'Practice 14', description: 'Presente indicativo 1 / Present Simple tense', type: 'practice' }, 
  { title: 'Practice 15', description: 'Pronomi diretti 1 / Direct pronouns', type: 'practice' },
  { title: 'Practice 16', description: 'Pronomi indiretti / Indirect pronouns', type: 'practice' },
  { title: 'Practice 17', description: 'Verbo ESSERE / Verb TO BE', type: 'practice' },
  { title: 'Practice 18', description: 'Verbo AVERE / Verb TO HAVE', type: 'practice' },

 
];

function A1Screen({ navigation }) {
  const [filter, setFilter] = useState('all');

  const filteredLessons = useMemo(() => {
    if (filter === 'all') return LESSONS;
    return LESSONS.filter(i => i.type === filter);
  }, [filter]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/pic/mainIcons/Back.png')}
              style={{ height: 50, width: 50, marginTop: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>A1 Level</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          {/* Progress Card — همون قبلی */}
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>A1 Course</Text>
            <Text style={styles.progressSubtitle}>Completed: 10/16</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBackground}>
                <View style={[styles.progressFill, { width: '63%' }]} />
              </View>
            </View>
            <Text style={styles.progressText}>63% Complete</Text>
          </View>

          {/* Filter Bar */}
          <View style={styles.filterBar}>
            {[
              { label: 'All', value: 'all' },
              { label: 'Lesson', value: 'lesson' },
              { label: 'Grammar', value: 'grammar' },
              { label: 'Practice', value: 'practice' },
            ].map(opt => {
              const active = opt.value === filter;
              return (
                <TouchableOpacity
                  key={opt.value}
                  onPress={() => setFilter(opt.value)}
                  style={[styles.pill, active && styles.pillActive]}
                >
                  <Text style={[styles.pillText, active && styles.pillTextActive]}>
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Lessons */}
          <View style={styles.lessonsContainer}>
            <Text style={styles.lessonsTitle}>A1 Lessons</Text>

            {filteredLessons.map((lesson, index) => (
              <TouchableOpacity key={index} style={styles.lessonCard}>
                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonNumber}>{lesson.title}</Text>
                  <Text style={styles.lessonDescription}>{lesson.description}</Text>
                </View>
                <View
                  style={[
                    styles.lessonStatus,
                    { backgroundColor: index < 3 ? '#F57F17' : '#E0E0E0' },
                  ]}
                >
                  <Text style={styles.statusIcon}>{index < 15 ? '✓' : '▶'}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa47bc4b',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#1F2937',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginTop: 40
  },
  placeholder: {
    width: 40,
  },
  content: {
    paddingHorizontal: 20,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  progressTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginBottom: 5,
  },
  progressSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6B7280',
    marginBottom: 15,
  },
  progressContainer: {
    marginBottom: 10,
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#AB47BC',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#F57F17',
    textAlign: 'center',
  },
  lessonsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
  },
  lessonsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginBottom: 20,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  lessonInfo: {
    flex: 1,
  },
  lessonNumber: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 2,
  },
  lessonDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6B7280',
  },
  lessonStatus: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },


  filterBar: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 8,
  marginBottom: 12,
},
pill: {
  paddingVertical: 10,
  paddingHorizontal: 18,
  borderRadius: 24,
  backgroundColor: '#EEF2FF',
  marginRight: 12, // به‌جای gap
},
pillActive: { backgroundColor: '#4F46E5', elevation: 2 },
pillText: { fontSize: 14, color: '#7C8295', fontWeight: '600' },
pillTextActive: { color: '#fff' },

});

export default A1Screen;






