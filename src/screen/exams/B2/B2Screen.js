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
  { title: 'Upper-Intermediate Italian Lessons 1', description: 'Remote Past', type: 'lesson' },
  { title: 'Upper-Intermediate Italian Lessons 2', description: 'Uses Of The Subjunctive', type: 'lesson' },
  { title: 'Upper-Intermediate Italian Lessons 3', description: 'Relative Pronouns', type: 'lesson' },
  { title: 'Upper-Intermediate Italian Lessons 4', description: 'Type And Position Of Adjectives', type: 'lesson' },
  { title: 'Upper-Intermediate Italian Lessons 5', description: 'The Impersonal Form With ‘Si’ (part 2)', type: 'lesson' },
  { title: 'Upper-Intermediate Italian Lessons 6', description: 'Linkers', type: 'lesson' },





  { title: 'Upper-Intermediate Italian Grammar 1', description: 'Definite and relational adjectives', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 2', description: 'Adverbs and conjunctions used as linkers', type: 'grammar' }, 
  { title: 'Upper-Intermediate Italian Grammar 3', description: 'Broken constuction', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 4', description: 'Diminutives and augmentatives', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 5', description: 'Passive form', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 6', description: 'Imperative form', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 7', description: 'Compound words', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 8', description: 'Preterite – the “remote” past tense', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 9', description: 'Position of the adjectives', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 10', description: 'Relative pronoun “che”', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 11', description: 'Relative double pronoun “chi”', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 12', description: 'When to use subjunctive?', type: 'grammar' },
  { title: 'Upper-Intermediate Italian Grammar 13', description: '“Si” impersonal', type: 'grammar' },






  { title: 'Practice 1', description: 'A/di/per/con/su/tra', type: 'practice' },
  { title: 'Practice 2', description: 'Accenti / Accents', type: 'practice' },
  { title: 'Practice 3', description: 'Congiuntivo o indicativo?', type: 'practice' },
  { title: 'Practice 4', description: 'Congiuntivo con avverbi e congiunzioni', type: 'practice' },
  { title: 'Practice 5', description: 'Congiuntivo, uso del (1)', type: 'practice' },
  { title: 'Practice 6', description: 'Connettivi 2', type: 'practice' },
  { title: 'Practice 7', description: 'Esclamazioni 1 / Exclamations', type: 'practice' },
  { title: 'Practice 8', description: 'Esclamazioni 2 / Exclamations', type: 'practice' },
  { title: 'Practice 9', description: 'Forma passiva', type: 'practice' },
  { title: 'Practice 10', description: 'Si + verbo / Si + verb', type: 'practice' },
  { title: 'Practice 11', description: 'Passato remoto', type: 'practice' },
  { title: 'Practice 12', description: 'Periodo ipotetico 1 / Conditional clause', type: 'practice' },
  { title: 'Practice 13', description: 'Periodo ipotetico 2 / Conditional clause', type: 'practice' },
  { title: 'Practice 14', description: '“Si” spersonalizzante / “Si” impersonal', type: 'practice' }, 
  { title: 'Practice 15', description: 'Tempo metereologico / Weather', type: 'practice' },
  { title: 'Practice 16', description: 'Uso del congiuntivo / Use of subjunctive', type: 'practice' },
  { title: 'Practice 17', description: 'Uso del verbo “venire” / Use of the verb “to come”', type: 'practice' },

];


const B2Screen = ({ navigation }) => {
  
    
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
          <Text style={styles.title}>B2 Level</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>B2 Course</Text>
            <Text style={styles.progressSubtitle}>Completed: 12/18</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBackground}>
                <View style={[styles.progressFill, { width: '67%' }]} />
              </View>
            </View>
            
            <Text style={styles.progressText}>67% Complete</Text>
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
            <Text style={styles.lessonsTitle}>B2 Lessons</Text>
            
              {filteredLessons.map((lesson, index) => (
                <TouchableOpacity key={index} style={styles.lessonCard}>
                  <View style={styles.lessonInfo}>
                    <Text style={styles.lessonNumber}>{lesson.title}</Text>
                    <Text style={styles.lessonDescription}>{lesson.description}</Text>
                  </View>
                  <View
                    style={[
                      styles.lessonStatus,
                      { backgroundColor: index < 3 ? '#4372d8ff' : '#E0E0E0' },
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
    backgroundColor: '#E3F2FD',
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
    backgroundColor: '#2196F3',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#2196F3',
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

export default B2Screen;









