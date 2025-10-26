//A1Screen.js

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
  { id: "lesson-Articles",title: 'Elementary Italian Lessons 1', description: 'Articles', type: 'lesson' },
  { id: "lesson-Plurals",title: 'Elementary Italian Lessons 2', description: 'Plurals', type: 'lesson' },
  { id: "lesson-There",title: 'Elementary Italian Lessons 3', description: 'There is/There are', type: 'lesson' },
  { id: "lesson-Verbs-in-the-present-tense",title: 'Elementary Italian Lessons 4', description: 'Verbs in the present tense', type: 'lesson' },
  { id: "lesson-Piacciono",title: 'Elementary Italian Lessons 5', description: 'Like – Piace / Piacciono', type: 'lesson' },
  { id: "lesson-Adjectives",title: 'Elementary Italian Lessons 6', description: 'Adjectives', type: 'lesson' },
  { id: "lesson-Adverbs",title: 'Elementary Italian Lessons 7', description: 'Adverbs', type: 'lesson' },
  { id: "lesson-Past",title: 'Elementary Italian Lessons 8', description: 'The Past', type: 'lesson' },
  { id: "lesson-Direct-and-indirect-pronouns",title: 'Elementary Italian Lessons 9', description: 'Direct and indirect pronouns', type: 'lesson' },
  { id: "lesson-Prepositions",title: 'Elementary Italian Lessons 10', description: 'Prepositions', type: 'lesson' }, 
  { id: "lesson-Reflexive-verbs",title: 'Elementary Italian Lessons 11', description: 'Reflexive verbs', type: 'lesson' },
  { id: "lesson-The-Impersonal",title: 'Elementary Italian Lessons 12', description: 'The Impersonal Form With ‘Si’ ', type: 'lesson' },


  //practice
  { id:"Adjectives" ,title: 'Practice 1', description: 'Aggettivi / Adjectives', type: 'practice' },
  { id:"Articles1",title: 'Practice 2', description: 'Articoli 1 / Articles', type: 'practice' },
  { id:"here-is-o-there-are",title: 'Practice 3', description: 'C’é o ci sono – 2 / There is o there are', type: 'practice' },
  { id:"Verbs-in-the-present-tense",title: 'Pratice 4', description: 'Verbs in the present tense', type: 'practice' },
  { id:"Piace-or-piacciono",title: 'Practice 5', description: 'Piace or piacciono', type: 'practice' },
  { id:"Adjectives",title: 'Practice 6', description: 'Adjectives', type: 'practice' },

  { id:"Present-Perfect1",title: 'Practice 9', description: 'Passato prossimo 1 / Present Perfect', type: 'practice' },
  { id:"Present-Perfect2",title: 'Practice 10', description: 'Passato prossimo 2 / Present Perfect', type: 'practice' },
  { id:"Present-Perfect-to-be",title: 'Practice 11', description: 'Passato prossimo essere o avere / Present Perfect to be or to have', type: 'practice' },
  { id:"Plural-of-nouns1",title: 'Practice 12', description: 'Plurale dei nomi – 1 / Plural of nouns', type: 'practice' },
  { id:"Plural-of-nouns2",title: 'Practice 13', description: 'Plurale dei nomi – 2 / Plural of nouns', type: 'practice' },
  { id:"Present-Simple-tense",title: 'Practice 14', description: 'Presente indicativo 1 / Present Simple tense', type: 'practice' }, 
  { id:"Direct-pronouns",title: 'Practice 15', description: 'Pronomi diretti 1 / Direct pronouns', type: 'practice' },
  { id:"Indirect-pronouns",title: 'Practice 16', description: 'Pronomi indiretti / Indirect pronouns', type: 'practice' },
 
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
              <TouchableOpacity key={index} style={styles.lessonCard}
                onPress={() => {
                  const parent = navigation.getParent();
                  if (!parent) return;
                  if (lesson.type === 'practice') {
                    parent.navigate('A1Practice', { id: lesson.id, title: lesson.title });
                  } else {
                    parent.navigate('A1LessonPager', { id: lesson.id, title: lesson.title });
                  }
                }}

              >


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






