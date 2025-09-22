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
  { title: 'Intermediate Italian Lessons 1', description: 'Passive', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 2', description: 'Combined Pronouns', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 3', description: 'Conditional Past', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 4', description: 'Past Perfect', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 5', description: 'Subjunctive Past', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 6', description: 'Subjunctive Imperfect', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 7', description: 'Subjunctive Past Perfect', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 8', description: 'Unreal Present', type: 'lesson' },
  { title: 'Intermediate Italian Lessons 9', description: 'Unreal Past', type: 'lesson' },





  { title: 'Intermediate Italian Grammar 1', description: 'Composed conditional', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 2', description: 'Subjunctive in the Imperfect tense', type: 'grammar' }, 
  { title: 'Intermediate Italian Grammar 3', description: 'Subjunctive in the Past tense', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 4', description: 'Subjunctive in the Present tense', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 5', description: 'Subjunctive in the Past Perfect tense', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 6', description: 'Impersonal form with verb ‘to be’', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 7', description: 'Passive form', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 8', description: 'Conditional clause of the possibility', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 9', description: 'Conditional clause of the impossibility', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 10', description: 'Combined pronouns', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 11', description: 'Past Perfect tense', type: 'grammar' },
  { title: 'Intermediate Italian Grammar 12', description: 'Use of “before”', type: 'grammar' },






  { title: 'Practice 1', description: 'A/in/di/per/con?', type: 'practice' },
  { title: 'Practice 2', description: 'Ambiente e riciclaggio / Environment and recycling', type: 'practice' },
  { title: 'Practice 3', description: 'Avverbi 1 / Adverbs', type: 'practice' },
  { title: 'Practice 4', description: 'Condizionale composto / Composed conditionalx', type: 'practice' },
  { title: 'Practice 5', description: 'Condizionale composto', type: 'practice' },
  { title: 'Practice 6', description: 'Congiuntivo 1 / Subjunctive', type: 'practice' },
  { title: 'Practice 7', description: 'Congiuntivo 2 / Subjunctive', type: 'practice' },
  { title: 'Practice 8', description: 'Congiuntivo imperfetto / Subjunctive in the Imperfect tense', type: 'practice' },
  { title: 'Practice 9', description: 'Congiuntivo passato / Subjunctive in the Past tense', type: 'practice' },
  { title: 'Practice 10', description: 'Congiuntivo presente', type: 'practice' },
  { title: 'Practice 11', description: 'Congiuntivo: quale tempo? 1 / Subjunctive: which tense?', type: 'practice' },
  { title: 'Practice 12', description: 'Congiunzioni 1 / Conjunctions', type: 'practice' },
  { title: 'Practice 13', description: 'Futuro semplice 1 / Future simple tense', type: 'practice' },
  { title: 'Practice 14', description: 'In, da, a, per?', type: 'practice' }, 
  { title: 'Practice 15', description: 'Passato remoto 1 / Preterite tense', type: 'practice' },
  { title: 'Practice 16', description: 'Periodi ipotetici / Conditional clauses', type: 'practice' },
  { title: 'Practice 17', description: 'Periodo ipotetico 1 / Conditional clause', type: 'practice' },
  { title: 'Practice 18', description: 'Preposizioni articolate', type: 'practice' },
  { title: 'Practice 19', description: 'Pronomi combinati 1 / Combined pronouns', type: 'practice' },
  { title: 'Practice 20', description: 'Pronomi combinati 2 / Combined pronouns', type: 'practice' },
  { title: 'Practice 21', description: 'Trapassato prossimo / Past Perfect tense', type: 'practice' },
  { title: 'Practice 22', description: 'Verbi al condizionale / Verbs in the conditional', type: 'practice' },  
  { title: 'Practice 23', description: 'Verbi e definizioni / Verbs and definitions', type: 'practice' },

 
];

const B1Screen = ({ navigation }) => {


  
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
          <Text style={styles.title}>B1 Level</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>B1 Course</Text>
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
    backgroundColor: '#E0F2F1',
    
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
    backgroundColor: '#26A69A',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#26A69A',
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
    fontSize: 12,
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

export default B1Screen;






