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
  { title: 'Pre-Intermediate Italian Lessons 1', description: 'Present Progressive Tense', type: 'lesson' },
  { title: 'Pre-Intermediate Italian Lessons 2', description: 'Past Tense, Other Aspects', type: 'lesson' },
  { title: 'Pre-Intermediate Italian Lessons 3', description: 'The Imperative', type: 'lesson' },
  { title: 'Pre-Intermediate Italian Lessons 4', description: 'The Imperfect Tense', type: 'lesson' },
  { title: 'Pre-Intermediate Italian Lessons 5', description: 'The Future Simple Tense', type: 'lesson' },
  { title: 'Pre-Intermediate Italian Lessons 6', description: 'Conditional Present', type: 'lesson' },
  { title: 'Pre-Intermediate Italian Lessons 7', description: 'Subjunctive Present', type: 'lesson' },
  { title: 'Pre-Intermediate Italian Lessons 8', description: 'Pronominal Verbs', type: 'lesson' },




  { title: 'Pre-Intermediate Italian Grammar 1', description: 'Aggettivi e avverbi / Adjectives and adverbs', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 2', description: 'Aggettivi possessivi / Possessive adjectives', type: 'grammar' }, 
  { title: 'Pre-Intermediate Italian Grammar 3', description: 'Condizionale', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 4', description: 'Condizionale semplice / Simple conditional', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 5', description: 'Congiuntivo presente / Subjunctive present tense', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 6', description: 'Consonanti doppie / Double consonants', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 7', description: 'Futuro semplice / Simple future tense', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 8', description: 'Imperativo diretto / Imperative form (informal)', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 9', description: 'Imperativo indiretto / Imperative form (formal)', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 10', description: 'Imperfetto / Imperfect', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 11', description: 'Pronomi diretti al passato prossimo / Direct pronouns in the Present Perfect', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 12', description: 'Stare + gerundio / -ing form', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 13', description: 'Uso intransitivo e transitivo di un verbo / Transitive and intransitive uses of a verb', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 14', description: 'Verbi irregolari / Irregular verbs', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 15', description: 'Verbi modali al passato prossimo / Modal verbs in the Present Perfect', type: 'grammar' },
  { title: 'Pre-Intermediate Italian Grammar 16', description: 'Verbi pronominali FARCELA e ANDARSENE / Pronominal verbs FARCELA and ANDARSENE', type: 'grammar' },






  { title: 'Practice 1', description: 'Aggettivi possessivi 1 / Possessive adjectives', type: 'practice' },
  { title: 'Practice 2', description: 'Andarsene / To go away', type: 'practice' },
  { title: 'Practice 3', description: 'ANDARSENE o FARCELA', type: 'practice' },
  { title: 'Practice 4', description: 'Articolo – con o senza? / Article – with or without?', type: 'practice' },
  { title: 'Practice 5', description: 'Futuro semplice 1 / Simple future tense', type: 'practice' },
  { title: 'Practice 6', description: 'Futuro semplice 2 / Simple future tense', type: 'practice' },
  { title: 'Practice 7', description: 'Participio passato – verbi irregolari 1 / Past Participle – irregular verbs', type: 'practice' },
  { title: 'Practice 8', description: 'Participio passato – verbi irregolari 2 / Past Participle – irregular verbs', type: 'practice' },
  { title: 'Practice 9', description: 'Imperativo / Imperative form', type: 'practice' },
  { title: 'Practice 10', description: 'Imperfetto 1 / Imperfect', type: 'practice' },
  { title: 'Practice 11', description: 'Imperfetto 2 / Imperfect', type: 'practice' },
  { title: 'Practice 12', description: 'Imperfetto o passato prossimo 1 / Imperfect or Present Perfect', type: 'practice' },
  { title: 'Practice 13', description: 'Imperfetto o passato prossimo 2 / Imperfect or Present Perfect', type: 'practice' },
  { title: 'Practice 14', description: 'Stare facendo / -ing form', type: 'practice' }, 
  { title: 'Practice 15', description: 'Stare + Gerundio / -ing form', type: 'practice' },
  { title: 'Practice 16', description: 'Uso del condizionale / Use of the conditional', type: 'practice' },
  { title: 'Practice 17', description: 'Verbi modali al passato prossimo / Modal verbs in the Present Perfect', type: 'practice' },
  { title: 'Practice 18', description: 'Verbi riflessivi / Reflexive verbs', type: 'practice' },

 
];
const A2Screen = ({ navigation }) => {


 const [filter, setFilter] = useState('all');

  const filteredLessons = useMemo(() => {
    if (filter === 'all') return LESSONS;
    return LESSONS.filter(i => i.type === filter);
  }, [filter]);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity 
            
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../../../assets/pic/mainIcons/Back.png')}
              style={{height: 50, width: 50, tintColor: '#0a0a0ab4', marginTop: 40}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>A2 Level</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>A2 Course</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9C4',
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
    backgroundColor: '#FBC02D',
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

export default A2Screen;









