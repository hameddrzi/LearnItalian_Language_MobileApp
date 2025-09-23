import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

const GlossaryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const words = [
    { id: 1, word: 'Ciao', translation: 'Hello / Goodbye', example: 'Ciao bella! - Hello beautiful!' },
    { id: 2, word: 'Grazie', translation: 'Thank you', example: 'Grazie mille! - Thank you very much!' },
    { id: 3, word: 'Prego', translation: 'You\'re welcome', example: 'Prego, non c\'è di che - You\'re welcome, don\'t mention it' },
    { id: 4, word: 'Buongiorno', translation: 'Good morning', example: 'Buongiorno signora - Good morning madam' },
    { id: 5, word: 'Arrivederci', translation: 'Goodbye', example: 'Arrivederci a presto - Goodbye, see you soon' },
    { id: 6, word: 'Scusi', translation: 'Excuse me', example: 'Scusi, dov\'è la stazione? - Excuse me, where is the station?' },
  ];

  const filteredWords = words.filter(item =>
    item.word.toLowerCase().includes(searchText.toLowerCase()) ||
    item.translation.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity 
             
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../../assets/pic/mainIcons/Back.png')}
              style={{height: 50, width: 50, tintColor: '#0a0a0ab4', marginTop: 40}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Glossary</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>Vocabulary Progress</Text>
            <Text style={styles.progressSubtitle}>Learned: 10/16 words</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBackground}>
                <View style={[styles.progressFill, { width: '63%' }]} />
              </View>
            </View>
            
            <Text style={styles.progressText}>63% Complete</Text>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search words..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.wordsContainer}>
            <Text style={styles.wordsTitle}>Dictionary</Text>
            
            {filteredWords.map((item) => (
              <TouchableOpacity key={item.id} style={styles.wordCard}>
                <View style={styles.wordHeader}>
                  <Text style={styles.wordText}>{item.word}</Text>
                  <View style={styles.wordStatus}>
                    <Text style={styles.statusIcon}>✓</Text>
                  </View>
                </View>
                <Text style={styles.wordTranslation}>{item.translation}</Text>
                <Text style={styles.wordExample}>{item.example}</Text>
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
    backgroundColor: '#E8EAF6',
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
    marginBottom: 20,
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
    backgroundColor: '#5C6BC0',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#5C6BC0',
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#1F2937',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  wordsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
  },
  wordsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginBottom: 20,
  },
  wordCard: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  wordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  wordText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#DC2626',
  },
  wordStatus: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIcon: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  wordTranslation: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 5,
  },
  wordExample: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#059669',
    lineHeight: 20,
  },
});

export default GlossaryScreen;









